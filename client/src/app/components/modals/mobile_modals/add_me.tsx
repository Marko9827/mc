"use client";

import useAdd_me_Modal from "@/src/app/components/hoooooks/useAdd_me_Modal";
import { useCallback, useRef , useState } from "react";
import { User } from "@prisma/client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import Button from "@/src/app/components/Butoon";
import Heading from "@/src/app/components/Heading"; //'../../Heading';
import { toast } from "react-hot-toast";
import Input from "@/src/app/components/input/input"; //'../input/input';
import Modal from "@/src/app/components/modals/modal";
import ReactDOM from "react-dom";
import {
  Table,
  useModal,
  Image,
  Card,
  Tooltip,
  Grid,
  Row,
  Dropdown,
  Text,
} from "@nextui-org/react";
interface UserAddProps {
  currentUser?: User | null;
}
const Add_me: React.FC<UserAddProps> = ({ currentUser }) => {
  const add_me_Modal = useAdd_me_Modal();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');

  const env = "http://localhost:3001/"; //process.env.API_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      os: "",
      ram: "",
      ssd: "",
      name:"",
      screen: "",
      networks: "",
      description: "",
      category: "",
      authorId: currentUser?.id,
      tsStandard: "",
      price: "",
      imagefile: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const var_data = new FormData();
    var_data.append("os", data.os);
    var_data.append("ram", data.ram);
    var_data.append("ssd", data.ssd);
    var_data.append("screen", data.screen);
    var_data.append("networks", data.networks);
    var_data.append("category", data.category);
    var_data.append("authorId", data.authorId);
    var_data.append("tsStandard", data.tsStandard);
    var_data.append("description", data.description);    
    var_data.append("name", data.name);
    var_data.append("price", data.price);
    var_data.append("imagefile", selectedFile);

    setIsLoading(true);
    const res = axios
      .post(env + "product_add", var_data)
      .then(() => {
        add_me_Modal.onClose();
      })
      .catch((error) => {
        toast.error("Error, fill all inputs or try again latter.");
      })
      .finally(() => {
        toast.success("Complete");
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-5 ">
      {currentUser?.admin == 1 ? (
        <>
          <Heading title="Mobi E-Katalog" subtitle="Chose your phone  " />
          <Input
            id="name"
            label="Name"
            placeholder="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="name"
            required
          />
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
          />
          <Input
            id="description"
            label="Description"
            placeholder="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="textarea"
            required
          />
          <Input
            id="tsStandard"
            label="Telecomunication standard"
            placeholder="Telecomunication standard"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="select"
            required
          />
          <Input
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
          />{" "}
          <Input
            id="networks"
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
          />
          <Input
            id="price"
            label="$ Price "
            placeholder="$ Price"
            disabled={isLoading}
            register={register}
            errors={errors}
            type="text"
            required
          />
          <input
            id="imagefile"
            placeholder="Image"
            disabled={isLoading}
            type="file"
            required
            onChange={(event) => {
              setSelectedFile(event.target.files[0]);
            }}
          />
        </>
      ) : (
        <></>
      )}
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
