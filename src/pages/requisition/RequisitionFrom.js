import React from "react";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";
import BackendApiUrl from "../../api/BackendApiUrl";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const RequisitionFrom = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //  =========== backend api===========================
    const requisitionFrom = {
      email: user.email,
      projectName: data.projectName,
      title: data.title,
      desciption: data.desciption,
    };
    BackendApiUrl.post("/requisition", requisitionFrom).then((data) => {
      if (data) {
        toast.success("Add Your requisition");
      } else {
        toast.error("Faild to add Your requisition");
      }
    });
  };

  return (
    <div className="card shadow-xl mt-10">
      <div className="card-body">
        <SectionTitle> Requisition From</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Project Name"
            required
            className="input input-bordered w-full bg-transparent my-2"
            {...register("projectName")}
          />
          <input
            type="text"
            placeholder="Titile"
            required
            className="input input-bordered w-full bg-transparent my-2"
            {...register("title")}
          />
          <textarea
            className="textarea textarea-bordered h-52 w-full bg-transparent my-2"
            placeholder="Desciption"
            required
            {...register("desciption")}
          ></textarea>

          <Input
            type="submit"
            className="btn btn-primary capitalize"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default RequisitionFrom;
