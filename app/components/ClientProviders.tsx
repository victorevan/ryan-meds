"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "store";

type Props = {
  children: React.ReactNode;
};

const ClientProviders: React.FunctionComponent<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProviders;
