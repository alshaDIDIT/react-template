import React, {useEffect, useState} from 'react';
import {
    CardContainer,
    BasicCardFrame,
    CardTextContainer,
    CardBackColor,
    TranspantGradient
} from "../styled/containers/StyledCard";
import {ICard} from "../../models/ICard";
import {Link} from "react-router-dom";
import {useInView} from "react-intersection-observer";

const BasicCard = (props: ICard) => {
    const {
        title, titleColor,
        label, labelColor,
        backColor, backImg,
        backVideo, linkTo
    } = props;

    const {ref: imgRef, inView: imgIsVisible} = useInView();

    const [imgSeen, setImgSeen] = useState<boolean>(imgIsVisible);

    useEffect(() => {
        if (imgIsVisible) {
            setImgSeen(true)
        }
    }, [imgIsVisible]);

    return (
        <BasicCardFrame>
            <Link to={linkTo || '/'}>
                <CardBackColor
                    style={{
                        backgroundColor: backColor
                    }}
                >
                    <CardContainer
                        style={{
                            backgroundImage: (imgSeen) ? 'url(' + backImg + ')' : '',
                            animation: (imgSeen) ? 'show ease-out .5s forwards' : ''
                        }}
                    >
                        <TranspantGradient>
                            {/* REF HOLDER */}
                            <div
                                className="position-absolute"
                                style={{bottom: '50%'}}
                                ref={imgRef}
                            ></div>
                        </TranspantGradient>

                        <CardTextContainer
                            style={{
                                animation: (imgSeen) ? 'show-text ease-out .5s forwards' : ''
                            }}
                        >
                            <h2 style={{color: labelColor}}>{label?.toUpperCase()}</h2>
                            <h1 style={{color: titleColor}}>{title}</h1>
                        </CardTextContainer>

                    </CardContainer>
                </CardBackColor>
            </Link>
        </BasicCardFrame>
    );
};

export default BasicCard;
