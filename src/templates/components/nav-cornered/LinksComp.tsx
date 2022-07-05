import React from 'react';
import {faHome, faUser, faSuitcase, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

import '../../styles/corner-nav.css'

const LinksComp = () => {
    return (
        <div id="nav-links">
            <Link to="/">
                <h2 className="nav-link">
                    <FontAwesomeIcon className="link-icon" icon={faHome}/>
                    <span className="op9">HOME</span>
                </h2>
            </Link>
            <Link to="/about/">
                <h2 className="nav-link">
                    <FontAwesomeIcon className="link-icon" icon={faUser}/>
                    <span className="op9">ABOUT</span>
                </h2>
            </Link>
            <Link to="/contact/">
                <h2 className="nav-link">
                    <FontAwesomeIcon className="link-icon" icon={faAddressBook}/>
                    <span className="op9">CONTACT</span>
                </h2>
            </Link>
            <a href="#"><h2 className="nav-link">
                <FontAwesomeIcon className="link-icon" icon={faSuitcase}/>
                <span className="op9">PORTFOLIO</span>
            </h2>
            </a>
        </div>
    );
};

export default LinksComp;
