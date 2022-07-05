import React from 'react';
import Card from "../Card";
import TallCard from "../TallCard";

const CardHolderSecondary = () => {
    return (
        <div className="d-flex gap-25">
            <TallCard
                title={"Lorem ipsum dolor sit amet."}
                label={"Label for title"}
                backImg={'https://images.unsplash.com/photo-1656656443542-178a2fca6122?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
            />
            <div className="d-flex flex-column width-100 gap-25">
                <div className="d-flex width-100 gap-25">
                    <Card
                        linkTo={"/"}
                        title={"Lorem ipsum dolor sit amet."}
                        label={"Label for title"}
                        backImg={'https://images.unsplash.com/photo-1656710225172-85f6051edb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80'}
                    />
                </div>
                <div className="d-flex width-100 gap-25">
                    <Card
                        title={"Lorem ipsum sit amet."}
                        label={"Label for title"}
                        backImg={'https://images.unsplash.com/photo-1656660371960-7fa3321af896?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'}
                    />
                    <Card
                        title={'Lorem Ipsum dolor at'}
                        label={'Label for title'}
                        backImg={'https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardHolderSecondary;
