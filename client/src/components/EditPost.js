import axios from "axios";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();

  const [teacher, setTeacher] = useState({
    Full_Name: "",
    Subject: "",
    Address: "",
  });

  useEffect(() => {
    axios.get(`/post/${id}`).then((res) => {
      if (res.data.success) {
        setTeacher(res.data.post);
        console.log(res.data.post);
      }
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTeacher({
      ...teacher,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { Full_Name, Subject, Address } = teacher;

    const data = {
      Full_Name,
      Subject,
      Address,
    };

    console.log(data);

    axios.put(`/post/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Post Updated Successfully");
        setTeacher({
          Full_Name: "",
          Subject: "",
          Address: "",
        });
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Post</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Full_Name</label>
          <input
            type="text"
            className="form-control"
            name="Full_Name"
            placeholder="Enter Full Name"
            value={teacher.Full_Name}
            onChange={handleInputChange}
          ></input>
        </div>

        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Subject</label>
          <input
            type="text"
            className="form-control"
            name="Subject"
            placeholder="Enter Subject"
            value={teacher.Subject}
            onChange={handleInputChange}
          ></input>
        </div>

        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Address</label>
          <input
            type="text"
            className="form-control"
            name="Address"
            placeholder="Enter Address"
            value={teacher.Address}
            onChange={handleInputChange}
          ></input>
        </div>

        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px" }}
        >
          <i className="far fa-check-square"></i>
          &nbsp; Update
        </button>
      </form>
    </div>
  );
}

export default EditPost;
