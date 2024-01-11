import "~/styles/globals.css";

import { Metadata } from "next";
import Navigation from "./ui/navigation";
import SocialMediaLinks from "./ui/social-media-links";

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
      <body className="space-y-8 ml-8">
          <div>
            <Navigation />
          </div>
          <div>{children}</div>
          <div>
            <SocialMediaLinks />
          </div>
      </body>
    </html>
  );
}
