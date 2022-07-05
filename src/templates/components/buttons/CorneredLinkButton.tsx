import React from 'react';
import '../../styles/buttons.css'
import '../../styles/anime.css'
import {Link} from "react-router-dom";

interface IProps {
    buttonText?: string;
}

const CorneredLinkButton = (props: IProps) => {
    return (

        <div
            id="cornered-btn"
        >
            <Link
                to={'/'}
                className="cornered-btn"
            >
                <div className="button-hov"></div>
                <h4
                    className='button-text'
                >{props.buttonText?.toUpperCase()}</h4>
            </Link>
        </div>
    );
};

export default CorneredLinkButton;
