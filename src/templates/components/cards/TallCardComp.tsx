import React, {useEffect, useState} from 'react';
import {
    CardBackColor,
    CardContainer,
    CardTextContainer,
    TallCardFrame,
    TranspantGradient
} from "../styled/containers/StyledCard";
import {Link} from "react-router-dom";
import {ICard} from "../../models/ICard";
import {useInView} from "react-intersection-observer";

const TallCardComp = (props: ICard) => {
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
        <TallCardFrame>
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
        </TallCardFrame>
    );
};

export default TallCardComp;
