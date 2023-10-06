import { GridCoordinates } from "./geography";

interface CalendarRange {
    start: string,
    end: string,
    length: number
}

interface MeteoDailyData {
    date: string

    tMinActual?: number,
    tMaxActual?: number,
    tMinNormal?: number,
    tMaxNormal?: number,
    forecast?: string,
    tempFeel?: string,

    hazards?: string[],
    wind?: number,
    precip?: number,
    snowCover?: number,
    instability?: number,
    fog?: number,

    soilRain?: number,
    rain?: number,
    snow?: number,

    windDirection?: string

    p00?: number,
    p01?: number,
}

interface MeteoData {
    gridCoordinates: GridCoordinates;
    calendarRange: CalendarRange;
    data: { [id: string]: MeteoDailyData };
}

enum Unit 
{ 
    Metric,
    Imperial 
}

export type { CalendarRange, MeteoDailyData, MeteoData, Unit };