import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import auth from "../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../layout/Loading";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return navigate(from, { replace: true });
  }
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              className="input input-bordered w-full my-2 bg-transparent"
              {...register("email")}
            />

            <input
              type="password"
              placeholder="Enter Your Password"
              required
              className="input input-bordered w-full my-2 bg-transparent"
              {...register("password")}
            />

            <Input type="submit" className="btn btn-primary" value="Login" />
          </form>
          {error && <p className="text-red-500"> {error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
