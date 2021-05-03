import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useState} from "react";
import NavItem from "./NavItem/NavItem";
import "./styles.css";
import {
    faAddressBook,
    faAngleDoubleRight,
    faArchive,
    faArchway, faCertificate, faEnvelopeSquare, faGreaterThanEqual,
    faHelicopter,
    faWrench
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [active, setActive] = useState(false)

    const navItems = [
        {route: "", name: "Home", icon: faAngleDoubleRight},
        {route: "", name: "Why choose us?", icon: faGreaterThanEqual},
        {route: "", name: "Contact", icon: faAddressBook},
        {route: "", name: "Availability", icon: faHelicopter},
        {route: "", name: "Carreer", icon: faArchway},
        {route: "", name: "Achievments", icon: faCertificate},
        {route: "", name: "Under Construction", icon: faWrench},

    ];

    return (
        <nav className={"navbar"}
             onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}
        >
            <div className={"nav-content"}>
            {navItems.map((item) => {
                return (
                    <NavItem route={item.route} name={item.name} >
                        <FontAwesomeIcon icon={item.icon} color={"yellow"}/>{" "}
                    </NavItem>
                );
            })}
            </div>
        </nav>
    );
}

export default Navbar;
