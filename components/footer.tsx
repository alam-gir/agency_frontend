import { FC } from "react";
import SubscriptionEmailBox from "./subcription-email-box";
import FooterDetails from "./footer-details";

interface footerProps {}

const Footer: FC<footerProps> = ({}) => {
  return (
    <div>
      <SubscriptionEmailBox />
      <FooterDetails />
    </div>
  );
};

export default Footer;
