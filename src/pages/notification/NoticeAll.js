import React, { useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import BackendApiUrl from "../../api/BackendApiUrl";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Loading from "../../layout/Loading";

const NoticeAll = () => {
  const [page, setPage] = useState(0);
  const count = 50;
  const size = 10;
  const pages = Math.ceil(count / size);
  const { data: notifications, isLoading } = useQuery({
    queryKey: ["notification"],
    queryFn: async () => await BackendApiUrl.get(`/posts`),
  });
  if (isLoading) {
    return <Loading/>;
  }

  return (
    <div className="pt-5">
      <SectionTitle>Notification all</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {notifications.data.map((notice) => (
              <tr key={notice.id}>
                <td>{notice.id}</td>
                <td>
                  <Link
                    className="hover:text-primary"
                    to={`/noticeDetails/${notice.id}`}
                  >
                    {notice.title}
                  </Link>
                </td>
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

export default NoticeAll;
