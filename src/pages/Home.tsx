import React, {useEffect, useRef, useState} from 'react';
import VideoComp from "../components/home/VideoComp";
import TallCard from "../components/home/TallCard";

import '../styles/pages/Home.css'
import '../styles/effects/wide.css'
import WideCard from "../components/home/WideCard";
import Card from "../components/home/Card";
import TitleCard from "../components/home/TitleCard";
import BodyEnd from "../components/home/BodyEnd";
import {useInView} from "react-intersection-observer";

const Home = () => {
    // const {ref: wideRef, inView:  wideVisible} = useInView();
    // console.log(wideVisible)

    return (
        <div id="home-container">
            <VideoComp/>


            <div className="center-content">

                <div className="container gap-sm">
                    <div className="d-flex gap-sm">
                        <TallCard
                            link={"/"}
                            title={"Make it yours!"}
                            label={"You can do it"}
                            backImage={'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
                        />
                        <div
                            className="d-flex flex-col gap-sm"
                        >
                            <div
                            >
                                <span
                                >
                                    <WideCard
                                        link={"/"}
                                        title={"Forward and upwards!"}
                                        label={"Go grab it"}
                                        backImage={'https://images.unsplash.com/photo-1656656443542-178a2fca6122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
                                    />
                                </span>
                            </div>
                            <div id="card-holder" className="gap-sm">
                                <Card
                                    link={"/about"}
                                    label={"About us"}
                                    title={"Get to know us"}
                                    backImage={'https://images.unsplash.com/photo-1656710225172-85f6051edb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'}
                                />
                                <Card
                                    link={"/contact"}
                                    label={"Contact us"}
                                    title={"Let us hear from you"}
                                    backImage={'https://images.unsplash.com/photo-1656660371960-7fa3321af896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
                                />
                            </div>
                        </div>
                    </div>
                    <TitleCard
                        link={"/"}
                        label={"Sit back and relax"}
                        title={"Let us do the work!"}
                        videoUrl={'https://assets.mixkit.co/videos/preview/mixkit-people-ending-a-business-meeting-4802-large.mp4'}
                    />
                </div>
            </div>

            <BodyEnd/>
        </div>
    );
};

export default Home;
