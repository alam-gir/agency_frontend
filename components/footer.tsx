import { FC } from "react";
import SubscriptionEmailBox from "./subcription-email-box";
import FooterDetails from "./footer-details";

interface footerProps {
  isSubcriptionBox?: boolean;
}

const Footer: FC<footerProps> = ({isSubcriptionBox = true}) => {
  return (
    <div>
      {isSubcriptionBox ? <SubscriptionEmailBox /> : null}
      <FooterDetails />
    </div>
  );
};

export default Footer;
