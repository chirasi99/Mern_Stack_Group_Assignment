import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";

export default class Teacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
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

  onDelete = (id) => {
    axios.delete(`/post/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
    });
  };

  render() {
    return (
        <>
        <NavBar title="TEACHER" link="/teacher"/>
      <div className="container">
        <p>All Teachers</p>
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
                    href={`/teacher/post/${posts._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {posts.Full_Name}
                  </a>
                </td>
                <td scope>{posts.Subject}</td>
                <td scope>{posts.Address}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/teacher/edit/${posts._id}`}
                  >
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
          <a href="/teacher/add" style={{ textDecoration: "none", color: "white" }}>
            Add New Teacher Record
          </a>
        </button>
      </div>
      </>
    );
  }
}
