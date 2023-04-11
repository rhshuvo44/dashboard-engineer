import React, { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
  const { id } = useParams();
  const [application, setApplication] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setApplication(data);
      });
  }, [id]);
  return (
    <div>
      <SectionTitle>Application Details</SectionTitle>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{application.title}</h2>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
          <p>{application.body}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetails;
