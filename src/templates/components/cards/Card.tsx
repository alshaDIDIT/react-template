import React, {useEffect, useState} from 'react';
import '../../styles/cards.css'
import {Link} from "react-router-dom";
import {ICard} from "../../models/ICard";
import {useInView} from "react-intersection-observer";

const Card = (props: ICard) => {
    const {
        title, titleColor,
        label, labelColor,
        backColor, backImg, backVideo,
        linkTo, cardWidth
    } = props;

    const {ref: cardRef, inView: cardIsVisible} = useInView();
    const [seen, setSeen] = useState<boolean>(cardIsVisible);

    useEffect(() => {
        if (cardIsVisible) {
            setSeen(true)
        }
    }, [cardIsVisible]);

    return (

        <div
            id="card"
        >
            <Link
                to={linkTo || '/'}
                style={{
                    backgroundColor: backColor,
                    width: cardWidth
                }}
            >
                <div
                    id='card-img-bg'
                    style={{
                        backgroundImage: 'url(' + backImg + ')',
                    }}
                    className={(seen) ? 'on-sight' : ''}
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
                    <div className="
                        card-transparency
                    ">
                        {/* REF HOLDER */}
                        <div
                            className="position-absolute"
                            style={{bottom: '0'}}
                            ref={cardRef}
                        ></div>
                    </div>

                    <div
                        className={`${(seen) ? 'on-second-sight' : ''} + ' card-text`}
                    >
                        <h3 style={{color: labelColor}}>
                            {label?.toUpperCase()}
                        </h3>
                        <h1
                            style={{color: titleColor}}
                        >
                            {title}
                        </h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
