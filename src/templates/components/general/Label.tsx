import React from 'react';

interface IProps {
    labelTitle: string;
    fontColor?: string;
    textSize?: string;
}

const Label = (props: IProps) => {
    return (
        <h3
            style={{
                fontSize: props.textSize,
                color: props.fontColor
            }}
        >
            {props.labelTitle}
        </h3>
    );
};

export default Label;
