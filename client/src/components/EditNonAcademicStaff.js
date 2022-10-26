import axios from "axios";
import NavBar from "./NavBar";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditNonAcademicStaff() {
  const { id } = useParams();

  const [nonAcademicStaff, setNonAcademicStaff] = useState({
    Full_Name: "",
    Position: "",
    Email: "",
  });

  useEffect(() => {
    axios.get(`/nonAcademicStaff/${id}`).then((res) => {
      if (res.data.success) {
        setNonAcademicStaff(res.data.nonAcademicStaff);
        console.log(res.data.nonAcademicStaff);
      }
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNonAcademicStaff({
      ...nonAcademicStaff,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { Full_Name, Position, Email } = nonAcademicStaff;

    const data = {
      Full_Name,
      Position,
      Email,
    };

    console.log(data);

    axios.put(`/nonAcademicStaff/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Non Academic Staff Updated Successfully");
        setNonAcademicStaff({
          Full_Name: "",
          Position: "",
          Email: "",
        });
      }
    });
  };

  return (
    <>
    <NavBar title="NON ACADEMIC STAFF" link="/nonacademic"/>
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Non Academic Staff</h1>
      <form className="needs-validation" onSubmit={handleSubmit} noValidate>
        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Full_Name</label>
          <input
            type="text"
            className="form-control"
            name="Full_Name"
            placeholder="Enter Full Name"
            value={nonAcademicStaff.Full_Name}
            onChange={handleInputChange}
          ></input>
        </div>

        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Position</label>
          <input
            type="text"
            className="form-control"
            name="Position"
            placeholder="Enter Position"
            value={nonAcademicStaff.Position}
            onChange={handleInputChange}
          ></input>
        </div>

        <div classname="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Email</label>
          <input
            type="text"
            className="form-control"
            name="Email"
            placeholder="Email"
            value={nonAcademicStaff.Email}
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
    </>
  );
}

export default EditNonAcademicStaff;
