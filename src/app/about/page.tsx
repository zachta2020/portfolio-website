import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About',
};

export default function Page() {
    return (
        <main className="flex flex-col gap-10 mx-40 my-10">
            <div>
                <h1 className="text-5xl font-bold">Background</h1>
                <div className="text-2xl mt-6 flex flex-col gap-4">
                    <p>Hello, my name is Zachary Thomas Anderson, and I'm a Software Developer with background in both IT and Cybersecurity.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero urna, auctor non tempus at, congue sit amet sapien.
                        In pretium risus at leo condimentum, in molestie neque posuere. Suspendisse a eros bibendum, tincidunt tellus et, accumsan massa. Duis pharetra tincidunt varius. Duis nec dolor condimentum,
                        volutpat est eget, elementum purus. Aliquam erat volutpat. Vestibulum sit amet pulvinar dui. Nam et odio orci.</p>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Technical Skills</h1>
                <div className="flex flex-row mt-6 gap-40">
                    <div>
                        <h2 className="text-4xl">Great</h2>
                        <ul className="list-disc list-inside text-2xl mt-4 ml-2">
                            <li>Python</li>
                            <li>Linux</li>
                            <li>PC</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-4xl">Competent</h2>
                        <ul className="list-disc list-inside text-2xl mt-4 ml-2">
                            <li>C</li>
                            <li>SQL</li>
                            <li>Mac</li>
                            <li>Zoom</li>
                            <li>Rust</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-4xl">Familiar</h2>
                        <ul className="list-disc list-inside text-2xl mt-4 ml-2">
                            <li>C++</li>
                            <li>C#</li>
                            <li>VPython</li>
                            <li>Javascript (Node.js)</li>
                            <li>SQL Server Integration Services (SSIS)</li>
                            <li>SQL Server Analysis Services (SSAS)</li>
                            <li>SQL Server Reporting Services (SSRS)</li>
                            <li>Cyber Security Principles</li>
                            <li>PowerBI</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold">Certifications</h1>
                <ul className="list-disc list-inside text-2xl mt-6 ml-2">
                    <li>CompTIA Cybersecurity Analyst+ (CySA+)</li>
                    <li>CompTIA Security+</li>
                    <li>CompTIA PenTest+</li>
                    <li>CompTIA A+</li>
                </ul>
            </div>
        </main>
    );
}