import React, { Component } from "react";
import CreatePost from "./components/CreatePost";
import CreateNonAcademicStaff from "./components/CreateNonAcademicStaff";
import EditPost from "./components/EditPost";
import EditNonAcademicStaff from "./components/EditNonAcademicStaff";
import PostDetails from "./components/PostDetails";
import NonAcademicStaffDetails from "./components/NonAcademicStaffDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Teacher from "./components/Teacher";
import NonAcademicStaff from "./components/NonAcademicStaff";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />}></Route>

            <Route path="/teacher" exact element={<Teacher />}></Route>
            <Route path="/teacher/add" element={<CreatePost />}></Route>
            <Route path="/teacher/edit/:id" element={<EditPost />}></Route>
            <Route path="/teacher/post/:id" element={<PostDetails />}></Route>

            <Route path="/nonacademic" exact element={<NonAcademicStaff />}></Route>
            <Route path="/nonacademic/add" element={<CreateNonAcademicStaff />}></Route>
            <Route path="/nonacademic/edit/:id" element={<EditNonAcademicStaff />}></Route>
            <Route path="/nonacademic/details/:id" element={<NonAcademicStaffDetails />}></Route>
            
            
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
