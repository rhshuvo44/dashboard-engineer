import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import BackendApiUrl from "../../api/BackendApiUrl";
import SectionTitle from "../../component/SectionTitle";
import auth from "../../firebase.init";
import Loading from "../../layout/Loading";
import Button from "../../component/Button";

const Payment = () => {
  const count = 50;
  const [user] = useAuthState(auth);
  const [page, setPage] = useState(0);
  const size = 10;
  const pages = Math.ceil(count / size);
  const { data: payments, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: async () =>
      await BackendApiUrl.get(`/users/?email=${user?.email}`),
  });
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-5">
      <div className="flex justify-between mb-2">
        <SectionTitle>My Payments Request</SectionTitle>
        <Button path={"/paymentFrom"}>Payment From</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Project Name</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.data.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.name}</td>
                <td>{payment.username}</td>
                <td>500</td>
                <td>compleate</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-5">
        <div className="btn-group ">
          {[...Array(pages).keys()].map((number) => (
            <button
              onClick={() => setPage(number)}
              className={`btn btn-xs ${page === number && "btn-active"}`}
            >
              {number + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
