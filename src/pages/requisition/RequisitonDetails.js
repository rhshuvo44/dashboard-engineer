import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionTitle from "../../component/SectionTitle";

const RequisitonDetails = () => {
  const { id } = useParams();
  const [requisition, setRequisition] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRequisition(data);
      });
  }, [id]);
  return (
    <div>
      <SectionTitle>Requisition Details</SectionTitle>
      <div className="card bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">{requisition.title}</h2>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
          <p>{requisition.body}</p>
        </div>
      </div>
    </div>
  );
};

export default RequisitonDetails;
