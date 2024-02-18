"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useCallback, useEffect, useState } from "react";
import { useCreateCategoryMutation } from "@/redux/features/category/categorySlice";

import CategoryForm from "./category-form";
import Modal from "@/components/modal";

interface CreateCategoryProps {}

const CreateCategory: FC<CreateCategoryProps> = ({}) => {
  //<-----------React hooks-------------------->
  const router = useRouter();
  const searchparam = useSearchParams();
  const [isOpen, setOpen] = useState<boolean>(false);

  const [success, setSuccess] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  //<----------------Redux hooks-------------------->
  const [createCategory, { isSuccess, isError, data, error: createError, reset}] =
    useCreateCategoryMutation();

  //<----------------callback functions-------------------->
  const openHandler = useCallback(() => {
    const create = searchparam.get("create");
    if (create === "true") {
      setOpen(true);
    } else setOpen(false);
  }, [searchparam]);

  const creatingCallback = useCallback(() => {
    if (isSuccess) {
      setSuccess((data as any).message);
      reset();
      router.push("/dashboard/categories")
    }
    if (isError) {
      setError((createError as any).message);
    }
  }, [isSuccess, isError, data, createError, router,reset]);

  //<----------------useEffects-------------------->
  useEffect(() => {
    openHandler();
    creatingCallback();
  });

  // Functions

  // open
  const handleClose = () => {
    //<----------------clean succes and error-------------------->
    reset();
    setSuccess("");
    setError("");
    
    //<----------------close modal-------------------->
    router.push("/dashboard/categories");
  };

  //<----------------submit handler-------------------->
  const onSubmit = async (values: { title: string; icon?: File }) => {
    if (!values.title || !values.icon) {
      throw new Error("Title and icon is required!");
    }

    const data = new FormData();

    data.append("title", values.title);
    data.append("icon", values.icon);

    // create category

    try {
      await createCategory(data);

      // then upload icon
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Create category"
      description="Create a new category and click save before close!"
      isOverlayCloseable={false}
    >
      <div>
        {/* category create form */}
        <CategoryForm
          onSubmit={onSubmit}
          mode={"create"}
          success={success}
          error={error}
        />
      </div>
    </Modal>
  );
};

export default CreateCategory;
