import "~/styles/globals.css";

import { Metadata } from "next";
import Navigation from "./ui/navigation";
import SocialMediaLinks from "./ui/social-media-links";
import { roboto_slab } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    template: '%s | Zachary Anderson',
    default: 'Zachary Anderson',
  },
  description: 'The Portfolio Website of Zachary Anderson',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto_slab.className}`}>
        <div className="">
          <Navigation />
        </div>
        <div className="h-screen">
          <div className="pt-8 pb-12">
            {children}
          </div>
          <SocialMediaLinks />
        </div>
      </body>
    </html>
  );
}
