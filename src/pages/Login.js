import React from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../component/Input";
import auth from "../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../layout/Loading";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let loginError;
  if (error || gerror) {
    return (loginError = <p className="text-red-500"> {error?.message}</p>);
  }
  if (loading || gloading) {
    return <Loading />;
  }
  if (user || guser) {
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
          {loginError}
          <button class="google-btn" onClick={() => signInWithGoogle()}>
            <div class="google-icon-wrapper">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google-icon"
              />
            </div>
            <p class="btn-text">
              <b>Sign in with google</b>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
