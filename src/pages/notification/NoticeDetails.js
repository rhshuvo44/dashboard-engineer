import React, { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { useParams } from "react-router-dom";

const NoticeDetails = () => {
  const [notice, setNotice] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNotice(data);
      });
  }, [id]);
  return (
    <div>
      <SectionTitle>Notification Details</SectionTitle>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{notice.title}</h2>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
          <p>{notice.body}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetails;
