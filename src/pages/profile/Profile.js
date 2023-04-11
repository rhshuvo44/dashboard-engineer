import React from "react";
import Button from "../../component/Button";
import userImg from "../../img/user/ripon.jpg";
import { useQuery } from "@tanstack/react-query";
import BackendApiUrl from "../../api/BackendApiUrl";
import Loading from "../../layout/Loading";

const Profile = () => {
  const email = "Sincere@april.biz";
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await BackendApiUrl.get(`/users?email=${email}`),
  });
  if (isLoading) {
    return <Loading />;
  }
  const { name, username, phone } = user.data[0];
  return (
    <div className="flex justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img
                src={userImg}
                alt="user"
                title="user"
                className="rounded-xl"
              />
            </div>
          </div>
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">{name}</h2>
          <h6>Enginner</h6>
          <p>{username}</p>
          <p>{phone}</p>
          <div className="card-actions">
            <Button path="/updateProfile">Update Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
