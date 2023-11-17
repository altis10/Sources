const GeoAPIAddress = (location) => {

    return {
        regions: "/geography/regions",
        subregions: `/geography/subregions?region=${location.region}`,
        cities: `/geography/cities?region=${location.region}&subregion=${location.subregion}`,
        cityInfo: `/geography/city?region=${location.region}&subregion=${location.subregion}&city=${location.city}`,
        gridCoordinate: `/geography/grid?region=${location.region}&subregion=${location.subregion}&city=${location.city}`,
    };
};

export default GeoAPIAddress;