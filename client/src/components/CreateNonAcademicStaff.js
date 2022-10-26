import React, { Component } from "react";
import axios from "axios";

export default class CreateNonAcademicStaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Full_Name: "",
      Position: "",
      Email: "",
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
    const { Full_Name, Position, Email } = this.state;
    const data = {
      Full_Name: Full_Name,
      Position: Position,
      Email: Email,
    };

    axios.post("/nonAcademicStaff/save", data).then((res) => {
      if (res.data.success) {
        this.setState({
          Full_Name: "",
          Position: "",
          Email: "",
        });
      }
    });
  };

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Add New Non Academic Staff Role</h1>
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
            <label style={{ marginBottom: "5px" }}>Position</label>
            <input
              type="text"
              className="form-control"
              name="Position"
              placeholder="Enter Postion"
              value={this.state.Position}
              onChange={this.handleInputChange}
            ></input>
          </div>

          <div classname="form-group" style={{ marginBottom: "15px" }}>
            <label style={{ marginBottom: "5px" }}>Email</label>
            <input
              type="text"
              className="form-control"
              name="Email"
              placeholder="Enter Email"
              value={this.state.Email}
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
    );
  }
}
