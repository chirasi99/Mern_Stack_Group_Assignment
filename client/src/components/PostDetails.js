import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetails() {
  const [teacher, setTeacher] = useState({});

  const { id } = useParams();
  
  useEffect(() => {
    return () => {
      axios.get(`/post/${id}`).then((res) => {
        if (res.data.success) {
          setTeacher(res.data.post);
          
        }
      });
    };
  }, [id]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>{teacher.Full_Name}</h4>
      <hr></hr>
      <dl className="row">
        <dt className="col-sm-3">Subject</dt>
        <dd className="col-sm-9">{teacher.Subject}</dd>
        <dt className="col-sm-3">Address</dt>
        <dd className="col-sm-9">{teacher.Address}</dd>
      </dl>
    </div>
  );
}

export default PostDetails;
