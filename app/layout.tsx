import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "/styles/globals.css";
import { StoreProvider } from "../redux/provider";
import { ThemeProvider } from "@/components/themeProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import NextUIProvider from "@/components/nextui-provider"
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Wafipix | A graphical design studio",
  description: "This is wafipix, a graphical design studio, it's for all your graphical design needs. We are a team of professional designers who are ready. Wher you are a startup or a big company, we are here to help you. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. So what are you waiting for? Let's get started. Now you can get started with us. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs. We are here to help you with your branding, logo, website, and all your graphical design needs.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={poppins.className}>
        <Head>
          <link rel="icon" href="./../public/favicon.ico" />
        </Head>
        <NextUIProvider>
          <ThemeProvider
            defaultTheme="system"
            enableSystem
            attribute="class"
            disableTransitionOnChange
            >
            <StoreProvider>
              <SessionProvider>

                {children}
                <Toaster />
              </SessionProvider>
            </StoreProvider>
          </ThemeProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
