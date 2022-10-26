import React, { Component } from "react";
import CreatePost from "./components/CreatePost";
import CreateNonAcademicStaff from "./components/CreateNonAcademicStaff";
import EditPost from "./components/EditPost";
import EditNonAcademicStaff from "./components/EditNonAcademicStaff";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";
import NonAcademicStaffDetails from "./components/NonAcademicStaffDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar />
          {/* <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/add" element={<CreatePost />}></Route>
            <Route path="/edit/:id" element={<EditPost/>}></Route>
            <Route path="/post/:id" element={<PostDetails/>}></Route>
          </Routes> */}

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/nonAcademicStaff/add" element={<CreateNonAcademicStaff />}></Route>
            <Route path="/nonAcademicStaff/edit/:id" element={<EditNonAcademicStaff/>}></Route>
            <Route path="/nonAcademicStaff/details/:id" element={<NonAcademicStaffDetails/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
