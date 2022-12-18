"use client";
import React from "react";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import store from "store";

type Props = {
  children: React.ReactNode;
};

const ClientProviders: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <Analytics />
    </Provider>
  );
};

export default ClientProviders;
