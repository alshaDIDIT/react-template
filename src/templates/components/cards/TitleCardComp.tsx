import React, {useEffect, useState} from 'react';
import {
    CardBackColor,
    CardContainer,
    CardTextContainer,
    TitleCardFrame,
    TranspantGradient
} from "../styled/containers/StyledCard";
import {Link} from "react-router-dom";
import {ICard} from "../../models/ICard";
import {useInView} from "react-intersection-observer";

const TitleCardComp = (props: ICard) => {
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
        <TitleCardFrame>
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
                        {(backVideo != undefined && backVideo?.length > 0) ?
                            <div id="video-bg">
                                <video autoPlay muted loop id="title-video">
                                    <source
                                        src={backVideo}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                            :
                            <></>
                        }
                        <TranspantGradient
                        >
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
        </TitleCardFrame>
    );
};

export default TitleCardComp;
