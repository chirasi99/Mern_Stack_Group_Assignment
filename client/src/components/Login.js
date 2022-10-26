import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [isTeacher, setIsTeacher] = useState(true);

  return (
    <div className="mt-100 d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
      <div className="w-50">
        <h1>School Management System</h1>
        <h3>Login As</h3>
        <button
          className="btn btn-secondary mr-4"
          id="btn-teacher"
          onClick={() => setIsTeacher(true)}
        >
          Teacher
        </button>
        <button
          className="btn btn-secondary"
          id="btn-nonAcademicStaff"
          onClick={() => setIsTeacher(false)}
        >
          Non Academic Staff
        </button>

        <form className="mt-4">
          <h5>Login To {isTeacher ? "Teacher" : "Non Academic Staff"}</h5>
          <div className="mb-3">
            <input
              type="email"
              className="form-control input-data"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control input-data"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Remember me
            </label>
            <a href="#" class="forgot-password">
              Forgot password?
            </a>
          </div>
          <Link
            to={isTeacher ? "/teacher" : "/nonacademic"}
            className="btn btn-primary"
            id="btn-login"
          >
            Login
          </Link>
        </form>
        <div>
          Don't have an account?
          <a href="">Register</a>
        </div>
      </div>
    </div>
  );
}
