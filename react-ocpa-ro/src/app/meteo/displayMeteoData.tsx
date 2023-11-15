import { MeteoDailyData } from "../models/meteo";
// import styles from '../page.module.css';
import styles from './displayMeteoData.module.css'

const DisplayDailyMeteoData = ({ meteoData }) => {
    const data: MeteoDailyData = meteoData;
    let imgSrc = "../icons/meteo/precip_" + data.forecast + ".png";

    return (
        <div className={`card ${styles.dailymeteodata} ${styles[data.tempFeel]}`}>
            <img src={imgSrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.date}</h5>
                <p className="card-text">tMinActual: {data.tMinActual}</p>
                <p className="card-text">tMaxActual: {data.tMaxActual}</p>
                <p className="card-text">tMinActual: {data.tMinNormal}</p>
                <p className="card-text">tMaxNormal: {data.tMaxNormal}</p>
                <p className="card-text">Temp Forecast: {data.forecast}</p>
                <p className="card-text">Feel Temp: {data.tempFeel}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default DisplayDailyMeteoData;