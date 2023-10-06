interface City {
    name: string,
    subregion: string,
    latitude: number,
    longitude: number,
    default: boolean
}

interface GridCoordinates {
    r: number,
    c: number
}

export type { City, GridCoordinates };