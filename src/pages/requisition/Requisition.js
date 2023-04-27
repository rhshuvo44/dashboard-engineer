import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendApiUrl from "../../api/BackendApiUrl";
import Button from "../../component/Button";
import SectionTitle from "../../component/SectionTitle";
import Loading from "../../layout/Loading";

const Requisition = () => {
  const count = 50;
  const size = 10;
  const [page, setPage] = useState(0);
  const { data: requisitons, isLoading } = useQuery({
    queryKey: ["requisiton"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }

  const pages = Math.ceil(count / size);
  return (
    <div className="pt-5">
      <div className="flex justify-between mb-2">
        <SectionTitle>All Requsitions</SectionTitle>
        <Button path={"/requisitionFrom"}>Requisition From</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Prjoject Name</th>
              <th>Name</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {requisitons.data.map((requisiton) => (
              <tr key={requisiton.id}>
                <td>{requisiton.id}</td>
                <td>
                  <Link className="hover:text-primary" to={`/requisitonDetails/${requisiton.id}`}>
                    {requisiton.name}
                  </Link>
                </td>
                <td>{requisiton.username}</td>
                <td>Success</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-2">
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

export default Requisition;
