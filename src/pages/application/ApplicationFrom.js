import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import BackendApiUrl from "../../api/BackendApiUrl";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";
import auth from "../../firebase.init";
const ApplicationFrom = () => {
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //  =========== backend api===========================
    const applicationFrom = {
      email: user.email,
      subject: data.subject,
      desciption: data.desciption,
    };
    BackendApiUrl.post("/application", applicationFrom).then((data) => {
      if (data) {
        toast.success("Add Your application");
        reset();
      } else {
        toast.error("Faild to add Your application");
      }
    });
  };
  return (
    <div className="card shadow-xl mt-10">
      <div className="card-body">
        <SectionTitle> Application From</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Subject"
            required
            className="input input-bordered w-full bg-transparent my-2"
            {...register("subject")}
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

export default ApplicationFrom;
