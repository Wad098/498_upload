import "@picocss/pico"
import { Route, Routes } from "react-router-dom";
import Menu from "./component/Menu";
import DashBoards from "./component/DashBoards";
import Charts from "./component/Chart";
import ExtractPage from "./component/ExtractPage";
import Login from "./component/Login";
import Devices from "./component/Devices";
import WindRose from "./WindRose";

function App() {

  return (
    <>

      <main>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route path="/DashBoards" element={<DashBoards />} />
            <Route path="/Graphs" element={<Charts />} />
            <Route path="/Devices" element={<Devices />} />
          </Route>
          <Route path="/Login" element={<Login />} />
        </Routes>


        {/* <Devices></Devices> */}
        {/* <DashBoards></DashBoards> */}
        {/* <Charts></Charts> */}
        {/* <ExtractPage></ExtractPage> */}
        {/* <Login></Login> */}
        {/* <WindRose></WindRose> */}
      </main>


    </>
  );
}

export default App;