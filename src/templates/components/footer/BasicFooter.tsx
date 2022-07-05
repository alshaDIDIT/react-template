import React from 'react';
import '../../styles/footer.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {Link} from "react-router-dom";
import SocialTabs from "../general/SocialTabs";
import LinkHolder from "../betweeners/LinkHolder";


interface IProps {
    backColor?: string;
}

const BasicFooter = (props: IProps) => {



    return (
        <div
            id="basic-footer"
            style={{backgroundColor: props.backColor}}
        >
            <SocialTabs />
            <LinkHolder />
        </div>
    );
};

export default BasicFooter;
