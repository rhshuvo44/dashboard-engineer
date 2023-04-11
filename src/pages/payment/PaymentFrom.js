import React from "react";
import SectionTitle from "../../component/SectionTitle";
import Input from "../../component/Input";
import { toast } from "react-hot-toast";
import BackendApiUrl from "../../api/BackendApiUrl";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const PaymentFrom = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    //  =========== backend api===========================
    const paymentFrom = {
      email: user.email,
      name: user.displayName,
      projectName: data.projectName,
      amount: data.amount,
      desciption: data.desciption,
    };
    BackendApiUrl.post("/application", paymentFrom).then((data) => {
      if (data) {
        toast.success("Add Your application");
      } else {
        toast.error("Faild to add Your application");
      }
    });
  };
  return (
    <div className="card shadow-xl mt-10">
      <div className="card-body">
        <SectionTitle> Payment Request From</SectionTitle>
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
            defaultValue={user.displayName}
            disabled
            className="input input-bordered w-full bg-transparent my-2"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Amount"
            required
            className="input input-bordered w-full bg-transparent my-2"
            {...register("amount")}
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

export default PaymentFrom;
