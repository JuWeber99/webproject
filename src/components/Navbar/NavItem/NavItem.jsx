import React from "react";
import "./styles.css";

function NavItem({ children, name, route, history }) {
  return (
    <div className={"nav-item"}>
        <p className={"link-text"}>{name}</p>
      <li
        className={"nav-link"}
        href={route}
      >
        {children}
      </li>
    </div>
  );
}

export default NavItem;
