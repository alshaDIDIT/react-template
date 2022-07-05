import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import LinksComp from "./LinksComp";

import '../../styles/corner-nav.css'

const CorneredNav = () => {
    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        (clicked) ? setClicked(false) : setClicked(true);
    }

    const HandleIcon = () => {
        return (!clicked) ?
            <FontAwesomeIcon icon={faBars} className="nav-icon" />
            :
            <FontAwesomeIcon icon={faX} className="nav-icon" />
    }

    const HandleNav = () => {
        return (!clicked) ?
            <></>
            :
            <LinksComp />
    }

    return (
        <nav>
            <div
                style={(clicked) ? {transform: 'translateX(2) translateY(2)', backgroundColor: 'white'} : {}}
                id="nav-content"
            >
                <div
                    id="icon-click"
                    style={(!clicked) ? {boxShadow: '0rem 0rem .25rem rgba(0,0,0,.5)'} : {}}
                    onClick={handleClick}
                >
                    <HandleIcon />
                </div>
                <div>
                    <HandleNav />
                </div>
            </div>
        </nav>
    );
};

export default CorneredNav;
