import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provier"
import { ClerkProvider } from '@clerk/nextjs'
const sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoFlow",
  description: "Automate your workflow with AutoFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={sans.className}>
    
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
