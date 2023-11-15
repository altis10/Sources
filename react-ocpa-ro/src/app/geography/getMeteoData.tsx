import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import MeteoApiAddress from "../models/meteoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { MeteoData, CalendarRange, MeteoDailyData } from "../models/meteo";
import DisplayDailyMeteoData from "../meteo/displayMeteoData";
import styles from '../page.module.css';

const GetMeteoData = ({ meteoDataChanged, region, subregion, city, skip, take }) => {
    let hidden = false;
    const meteoData = useRef<MeteoData>();
    let mdEx: MeteoDailyData[] = [];
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${MeteoApiAddress(region, subregion, city, skip, take).meteoData}`);

    useEffect(() => {
        const fetchMeteoData = async () => {
            meteoData.current = await get();
        };
        if (region) {
            fetchMeteoData();            
        }
    }, [get, region]);

    if (meteoData?.current?.data) {
        for(const date of Object.keys(meteoData?.current?.data)) {
            const data = meteoData?.current?.data[date];
            data.date = date;
            mdEx.push(data);
          }
        
        return (
            <>
            <div className={styles.meteodata}>
                {mdEx?.map((item) => (
                    <DisplayDailyMeteoData key={item.date} meteoData={item} />
                ))}
            </div>

{/*             <table className="card-text table">
                {mdEx?.map((item) => (
                    <>
                    <thead>
                        <tr>
                            <th scope="col">{item.date}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td><DisplayDailyMeteoData meteoData={item} /></td>
                    </tbody>
                    </>
                ))}
            </table>
 */}            </>
        );
    }
};

export default GetMeteoData;