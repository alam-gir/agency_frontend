"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./back-button";
import Header from "./header";
import SocialLoginButton from "./social-login-button";

interface CardWrapperProps {
  children: React.ReactNode;
  bigHeaderLabel?: string
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper: React.FC<CardWrapperProps> = ({
  children,
  bigHeaderLabel,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) => {
  return (
    <Card className="w-[400px] shadow-md border">
      <CardHeader>
        <Header label={headerLabel} bigHeaderLabel = {bigHeaderLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <CardFooter>
        <SocialLoginButton />
      </CardFooter>}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
