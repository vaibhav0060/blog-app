import React from "react";
import "./HeadFullBlog.css";
import { Link } from "react-router-dom";
export default function HeadFullBlog() {
  return (
    <div>
      <div className="navbarFullBlog">
        <div className="leftnav">
          <Link to="">
            <nav className="navUpdate">
              <p className="rotate">The </p> Siren{" "}
            </nav>
          </Link>
        </div>
        <div className="rightnav"></div>
      </div>
    </div>
  );
}
