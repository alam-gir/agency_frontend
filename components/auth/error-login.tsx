import { FC } from "react";
import { CardWrapper } from "./card-wrapper";

interface ErrorLoginProps {}

const ErrorLogin: FC<ErrorLoginProps> = ({}) => {
  return (
    <CardWrapper
      bigHeaderLabel="Login Failed!"
      headerLabel="error"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <h1 className="flex items-center justify-center text-muted-foreground">opps! something went wrong.</h1>
    </CardWrapper>
  );
};

export default ErrorLogin;
