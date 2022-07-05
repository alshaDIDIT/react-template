import React from 'react';
import Leaf from "../../assets/img/leaf.png";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


interface IProps {
    bgColor: string;
}

const WelcomeScreen = (props: IProps) => {

    const handleScroll = () => {

    }

    return (
        <div className="welcome-screen">
            <div
                className="welcome-container"
                style={{backgroundColor: props.bgColor}}
            >

                <img src={Leaf} style={{width: '10rem'}}/>

                <div className="d-flex">
                    {/*<Title title={"Lorem Ipsum"} fontColor={"white"} />*/}
                    <h1 style={{color: 'white', marginLeft: '2.5rem'}}><FontAwesomeIcon icon={faMicrochip} /></h1>
                </div>

                {/*<Label*/}
                {/*    labelTitle={"Prepared solutions"}*/}
                {/*    textSize={'2.5rem'}*/}
                {/*    fontColor={"#777225"}*/}
                {/*/>*/}
            </div>
        </div>
    );
};

export default WelcomeScreen;
