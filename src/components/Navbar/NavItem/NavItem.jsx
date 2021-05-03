import React from "react";
import "./styles.css";

function NavItem({ children, name, route, history, onClick }) {
  return (
    <div className={"nav-item"} onClick={onClick}>
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
