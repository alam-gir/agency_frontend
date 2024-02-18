"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import {
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/features/category/categorySlice";

import categorySlice from '@/redux/features/category/categorySlice'
import { apiSlice } from "@/redux/apiSlice";

import CategoryForm from "./category-form";
import Modal from "@/components/modal";

interface EditCategoryProps {}

const EditCategory: FC<EditCategoryProps> = ({}) => {
  //<-----------React hooks-------------------->
  const router = useRouter();
  const searchparam = useSearchParams();
  const categroy_id = searchparam.get("category_id");

  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isStartFetching, setFetching] = useState<boolean>(true);
  const [isUpdating, setUpdating] = useState<boolean>(false);

  //<----------------Redux hooks-------------------->
  const [
    update,
    { isLoading, isSuccess, isError, error: updateError, data: updateResponse, reset  },
  ] = useUpdateCategoryMutation({});

  const { data, isFetching } = useGetCategoryQuery(categroy_id!, {
    skip: !categroy_id,
  });

  //<----------------callback functions-------------------->
  const openHandler = useCallback(() => {
    if (categroy_id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [categroy_id]);

  const fetching = useCallback(() => {
    if (isFetching) {
      setFetching(true);
    } else {
      setFetching(false);
    }
  }, [isFetching]);

  const updatingCallback = useCallback(() => {
    if (isLoading) {
      setUpdating(true);
    } else {
      setUpdating(false);
    }
  }, [isLoading]);

  const setResponse = useCallback(() => {
    if (isSuccess) {
      setSuccess((updateResponse as any).message);
      reset();
      router.push("/dashboard/categories");
    }
    if (isError) {
      setError((updateError as any).message);
    }
  }, [isError, isSuccess, updateError, updateResponse, router,reset]);

  //<----------------useEffects-------------------->
  useEffect(() => {
    openHandler();
    fetching();
    updatingCallback();
    setResponse();
  });

  //open
  const handleClose = () => {
    //<----------------clean succes and error-------------------->
    reset();
    setSuccess("");
    setError("");
    
    //<----------------close modal-------------------->
    router.push("/dashboard/categories");
  };

  //<----------------Submit handler-------------------->
  const onSubmit = async (values: { title: string; icon?: File }) => {
    const { title, icon } = values;
    try {
      //<----------------format data-------------------->
      const data = new FormData();

      //<----------------Append conditionally-------------------->
      if (title) data.append("title", title);
      if (icon) data.append("icon", icon);

      //<----------------call update hook-------------------->
      if (categroy_id) await update({ id: categroy_id, data: data });
    } catch (error: any) {
      setError(error.message);
    }

    // for auto close the dialog, redirect ot /dashboard/categories
  };


  return (
    <Modal
      isOverlayCloseable={false}
      isOpen={isOpen}
      onClose={handleClose}
      title="Edit category"
      description="Modify the category details click save before close!"
    >
      <div className="min-h-[30rem]">
        {/* category edit form */}
        {isStartFetching ? (
          <div className="h-full w-full flex items-center justify-center">
            <BeatLoader color="gray" />
          </div>
        ) : (
          <CategoryForm
            disabled={isUpdating}
            category={data?.data}
            onSubmit={onSubmit}
            mode="edit"
            error={error}
            success={success}
          />
        )}
      </div>
    </Modal>
  );
};

export default EditCategory;
