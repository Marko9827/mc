"use client";

import useAdd_me_Modal from "@/src/app/components/hoooooks/useAdd_me_Modal";
import { useCallback, useState } from "react";
import { User } from "@prisma/client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Button from "@/src/app/components/Butoon";
import Heading from "@/src/app/components/Heading"; //'../../Heading';
import { toast } from "react-hot-toast";
import Input from "@/src/app/components/input/input"; //'../input/input';
import Modal from "@/src/app/components/modals/modal";
interface UserAddProps {
  currentUser?: User | null
}
const Add_me: React.FC<UserAddProps> = ({
  currentUser
}) => {
  const add_me_Modal = useAdd_me_Modal();
  const [isLoading, setIsLoading] = useState(false);
  const env = "http://localhost:3001/";//process.env.API_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      os: "",
      ram: "",
      ssd: "",
      screen: "",
      networks: "",
      category: "",
      authorId: currentUser?.id,
      price: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    
    
    setIsLoading(true);
    axios
      .post(env+"product_add", data)
      .then(() => {
        add_me_Modal.onClose();
      })
      .catch((error) => {
        toast.error("Error, fill all inputs or try again latter.");
      })
      .finally(() => {
        setIsLoading(false);
      });
   
  };

  const bodyContent = (
    <div className="flex flex-col gap-5">
      {currentUser?.admin == 1 ?  (<>
      <Heading title="Mobi E-Katalog" subtitle="Chose your phone  " />

      <Input
        id="os"
        label="Os"
        placeholder="Os"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="text"
        required
      />
      <Input
        id="ram"
        label="Ram"
        placeholder="Ram"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />  <Input
      id="ssd"
      label="Memory"
      placeholder="Memory"
      disabled={isLoading}
      register={register}
      errors={errors}
      type="number"
      required
    />
    <Input
      id="screen"
      label="Screen"
      placeholder="Screen"
      disabled={isLoading}
      register={register}
      errors={errors}
      type="text"
      required
    /> <Input
    id="network"
    label="Network"
    placeholder="Network"
    disabled={isLoading}
    register={register}
    errors={errors}
    type="text"
    required
  />
  <Input
    id="category"
    label="Category"
    placeholder="Category"
    disabled={isLoading}
    register={register}
    errors={errors}
    type="text"
    required
  /><Input
  id="price"
  label="$ Price "
  placeholder="$ Price"
  disabled={isLoading}
  register={register}
  errors={errors}
  type="text"
  required
/>

      </>): (<></>)}
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={add_me_Modal.isOpen}
      title="Add new phone"
      actionLabel="Add new phone"
      onClose={add_me_Modal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    ></Modal>
  );
};

export default Add_me;
