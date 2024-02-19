"use client";
import { FC } from "react";
import { NextUIProvider as Provider } from "@nextui-org/react";

interface NextUIProviderProps {
  children: React.ReactNode;
}

const NextUIProvider: FC<NextUIProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};

export default NextUIProvider;
