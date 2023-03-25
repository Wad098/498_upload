import "@picocss/pico"
import '../css/DashBoards.css';
import { AiOutlineLineChart } from 'react-icons/ai';
import { GiHistogram } from 'react-icons/gi';
import { FaChartArea } from 'react-icons/fa';
import { RiWindyFill } from 'react-icons/ri';
import { useState } from "react";
import { Link } from "react-router-dom"
import DashBoards2 from "./DashBoards2";


const DashBoards = () => {
    const [station, setStation] = useState("White Glacier Nunatak");
    const [variable, setVariable] = useState("Temp_2m_C");
    const [plotType, setPlotType] = useState("LineChart");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const [fromTime, setFromTime] = useState("1970-01-01T00:00");
    const [toTime, setToTime] = useState(`${now.toISOString().slice(0, 11)}${hours}:${minutes}`);
    const [boardName, setBoardName] = useState("Dashboard1");

    const [isOpenDash1, setIsOpenDash1] = useState(true);
    const [createList, setcreateList] = useState([]);

    // 用createList上传mongodb 到plottype

    const dict = {
        station,
        variable,
        plotType,
        fromTime,
        toTime,
        boardName
    }


    const handleStation = (e) => {
        setStation(e.target.value)
    };

    const handleVariable = (e) => {
        setVariable(e.target.value)
    };

    const handlePlotType = (e) => {
        setPlotType(e.target.value)
    }

    const handleFromTime = (e) => {
        setFromTime(e.target.value)
    }

    const handletToTime = (e) => {
        setToTime(e.target.value)
    }

    const handleBoardName = (e) => {
        setBoardName(e.target.value)
    }

    const DashBoards2Create = (e) => {
        setIsOpenDash1(e)
    }

    const createDate = () => {
        const newList = [...createList, dict];
        console.log(newList);
        setcreateList(newList)
        setIsOpenDash1(false)
    }

    const deteleDate = (index) => {
        const newList = createList.filter((item,i)=>i !== index);
        setcreateList(newList);
    }


    if (!isOpenDash1) return <DashBoards2 create={DashBoards2Create} datelete={deteleDate} dict={createList} />
    return (
        <>
            <>
                <p className="QustionMark">Want to create your own DashBoards?</p >
                <div className="drop-down-main">
                    <p className="WhichStation">Station</p >
                    <div className="drop-down2">
                        <select value={station} onChange={handleStation}>
                            <option value="000003">White Glacier Nunatak</option>
                            <option value="000004">White Glacier Melt Zone</option>
                            <option value="000002">White Glacier Moraine</option>
                            <option value="000001">Colour Lake</option>
                            <option value="Crusoe Glacier">Crusoe Glacier</option>
                            <option value="Erratics Island">Erratics Island</option>
                        </select>
                    </div>
                </div>
                <div className="drop-down-main2">
                    <p className="WhichVariable">Variable</p >
                    <div className="drop-down3">
                        <select value={variable} onChange={handleVariable}>
                            <option value="Temp_2m_C">Temperature</option>
                            <option value="Relative humidity">Relative humidity</option>
                            <option value="Wind speed">Wind speed</option>
                            <option value="Wind direction">Wind direction</option>
                            <option value="Incoming/downward shortwave radiation">Incoming/downward shortwave radiation</option>
                            <option value="Snow depth">Snow depth</option>
                            <option value="Battery power">Battery power</option>
                        </select>
                    </div>
                </div>
                <p className="WhichPlot">Select Plot Type: {plotType}</p >
                <div>
                    <div className="LineChart" onClick={handlePlotType}>
                        <div className="BB1"></div>
                        <AiOutlineLineChart className='AiOutlineLineChart' />
                        <p className="LineChart_Text">LINE CHART</p >
                        <button value="LineChart" className="transparent-button1" onClick={handlePlotType} />
                    </div>
                    <div className="HISTOGRAM" onClick={handlePlotType}>
                        <div className="BB2"></div>
                        <GiHistogram className='GiHistogram' />
                        <p className="GiHistogram_Text">Histogram</p >
                        <button value="Histogram" className="transparent-button2" onClick={handlePlotType} />
                    </div>
                    <div className="WindRose" onClick={handlePlotType}>
                        <div className="BB3"></div>
                        <RiWindyFill className='RiWindyFill' />
                        <p className="RiWindyFill_Text">WIND ROSE</p >
                        <button value="WindRose" className="transparent-button3" onClick={handlePlotType} />
                    </div>
                </div>
                <div class="TimeChoose">
                    <p class="From">From</p >
                    <input
                        value={fromTime}
                        type="datetime-local"
                        className="startdate1"
                        onChange={handleFromTime}
                    />
                </div>
                <div class="TimeChoose2">
                    <p class="To">To</p >
                    <input
                        value={toTime}
                        type="datetime-local"
                        class="Enddate2"
                        onChange={handletToTime}
                    />
                </div>
                <p className="WhichName">Name</p >
                <form>
                    <label className="LabelInput">
                        <input type="text" className="NameInput" value={boardName} onChange={handleBoardName} />
                    </label>
                </form>
                {/* <Link to="/DashBoard2"> */}
                <button className="NextButton" onClick={createDate}>CREATE</button>
                {/* </Link> */}
            </>

        </>
    );
}

// export {dict};
export default DashBoards;