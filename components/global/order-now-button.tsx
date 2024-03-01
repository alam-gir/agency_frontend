"use client";

import { Button } from "@nextui-org/react";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface OrderNowButtonProps {
  package_option_id: string;
}

const OrderNowButton: FC<OrderNowButtonProps> = ({ package_option_id }) => {
  const router = useRouter();
  const handleOrderNow = () => {
    router.push(`?order_dialogue=true&package_option_id=${package_option_id}`);
  };
  return (
    <Button onClick={handleOrderNow} className="w-full" color="primary">
      Order Now
    </Button>
  );
};

export default OrderNowButton;
