import "@picocss/pico"
import '../css/DashBoards.css';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaChartArea } from 'react-icons/fa';
function DashBoards () {
    return (
        <>
        <div className="stationbar">
            <div>Station</div>
            <details>
                <summary>RX3000</summary>
                <ul>
                    <li>PAR</li>
                    <li>Wind Speed</li>
                    <li>PAR</li>
                    <li>PAR</li>
                </ul>
            </details>

            <details open>
                <summary>Accordion 2</summary>
                <ul>
                    <li>…</li>
                    <li>…</li>
                </ul>
            </details>
        </div>
        <p className="Select_Data">Select Data Type:</p>
        <div className="BB1"></div>
            <AiOutlineLineChart className='AiOutlineLineChart'/>
            <p className="LineChart_Text">LINE CHART</p>
        <div className="BB2"></div>
            <BsFillBarChartFill className='BsFillBarChartFill'/>
            <p className="FaWind_Text">BAR CHART</p>
        <div className="BB3"></div>
            <FaChartArea className='FaChartArea'/>
            <p className="FaWind_Text">AREA CHART</p>
        </>
    );
}

export default DashBoards;
