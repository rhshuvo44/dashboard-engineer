import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Input from "../../component/Input";
import SectionTitle from "../../component/SectionTitle";
import auth from "../../firebase.init";

const RequisitionFrom = () => {
  const [user] = useAuthState(auth);
  const [inputarr, setInputarr] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const project = "Abc Project";
  const date = new Date();
  const onSubmit = (data) => {
    setInputarr([...inputarr, data]);
    reset();
  };
  const requisitionFrom = {
    date,
    project,
    email: user.email,
    desciption: inputarr,
  };
  const requisitionSubmit = () => {
    //  =========== backend api===========================

    console.log(requisitionFrom);
    // BackendApiUrl.post("/requisition", requisitionFrom).then((data) => {
    //   if (data) {
    //     toast.success("Add Your requisition");
    //     setInputarr("");
    //   } else {
    //     toast.error("Faild to add Your requisition");
    //   }
    // });
  };
  return (
    <div className="card shadow-xl mt-10">
      <div className="card-body">
        <SectionTitle> Requisition From</SectionTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            value={project}
            disabled
            required
            className="input input-bordered w-full bg-transparent my-2"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <input
              type="text"
              placeholder="Description of Products"
              required
              className="input input-bordered w-full bg-transparent my-2"
              {...register("products")}
            />
            <input
              type="number"
              placeholder="Quentity"
              required
              className="input input-bordered w-full bg-transparent my-2"
              {...register("quentity")}
            />
            <input
              type="text"
              placeholder="Required For"
              required
              className="input input-bordered w-full bg-transparent my-2"
              {...register("required")}
            />
            <input
              type="text"
              placeholder="Remarks"
              required
              className="input input-bordered w-full bg-transparent my-2"
              {...register("remarks")}
            />
          </div>
          <Input
            type="submit"
            className="btn btn-primary capitalize"
            value="Item Add"
          />
        </form>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Description of Products</th>
                <th>Quentity</th>
                <th>Required For</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {inputarr?.map((info, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{info.products}</td>
                  <td>{info.quentity}</td>
                  <td>{info.required}</td>
                  <td>{info.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button
          className="btn btn-primary capitalize btn-sm w-28"
          onClick={requisitionSubmit}
        >
          Submit{" "}
        </button>
      </div>
    </div>
  );
};

export default RequisitionFrom;
