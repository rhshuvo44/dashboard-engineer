import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackendApiUrl from "../../api/BackendApiUrl";
import SectionTitle from "../../component/SectionTitle";
import Loading from "../../layout/Loading";

const Projects = () => {
  const count = 50;
  const size = 10;
  const [page, setPage] = useState(0);
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => await BackendApiUrl.get("/users"),
  });
  if (isLoading) {
    return <Loading />;
  }

  const pages = Math.ceil(count / size);
  return (
    <div className="pt-5">
      <SectionTitle>All Projects</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <Link
                    to={`/projectDetails/${user.id}`}
                    className="hover:text-primary"
                  >
                    {user.name}
                  </Link>
                </td>
                <td>{user.phone}</td>
                <td>Pending</td>
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

export default Projects;
