import React from 'react';
import Card from "../Card";
import TallCard from "../TallCard";

const CardHolderRow = () => {
    return (
        <div className="d-flex gap-25">
            <div className="d-flex width-100 gap-25">
                <div className="width-100 d-flex">
                    <Card />
                </div>
                <div className="width-100 d-flex gap-25">
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default CardHolderRow;
