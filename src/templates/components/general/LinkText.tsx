import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/general.css'

interface IProps {
    text?: string;
    textColor?: string;
    textSize?: string;
    linkTo?: string;
}

const LinkText = (props: IProps) => {
    return (
        <Link
            to={props.linkTo || '/'}
            id={'link-text'}
        >
            <p
                style={{
                    color: props.textColor,
                    fontSize: props.textSize
            }}
            >
                {props.text}
            </p>
        </Link>
    );
};

export default LinkText;
