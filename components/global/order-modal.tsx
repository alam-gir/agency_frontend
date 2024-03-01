"use client";
import { FC, useCallback, useEffect, useState } from "react";
import Modal from "../modal";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { updateQuerySearch } from "@/lib/update-query-search";
import OrderForm from "./order-form";
import { usePlaceOrderMutation } from "@/redux/features/order/orderSlice";
import { useToast } from "../ui/use-toast";

interface OrderModalProps {}

const OrderModal: FC<OrderModalProps> = ({}) => {
  //--------------------------------shadcn hook--------------------------------
  const { toast } = useToast();
  //--------------------------------React hooks--------------------------------
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isOrderLoading, setOrderLoading] = useState<boolean>(true);
  const [isOrderError, setOrderError] = useState<boolean>(true);

  //--------------------------------Redux hooks--------------------------------
  const [
    placeOrder,
    { isLoading, isError, error, data },
  ] = usePlaceOrderMutation({});

  const closeHandle = () => {
    router.push(
      `?${updateQuerySearch({ order_dialogue: "", package_option_id: "" })}`
    );
    setIsOpen(false);
  };

  const openCallback = useCallback(() => {
    const orderDialogue = searchParams.get("order_dialogue");
    if (orderDialogue === "true") {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);

  const orderStateCallback = useCallback(() => {
    if (isLoading) setOrderLoading(true);
    else setOrderLoading(false);

    if (isError) setOrderError(true);
    else setOrderError(false);
  }, [isLoading, isError]);

  useEffect(() => {
    openCallback();
    orderStateCallback();
  });

  const orderSubmit = async (data: any) => {
    const service_id = params.id;
    const package_option_id = searchParams.get("package_option_id");
    try {
      const res = await placeOrder({
        buyer: data,
        service_id: service_id as string,
        package_option_id: package_option_id as string,
      });
      console.log("order submit response", { res });

      if ((res as any)?.error) {
        const errorMessage = (res as any)?.data.error.message;
        toast({
          title: "Order failed",
          description: errorMessage,
        });
      } else {
        toast({
          title: "Order placed",
          description: (res as any)?.data.message,
        });
        router.push(
          `?${updateQuerySearch({ order_dialogue: "", package_option_id: "" })}`
        );
      }
    } catch (error) {
      return {
        error: (error as any).message,
      };
    }
  };
  return (
    <Modal
      title="Order now"
      description="Order anything to get super service"
      isOverlayCloseable={false}
      isOpen={isOpen}
      onClose={closeHandle}
    >
      <OrderForm
        onSubmit={orderSubmit}
        isLoading={isOrderLoading}
        isError={isOrderError}
      />
    </Modal>
  );
};

export default OrderModal;
