import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useState} from "react";
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

    useEffect(() => {
        console.log(active)
    }, [active])

    const navItems = [
        {route: "home", name: "Home", icon: faAngleDoubleRight},
        {route: "sla", name: "Why choose us?", icon: faGreaterThanEqual},
        {route: "contact", name: "Contact", icon: faAddressBook},
        {route: "availability", name: "Availability", icon: faHelicopter},
        {route: "carreer", name: "Carreer", icon: faArchway},
        {route: "achievements", name: "Achievements", icon: faCertificate},
    ];

    return (
        <nav className={"navbar"}
             onMouseEnter={() => setActive(true)}
             onMouseLeave={() => setActive(false)}
        >
            <div className={"nav-content"}>
            {navItems.map((item) => {
                return (
                    <NavItem route={item.route} name={item.name} onClick={(() => setActive(false))}>
                        <FontAwesomeIcon icon={item.icon} color={"white"}/>{" "}
                    </NavItem>
                );
            })}
            </div>
        </nav>
    );
}

export default Navbar;
