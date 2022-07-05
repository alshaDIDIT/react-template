import React from 'react';

interface IProps {
    title: string;
    fontColor?: string;
    textSize?: string;
}

const Title = (props: IProps) => {
    return (
        <h1 style={{color: props.fontColor, fontSize: props.textSize}}>
            {props.title}
        </h1>
    );
};

export default Title;
