import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

interface ContactUsButtonProps {
  varient?: "faded" | "flat" | "ghost" | "light" | "shadow" | "solid" | "bordered" | undefined;
}

const ContactUsButton: FC<ContactUsButtonProps> = ({varient}) => {
  return (
    <Link href={"/contact"} className="w-full">
      <Button className="w-full" color="secondary" variant={varient}>
        Contact Us
      </Button>
    </Link>
  );
};

export default ContactUsButton;
