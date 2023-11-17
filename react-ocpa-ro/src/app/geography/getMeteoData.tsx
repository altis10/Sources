import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import MeteoApiAddress from "../models/meteoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { MeteoData, CalendarRange, MeteoDailyData } from "../models/meteo";
import DisplayDailyMeteoData from "../meteo/displayMeteoData";
import styles from '../page.module.scss';

const Weekdays = {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday'
}

const GetMeteoData = ({ location, skip, take }) => {
    let hidden = false;
    const meteoData = useRef<MeteoData>();
    let mdEx: MeteoDailyData[] = [];
    let mwEx: MeteoDailyData[][] = [];
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${MeteoApiAddress(location, skip, take).meteoData}`);
    let colNumber = 0;
    const weekdays = ['Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday'];

    useEffect(() => {
        const fetchMeteoData = async () => {
            meteoData.current = await get();
        };
        if (!!location.region && !!location.subregion && !!location.city) {
            fetchMeteoData();            
        }
    }, [get, location]);

    if (meteoData?.current?.data) {
        for(const date of Object.keys(meteoData?.current?.data)) {
            const data = meteoData?.current?.data[date];
            data.date = date;
            let elmDate = new Date(data.date);
            let dayOfWeek = elmDate.getDay();
            while (colNumber !== dayOfWeek) {
                mdEx.push(undefined);
                ++colNumber;
            }
            mdEx.push(data);
            ++colNumber;
            if(colNumber === 7) {
                mwEx.push(mdEx);
                colNumber = 0;
                mdEx = [];                
            }
          }
        
        return (
            <>
            <table className={`${styles.table} ${styles.td}`}>
                    <thead>
                        <tr>
                            {weekdays.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {mwEx?.map((item, count) => (
                            <tr key={count}>
                                {item?.map((day) => (
                                    <td key={day?.date}>
                                        {day?.date && <DisplayDailyMeteoData meteoData={day} />}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
            </table>
            </>
        );
    }
};

export default GetMeteoData;