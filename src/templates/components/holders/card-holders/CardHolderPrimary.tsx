import React from 'react';
import TallCard from "../../cards/TallCard";
import Card from "../../cards/Card";

const CardHolderPrimary = () => {
    return (
        <div className="d-flex gap-25">
            <div className="d-flex flex-column width-100 gap-25">
                <div className="d-flex width-100 gap-25">
                    <Card />
                    <Card />
                </div>
                <div className="d-flex width-100 gap-25">
                    <Card />
                </div>
            </div>
            <TallCard />
        </div>
    );
};

export default CardHolderPrimary;
