/* eslint-disable @next/next/no-page-custom-font */
import "focus-visible";
import "./styles/tailwind.css";

import "./output.css";
import React from "react";
import ClientProviders from "./components/ClientProviders";

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <html
      className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      lang="en"
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lexend:wght@400;500&display=swap"
        />
      </head>
      <body className="flex h-full flex-col">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
};

export default RootLayout;
