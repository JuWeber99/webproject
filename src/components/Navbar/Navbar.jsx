import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import NavItem from "./NavItem/NavItem";
import "./styles.css";
import {faAngleDoubleRight, faWrench} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [active, setActive] = useState(false)

    const navItems = [
        {route: "", name: "Home", icon: faAngleDoubleRight},
        {route: "", name: "Under Construction", icon: faWrench},
        {route: "", name: "Under Construction", icon: faWrench},
        {route: "", name: "Under Construction", icon: faWrench},
        {route: "", name: "Under Construction", icon: faWrench},
        {route: "", name: "Under Construction", icon: faWrench},
        {route: "", name: "Under Construction", icon: faWrench},

    ];

    return (
        <nav className={"navbar"}
             onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}
        >
            {navItems.map((item) => {
                return (
                    <NavItem route={item.route} name={item.name}>
                        <FontAwesomeIcon icon={item.icon}/>{" "}
                    </NavItem>
                );
            })}
        </nav>
    );
}

export default Navbar;
