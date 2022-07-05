import React from 'react';
import LinkText from "../general/LinkText";

const LinkHolder = () => {
    return (
        <div
            id={'link-holder'}
            className={"width-40 d-flex justify-content-between"}
        >
            <div
                className={'d-flex flex-column'}
            >
                <LinkText text={'Företagsinformation'}/>
                <LinkText text={'Välj marknad'}/>
                <LinkText text={'FAQ'}/>
            </div>
            <div
                className={'d-flex flex-column'}
            >
                <LinkText text={'Policy för godtagbar användning'}/>
                <LinkText text={'Integritetspolicy'}/>
                <LinkText text={'Hantera cookies'}/>
            </div>
            <div
                className={'d-flex flex-column margin-b-xs'}
            >
                <LinkText text={'Användarvillkor'}/>
                <LinkText text={'Cookie policy'}/>
                <LinkText text={'FAQ'}/>
            </div>
        </div>
    );
};

export default LinkHolder;
