const GeoAPIAddress = (region, subregion, city) => {

    return {
        regions: "/geography/regions",
        subregions: `/geography/subregions?region=${region}`,
        cities: `/geography/cities?region=${region}&subregion=${subregion}`,
        cityInfo: `/geography/city?region=${region}&subregion=${subregion}&city=${city}`,
        gridCoordinate: `/geography/grid?region=${region}&subregion=${subregion}&city=${city}`,
    };
};

export default GeoAPIAddress;