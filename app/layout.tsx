"use client";

import { useEffect } from "react";
import { metadata } from "./models/userModel";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// declare global {
//   interface Window {
//     fbAsyncInit?: () => void;
//     FB: FBType;
//   }
// }

// interface FBType {
//   init: (options: { appId: string; cookie: boolean; xfbml: boolean; version: string }) => void;
//   AppEvents: {
//     logPageView: () => void;
//   };
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    document.title = metadata.title;
  }, []);

  // useEffect(() => {
  //   if (!document.getElementById('facebook-jssdk')) {
  //     window.fbAsyncInit = function () {
  //       const FB = window.FB as FBType;

  //       FB.init({
  //         appId: "", //process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  //         cookie: true,
  //         xfbml: true,
  //         version: 'v10.0',
  //       });

  //       FB.AppEvents.logPageView();
  //     };

  //     (function (d, s, id) {
  //       const fjs = d.getElementsByTagName(s)[0];
  //       const js = d.createElement(s) as HTMLScriptElement;
  //       js.id = id;
  //       js.src = 'https://connect.facebook.net/en_US/sdk.js';
  //       if (fjs && fjs.parentNode) {
  //         fjs.parentNode.insertBefore(js, fjs);
  //       }
  //     })(document, 'script', 'facebook-jssdk');
  //   }
  //   return () => {
  //     delete window.fbAsyncInit;
  //   };
  // }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
