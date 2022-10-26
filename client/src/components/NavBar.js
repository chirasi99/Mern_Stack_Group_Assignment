import React from "react";

export default function NavBar({ title, link}) {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-dark mb-4">
        <a className="navbar-brand" href={link}>
          {title}
        </a>
      </nav>
    </div>
  );
}
