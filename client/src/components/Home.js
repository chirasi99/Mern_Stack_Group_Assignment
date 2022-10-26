import React, { Component } from "react";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      nonAcademicStaff: []
    };
  }

  componentDidMount() {
    this.retrievePosts();
    this.retrieveNonAcademicStaff();
  }

  retrievePosts() {
    axios.get("/posts").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
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

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };
  onDeleteNonAcademicStaff = (id) => {
    axios.delete(`/nonAcademicStaff/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrieveNonAcademicStaff();
    });
  };

  render() {
    return (
      <div className="container">
        {/* <p>All Teachers</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Full_Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/post/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.Full_Name}
                  </a>
                </td>
                <td scope>{posts.Subject}</td>
                <td scope>{posts.Address}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp; Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.onDelete(posts._id)}
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
            Add New Teacher Record
          </a>
        </button> */}

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
                  href={`/nonAcademicStaff/details/${nonAcademicStaff._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {nonAcademicStaff.Full_Name}
                </a>
              </td>
              <td scope>{nonAcademicStaff.Position}</td>
              <td scope>{nonAcademicStaff.Email}</td>
              <td>
                <a className="btn btn-warning" href={`/nonAcademicStaff/edit/${nonAcademicStaff._id}`}>
                  <i className="fas fa-edit"></i>&nbsp; Edit
                </a>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  onClick={() => this.onDeleteNonAcademicStaff(nonAcademicStaff._id)}
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
    );
  }
}
