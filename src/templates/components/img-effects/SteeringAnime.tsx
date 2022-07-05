import React from 'react';
import '../../styles/anime.css'

interface IProps {
    logoImgUrl?: string;
    logoSize?: string;
}

const SteeringAnime = (props: IProps) => {
    return (
        <div
            id="steering-anime"
        >
            <img
                id="steering-img"
                src={props.logoImgUrl}
                style={{width: props.logoSize}}
            />
        </div>
    );
};

export default SteeringAnime;
