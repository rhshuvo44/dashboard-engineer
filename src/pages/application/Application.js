import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendApiUrl from "../../api/BackendApiUrl";
import Button from "../../component/Button";
import SectionTitle from "../../component/SectionTitle";
import Loading from "../../layout/Loading";

const Application = () => {
  const count = 30;
  const size = 10;
  const [page, setPage] = useState(0);
  const { data: applications, isLoading } = useQuery({
    queryKey: ["application"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }

  const pages = Math.ceil(count / size);
  return (
    <div className="pt-5">
      <div className="flex justify-between mb-2">
        <SectionTitle>All Applications</SectionTitle>
        <Button path={"/applicationFrom"}>Application From</Button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.data.map((application) => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>
                  <Link
                    className="hover:text-primary"
                    to={`/applicationDetails/${application.id}`}
                  >
                    {application.name}
                  </Link>
                </td>
                <td>Padding</td>
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

export default Application;
