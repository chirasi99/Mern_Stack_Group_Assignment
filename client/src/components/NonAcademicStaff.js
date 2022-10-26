import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default class NonAcademicStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nonAcademicStaff: [],
    };
  }

  componentDidMount() {
    this.retrieveNonAcademicStaff();
  }

  retrieveNonAcademicStaff() {
    axios.get("/nonAcademicStaff").then((res) => {
      if (res.data.success) {
        this.setState({
          nonAcademicStaff: res.data.existingNonAcademicStaff,
        });
        console.log(this.state.nonAcademicStaff);
      }
    });
  }

  onDeleteNonAcademicStaff = (id) => {
    axios.delete(`/nonAcademicStaff/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveNonAcademicStaff();
    });
  };

  render() {
    return (
        <>
        <NavBar title="NON ACADEMIC STAFF" link="/nonacademic"/>
      <div className="container">
        <p>All Non Academic Staff</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full_Name</th>
              <th scope="col">Position</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.nonAcademicStaff.map((nonAcademicStaff, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/nonacademic/details/${nonAcademicStaff._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {nonAcademicStaff.Full_Name}
                  </a>
                </td>
                <td scope>{nonAcademicStaff.Position}</td>
                <td scope>{nonAcademicStaff.Email}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/nonacademic/edit/${nonAcademicStaff._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() =>
                      this.onDeleteNonAcademicStaff(nonAcademicStaff._id)
                    }
                  >
                    <i className="fas fa-trash-alt"></i>&nbsp; Remove
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success">
          <a href="/add" style={{ textDecoration: "none", color: "white" }}>
            Add New Non Academic Staff
          </a>
        </button>
      </div>
      </>
    );
  }
}
