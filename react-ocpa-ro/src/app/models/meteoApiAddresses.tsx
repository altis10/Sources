const MeteoAPIAddress = (location, skip, take) => {

    return {
        meteoData: `/meteo/data?region=${location.region}&subregion=${location.subregion}&city=${location.city}&skip=${skip}&take=${take}`
    };
};

export default MeteoAPIAddress;