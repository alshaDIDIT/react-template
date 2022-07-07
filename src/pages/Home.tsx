import React, {useEffect, useRef, useState} from 'react';
import VideoScreen from "../templates/components/screens/VideoScreen";

import '../templates/styles/base.css'
import {
    MaxWidthContainer,
    CenterContainer
} from "../templates/components/styled/containers/FlexedContainers";
import TitleCard from "../templates/components/cards/TitleCard";
import CardHolder from "../templates/components/holders/card-holders/CardHolder";
import {
    tempLabel,
    tempLeftImg,
    tempRightImg,
    tempTallImg,
    tempTitle,
    tempTitleVid,
    tempWideImg
} from "../config/TempConstants";


const Home = () => {

    return (
        <section>
            <VideoScreen
                logoText={'Lorem Ipsum'}
                title={'Hello World!'}
                label={'Lorem ipsum dolor sit amet, consectetur adipisicing elit architecto at deleniti varits doslando curry!'}
                videoUrl={'https://assets.mixkit.co/videos/preview/mixkit-woman-spins-a-small-world-globe-21319-large.mp4'}
                instruction={'scroll down'}
                logoImgUrl={'https://www.clipartmax.com/png/full/279-2798685_png-logo-maker-online-real-clipart-and-vector-graphics-camera-logo-design.png'}
                logoWidth={'5rem'}
            />

            <CenterContainer
                marginY={'3rem'}
            >
                <MaxWidthContainer>

                    <CardHolder
                        tallCardTitle={tempTitle}
                        tallCardLabel={tempLabel}
                        tallCardBackImg={tempTallImg}

                        wideCardTitle={tempTitle}
                        wideCardLabel={tempLabel}
                        wideCardBackImg={tempWideImg}

                        leftCardTitle={tempTitle}
                        leftCardLabel={tempLabel}
                        leftCardBackImg={tempLeftImg}

                        rightCardTitle={tempTitle}
                        rightCardLabel={tempLabel}
                        rightCardBackImg={tempRightImg}
                    />

                    <TitleCard
                        title={tempTitle}
                        label={tempLabel}
                        backVideo={tempTitleVid}
                    />
                </MaxWidthContainer>
            </CenterContainer>

            {/*    <div className="*/}
            {/*        d-flex*/}
            {/*        flex-column*/}
            {/*        justify-content-center*/}
            {/*        align-items-center*/}
            {/*    ">*/}
            {/*        <div className="*/}
            {/*        max-width-desktop*/}
            {/*        width-100*/}
            {/*        d-flex*/}
            {/*        justify-content-center*/}
            {/*        flex-column*/}
            {/*">*/}
            {/*            <CardHolderSecondary/>*/}
            {/*            <TitleCard*/}
            {/*                label={"Label for title"}*/}
            {/*                title={"Lorem Ipsum dolor sit amet."}*/}
            {/*                backVideo={'https://assets.mixkit.co/videos/preview/mixkit-people-ending-a-business-meeting-4802-large.mp4'}*/}
            {/*            />*/}

            {/*            <BetweenPrimary*/}
            {/*                title={'Lorem ipsum dolor sit, adipisicing elit!'}*/}
            {/*                label={'Just another label'}*/}
            {/*                logoImgUrl={'https://cdn-icons-png.flaticon.com/512/7967/7967902.png'}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*    </div>*/}

        </section>
    );
};

export default Home;
