import { NextResponse, NextRequest } from 'next/server'
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, subject, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    var emailSubject = `Message from ${email}`;
    if (name !== "") {
        const insertPoint = 13
        emailSubject = emailSubject.slice(0, insertPoint) + name + " (" + emailSubject.slice(insertPoint) + ")"
    }
    if (subject !== "") {
        emailSubject = emailSubject + ": " + subject
    }

    const mailOptions: Mail.Options = {
        from: process.env.EMAIL_ADRESS,
        to: process.env.EMAIL_ADDRESS,
        // cc: email, (uncomment this line if you want to send a copy to the sender)
        subject: emailSubject,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }

}