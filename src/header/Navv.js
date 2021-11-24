import React from "react";
import { NavLink } from "react-router-dom";
import "./head.css";
import { useState } from "react";
import Login from "./login";

export default function Navv() {
  let [state, setstate] = useState(false);
  return (
    <div>
      <nav className="navv">
        <p className="rotate">The </p> Siren
      </nav>
      <ul className="head">
        <li className="non-visible">
          <NavLink exact to="/Home">
            Home
          </NavLink>
        </li>
        <li className="non-visible">
          <NavLink exact to="/Bollywood">
            Bollywood
          </NavLink>
        </li>
        <li className="non-visible">
          <NavLink exact to="/Technology">
            Technology
          </NavLink>
        </li>
        <li className="non-visible">
          <NavLink exact to="/Hollywood">
            Hollywood
          </NavLink>
        </li>
        <li className="non-visible">
          <NavLink exact to="/Fitness">
            Fitness
          </NavLink>
        </li>
        <li className="non-visible">
          <NavLink exact to="/Food">
            Food
          </NavLink>
        </li>
        {/* <li> */}
        <NavLink to="./LoginForm">
          <Login />
        </NavLink>
        {/* </li> */}
        <li>
          <li className="visible " onClick={() => setstate((state = !state))}>
            <i class="fa fa-bars" aria-hidden="true"></i>
          </li>
        </li>
      </ul>
      {state === true ? (
        <div className="li-visible">
          <li>
            <NavLink exact to="/Home">
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Bollywood">
              Bollywood
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Technology">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Hollywood">
              Hollywood
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Fitness">
              Fitness
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/Food">
              Food
            </NavLink>
          </li>
        </div>
      ) : null}
    </div>
  );
}
