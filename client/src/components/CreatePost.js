import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Full_Name: "",
      Subject: "",
      Address: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { Full_Name, Subject, Address } = this.state;
    const data = {
      Full_Name: Full_Name,
      Subject: Subject,
      Address: Address,
    };

    axios.post("/post/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          Full_Name: "",
          Subject: "",
          Address: "",
        });
      }
    });
  };

  render() {
    return (
      <>
      <NavBar title="TEACHER" link="/teacher"/>
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Teacher Role</h1>
        <form className="needs-validation" noValidate>
          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Full_Name</label>
            <input
              type="text"
              className="form-control"
              name="Full_Name"
              placeholder="Enter Full Name"
              value={this.state.Full_Name}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Subject</label>
            <input
              type="text"
              className="form-control"
              name="Subject"
              placeholder="Enter Subject"
              value={this.state.Subject}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Address</label>
            <input
              type="text"
              className="form-control"
              name="Address"
              placeholder="Enter Address"
              value={this.state.Address}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <button
            className="btn btn-success"
            type="submit"
            style={{ marginTop: "15px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Save
          </button>
        </form>
      </div>
      </>
    );
  }
}
