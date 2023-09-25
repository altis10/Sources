import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSailboat, faCoffee, faHatHard, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/free-regular-svg-icons';
// import { faWea } from '@fortawesome/free-brands-svg-icons';

const element = <FontAwesomeIcon icon={faEnvelope} />

function MeteoComponent() {
    return (
        <div className="c1">
            <a href="/meteo">
                <div className="home-image">
                    <div style={{ fontWeight: "bold", transform:"down-60" }}>
                        Weather Forecast
                    </div>
                </div>
            </a>
            <FontAwesomeIcon icon={faCloudSunRain} title="Weather Forecast" />
        </div>
    );
}

export default MeteoComponent;