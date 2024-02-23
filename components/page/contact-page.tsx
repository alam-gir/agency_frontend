import { FC } from "react";
import ContactForm from "../global/contact-form";
import mailBox from "@/public/icons/Mail sent-pana.svg";
import Image from "next/image";
import Footer from "../footer";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = ({}) => {
  return (
    <div className="h-full w-full">
      <div className="h-full lg:h-screen max-w-xl md:max-w-3xl lg:max-w-7xl m-auto flex flex-col lg:flex-row w-sm px-4">
        <div className="bg-background lg:w-1/2 h-full min-h-[93vh] flex items-center">
          <ContactForm
            title="Get In Touch"
            description="we are here for you! how can help?"
          />
        </div>
        <div className=" h-full min-h-screen w-full lg:w-1/2 lg:pl-16 flex flex-col items-start justify-center">
          <Image src={mailBox} alt="mailbox" className="h-1/2 w-full" />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 text-primary/80 dark:text-primary/60 hover:text-primary">
              <Phone />
              <h3>
                <a href="tel:01632243382">01632243382</a>
              </h3>
            </div>
            <div className="flex gap-4 text-primary/80 dark:text-primary/60 hover:text-primary">
              <Mail />
              <h3>
                <a href="mailto:info@wafipix.com">info@wafipix.com</a>
              </h3>
            </div>
            <div className="flex gap-4 text-primary/80 dark:text-primary/60 hover:text-primary">
              <MapPin />
              <h3>Chattogram, Banladesh</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer isSubcriptionBox={false} />
    </div>
  );
};

export default ContactPage;
