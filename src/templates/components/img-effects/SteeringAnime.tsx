import React from 'react';
import '../../styles/anime.css'

interface IProps {
    logoImgUrl?: string;
}

const SteeringAnime = (props: IProps) => {
    return (
        <div
            id="steering-anime"
        >
            <img
                id="steering-img"
                src={props.logoImgUrl}
            />
        </div>
    );
};

export default SteeringAnime;
