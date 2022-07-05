import React from 'react';
import '../../styles/screen.css'
import {IVideoScreen} from "../../models/IVideoScreen";

const VideoScreen = (props: IVideoScreen) => {
    const {
        title, titleColor,
        label, labelColor,
        videoUrl,
        instruction, instructionColor,
        logoText, logoTextColor,
        logoImgUrl, logoRight, logoImgRight
    } = props;

    return (
        <div id="video-screen-container">
            <div id="video-screen-bg">
                <video autoPlay muted loop id="the-video">
                    <source
                        src={videoUrl}
                        type="video/mp4"
                    />
                </video>
            </div>
            <div
                id="video-logo"
                style={(logoRight) ? {right: '0'} : {}}
            >
                <div className="d-flex">
                    {
                        (!logoImgRight) ?
                            <>
                                <img id='logo-img' src={logoImgUrl}
                                     style={{marginRight: '1rem'}}
                                />
                                <h3>{logoText} </h3>
                            </>
                            :
                            <>
                                <h3>{logoText} </h3>
                                <img id='logo-img' src={logoImgUrl}
                                     style={{marginLeft: '1rem'}}
                                />
                            </>
                    }
                </div>
            </div>
            <div id="video-title"
            >
                <h1
                    style={{color: titleColor}}
                >
                    {title}
                </h1>
                <h2
                    style={{color: labelColor}}
                >
                    {label}
                </h2>
            </div>
            <div id="video-instructions">
                <div id="bottom-icon">
                    <h4
                        style={{color: instructionColor}}
                    >{instruction?.toUpperCase()}</h4>
                </div>
            </div>
        </div>
    );
};

export default VideoScreen;
