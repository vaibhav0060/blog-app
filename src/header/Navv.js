import React from "react";
import { NavLink } from "react-router-dom";
export default function Navv() {
  return (
    <div>
      <nav className="navv">
        <p className="rotate">The </p> Siren
      </nav>
      <ul className="head">
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
      </ul>
    </div>
  );
}
