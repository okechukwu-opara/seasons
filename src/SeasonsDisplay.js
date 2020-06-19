import './SeasonsDisplay.css'
import React from 'react';

const seasonConfig = {
    winter: {
        text: "Burr, It's Chilling",
        iconName: 'snowflake'
    },

    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'winter' : 'summer'
    } else {
        return lat > 0 ? 'summer' : 'winter'
    }
}

const SeasonsDisplay = (props) => {

    const season = getSeason (props.lat, new Date().getMonth());
    // const text = season === 'winter' ? "Burr, It's Chilling" : "Let's hit the beach";
    // const iconName = season === 'winter' ? 'snowflake' : 'sun' ;
    // console.log(season);
    // console.log(seasonConfig);
    const {text, iconName} = seasonConfig[season];
    
    return (
        <div className={`seasons-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonsDisplay;