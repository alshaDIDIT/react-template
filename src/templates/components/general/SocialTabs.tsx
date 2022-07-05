import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faFacebookF, faYoutube, faTwitter} from "@fortawesome/fontawesome-free-brands";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ISocialTab} from "../../models/ISocialTab";

const SocialTabs = (props: ISocialTab) => {

    const {
        facebookLink, facebookColor,
        instagramLink, instagramColor,
        youtubeLink, youtubeColor,
        twitterLink, twitterColor,
    } = props;

    return (
        <div id="social-tab">
            <Link to={facebookLink || '/'}>
                <FontAwesomeIcon
                    icon={faFacebookF as IconProp}
                    className={'icon'}
                    style={{color: facebookColor}}
                />
            </Link>
            <Link to={instagramLink || '/'}>
                <FontAwesomeIcon
                    icon={faInstagram as IconProp}
                    className={'icon'}
                    style={{color: instagramColor}}
                />
            </Link>
            <Link to={youtubeLink || '/'}>
                <FontAwesomeIcon
                    icon={faYoutube as IconProp}
                    className={'icon'}
                    style={{color: youtubeColor}}
                />
            </Link>
            <Link to={twitterLink || '/'}>
                <FontAwesomeIcon
                    icon={faTwitter as IconProp}
                    className={'icon'}
                    style={{color: twitterColor}}
                />
            </Link>
        </div>
    );
};

export default SocialTabs;
