import React from 'react';
import {Flex100Wrap, Flex50, Flex50Wrap, Flex50WrapXS} from "../../styled/containers/FlexedContainers";
import TallCard from "../../cards/TallCard";
import Card from "../../cards/Card";
import {ICardHolder} from "../../../models/ICardHolder";

const CardHolder = (props: ICardHolder) => {
    const {
        tallCardTitle, tallCardLabel, tallCardBackImg,
        wideCardTitle, wideCardLabel, wideCardBackImg,
        leftCardTitle, leftCardLabel, leftCardBackImg,
        rightCardTitle, rightCardLabel, rightCardBackImg
    } = props;

    return (
        <Flex100Wrap>
            <Flex50>
                <TallCard
                    title={tallCardTitle}
                    label={tallCardLabel}
                    backImg={tallCardBackImg}
                />
            </Flex50>
            <Flex50Wrap>
                <Card
                    title={wideCardTitle}
                    label={wideCardLabel}
                    backImg={wideCardBackImg}
                />
                <Flex100Wrap>
                    <Flex50WrapXS>
                        <Card
                            title={leftCardTitle}
                            label={leftCardLabel}
                            backImg={leftCardBackImg}
                        />
                    </Flex50WrapXS>
                    <Flex50WrapXS>
                        <Card
                            title={rightCardTitle}
                            label={rightCardLabel}
                            backImg={rightCardBackImg}
                        />
                    </Flex50WrapXS>
                </Flex100Wrap>
            </Flex50Wrap>
        </Flex100Wrap>
    );
};

export default CardHolder;
