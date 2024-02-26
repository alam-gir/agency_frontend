import { FC } from "react";
import PageBanner from "../global/page-banner";
import { Bolt, Code, RedoDot } from "lucide-react";
import logoLight from "@/public/light logo.png";
import logoDark from "@/public/dark logo.png";
import Image from "next/image";
import Footer from "../footer";
import ContactForm from "../global/contact-form";

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <div className=" h-full w-full">
      <PageBanner
        title="About wafipix"
        description="We help you to spread your business across the world"
      />
      <div className="h-full w-full max-w-2xl md:max-w-3xl lg:max-w-5xl m-auto p-4 px-16 mt-20 flex flex-col gap-20">
        <div className="w-full flex flex-col gap-2 items-center lg:items-start justify-center">
          <h1 className="text-xl text-primary/80 font-medium">why wafipix?</h1>
          <p className="text-[1rem] leading-6 text-primary/80 tracking-wide text-center md:text-justify">
            We work with leading businesses to address critical marketing,
            technology, and business objectives. We are experts in marketing
            automation, web & app development, and delivering advanced
            solutions. We serve our clients in adopting modern cloud business
            systems to achieve greater insights into their business data in
            real-time, for informed decisions.
          </p>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row">
          <div className="w-full lg:h-72 flex flex-col gap-2 items-center lg:justify-start justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-primary-foreground dark:bg-secondary-foreground/10">
              <Image
                src={logoLight}
                height={60}
                width={60}
                alt="wafipix logo"
                className="dark:hidden"
              />
              <Image
                src={logoDark}
                height={60}
                width={60}
                alt="wafipix logo"
                className="hidden dark:block"
              />
            </div>
            <h1 className="text-xl text-primary/80 font-medium">Who we are?</h1>
            <p className=" text-[1rem] leading-6 text-primary/80 tracking-wide text-center">{`Wafipix is more than just a agency; we're your technology partner.`}</p>
          </div>
          <div className="w-full lg:h-72 flex flex-col gap-2 items-center lg:justify-start justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-primary-foreground dark:bg-secondary-foreground/10">
              <Code className="h-6 w-6 text-primary/80" />
            </div>

            <h1 className="text-xl text-primary/80 font-medium">
              What do we do?
            </h1>
            <p className=" text-[1rem] leading-6 text-primary/80 tracking-wide text-center">
              We do graphics desinign for you company needed. Custom software
              design for you company management or your portfolio.
            </p>
          </div>
          <div className="w-full lg:h-72 flex flex-col gap-2 items-center lg:justify-start justify-center">
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-primary-foreground dark:bg-secondary-foreground/10">
              <Bolt className="h-6 w-6 text-primary/80" />
            </div>
            <h1 className="text-xl text-primary/80 font-medium">
              Our approach
            </h1>
            <p className=" text-[1rem] leading-6 text-primary/80 tracking-wide text-center">
              Our approach is built on the principles of collaboration, quality,
              and transparency.
            </p>
          </div>
        </div>
        <div className="h-screen w-full flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
      <Footer isSubcriptionBox={false}/>
    </div>
  );
};

export default AboutPage;
