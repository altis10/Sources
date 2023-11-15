const MeteoAPIAddress = (region, subregion, city, skip, take) => {

    return {
        meteoData: `/meteo/data?region=${region}&subregion=${subregion}&city=${city}&skip=${skip}&take=${take}`
    };
};

export default MeteoAPIAddress;