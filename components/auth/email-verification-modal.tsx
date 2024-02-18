"use client";
import { FC, useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../modal";
import EmailVerificationForm from "./email-verification-form";

interface EmailVerificationModalProps {}

const EmailVerificationModal: FC<EmailVerificationModalProps> = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    router.push("?");
  };

  const openDialgCallback = useCallback(() => {
    if (searchParams.get("email-verification") === "true") {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [searchParams]);

  useEffect(() => {
    openDialgCallback();
  });
  return (
    <>
      <Modal title="Email verification" description="We sent you a OTP. check your inbox, enter OTP." isOverlayCloseable={false} isOpen={isOpen} onClose={() => router.push("?")}>
        <EmailVerificationForm />
      </Modal>
    </>
  );
};

export default EmailVerificationModal;
