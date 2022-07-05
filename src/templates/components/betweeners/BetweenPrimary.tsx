import React, {useEffect, useState} from 'react';
import '../../styles/betweeners.css'
import {IBetween} from "../../models/IBetween";
import SteeringAnime from "../img-effects/SteeringAnime";
import CorneredLinkButton from "../buttons/CorneredLinkButton";
import {useInView} from "react-intersection-observer";

const BetweenPrimary = (props: IBetween) => {
    const {
        title, label,
        buttonText,
        logoWidth, logoImgUrl
    } = props;

    const {ref: betweenRef, inView: betweenIsVisible} = useInView();
    const [seen, setSeen] = useState<boolean>(betweenIsVisible);

    useEffect(() => {
        if (betweenIsVisible) {
            setSeen(true)
        }
    }, [betweenIsVisible]);

    return (
        <div
            id="between-primary"
            className={(seen) ? 'on-sight' : ''}
        >
            <div
                id=""
                className="justify-content-center between-container-50"
            >
                <SteeringAnime
                    logoImgUrl={logoImgUrl}
                    logoSize={logoWidth}
                />
            </div>
            <div
                id="between-primary-right"
                className="between-container-50"
            >
                <div>
                    <h2
                        className={(seen) ? 'on-second-sight on-sight' : ''}
                    >{label?.toUpperCase()}</h2>
                    <h1
                        className={(seen) ? 'on-second-sight on-sight' : ''}
                    >{title}</h1>

                    <div ref={betweenRef}></div>
                    <div className={(seen) ? 'on-second-sight' : ''}>
                        <CorneredLinkButton
                            buttonText={'check out'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BetweenPrimary;
