import React, {useEffect, useRef, useState} from 'react';
import CardHolderSecondary from "../templates/components/holders/card-holders/CardHolderSecondary";
import TitleCard from "../templates/components/cards/TitleCard";
import VideoScreen from "../templates/components/screens/VideoScreen";

import '../templates/styles/base.css'
import BetweenPrimary from "../templates/components/betweeners/BetweenPrimary";
import TallCard from "../templates/components/cards/TallCard";
import {
    MaxWidthContainer,
    CenterContainer,
    Flex50,
    Flex100, Flex50Wrap
} from "../templates/components/styled/containers/FlexedContainers";
import BasicCard from "../templates/components/cards/BasicCard";
import TallCardComp from "../templates/components/cards/TallCardComp";
import TitleCardComp from "../templates/components/cards/TitleCardComp";


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
                    <Flex100>
                        <Flex50>
                            <TallCardComp
                                title={'Lorem ipsum dolor sit amet'}
                                label={'Label for title'}
                                backImg={'https://images.unsplash.com/photo-1656656443542-178a2fca6122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
                            />
                        </Flex50>
                        <Flex50Wrap>
                            <BasicCard
                                title={'Lorem ipsum dolor sit amet'}
                                label={'Label for title'}
                                backImg={'https://images.unsplash.com/photo-1656710225172-85f6051edb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'}
                            />
                            <Flex100>
                                <BasicCard
                                    title={'Lorem ipsum sit amet'}
                                    label={'Label for title'}
                                    backImg={'https://images.unsplash.com/photo-1656660371960-7fa3321af896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
                                />
                                <BasicCard
                                    title={'Lorem ipsum dolor sit'}
                                    label={'Label for title'}
                                    backImg={'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
                                />
                            </Flex100>
                        </Flex50Wrap>
                    </Flex100>

                    <TitleCardComp
                        title={'Lorem ipsum dolor sit amet'}
                        label={'Label for title'}
                        backVideo={'https://assets.mixkit.co/videos/preview/mixkit-people-ending-a-business-meeting-4802-large.mp4'}
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
