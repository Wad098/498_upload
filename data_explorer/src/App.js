import "@picocss/pico"
import { Route, Routes, Link } from "react-router-dom"
import { useState } from "react";
import DashBoards from "./component/DashBoards";
import Charts from "./component/Chart";
import ExtractPage from "./component/ExtractPage";
import Login from "./component/Login";
import Devices from "./component/Devices";
import WindRose from "./WindRose";

function App() {

  const [color, setColor] = useState(false)

  const changeColor = () => {
    setColor(!color)
  }

  return (
    <>
    
    <nav className="navbar">
      <ul className="navbar-nav">
        <li class="logo">
          <a href="/" class="nav-link">
            <span class="link-text logo-text">ICELab Queen's</span>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="angle-double-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
          </a>
        </li>

        {/* DashBoards */}
        <li class="nav-item nav-color" onmouseover={changeColor} >
          <a href="/DashBoards" class="nav-link">
            <svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM288
              96c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM256 416c35.3 0 64-28.7 64
              -64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9
                288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144c0-17.7-14.3-32-32-32s-32
                14.3-32 32s14.3 32 32 32s32-14.3 32-32zM96 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32
                  32s14.3 32 32 32zm352-32c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32z" 
                  />
              </svg>
          <span class="link-text">DashBoards</span>
          </a>
        </li>

        {/* Data */}
        <li class="nav-item nav-color">
          <a href="/Data" class="nav-link">
          <svg className="fa-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0
             35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9
              54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8
               34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0
                346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3
                 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0
                  432V346.1z"/></svg>
            <span class="link-text">Data</span>
          </a>
        </li>

        {/* Device */}
        <li class="nav-item nav-color">
          <a href="/Devices" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
            <span class="link-text">Devices</span>
          </a>
        </li>

        {/* Map */}
        <li class="nav-item nav-color">
          <a href="/Map" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Map</span>
          </a>
        </li>

        {/* History */}
        <li class="nav-item nav-color">
          <a href="/History" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">History</span>
          </a>
        </li>

        {/* Support */}
        <li class="nav-item nav-color">
          <a href="/Support" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Support</span>
          </a>
        </li>

        {/* User */}
        <li class="nav-item nav-color">
          <a href="/User" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">User</span>
          </a>
        </li>

        {/* Login */}
        <li class="nav-item nav-color">
          <a href="/Login" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Login</span>
          </a>
        </li>

        {/* Setting */}
        <li class="nav-item nav-color">
          <a href="/Setting" class="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="alien-monster"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x"
            >
              <g class="fa-group">
                <path
                  fill="currentColor"
                  d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                  class="fa-secondary"
                ></path>
                <path
                  fill="currentColor"
                  d="M160,320h64V224H160Zm192-96v96h64V224Z"
                  class="fa-primary"
                ></path>
              </g>
            </svg>
            <span class="link-text">Setting</span>
          </a>
        </li> 
      </ul>
    </nav>

    <main>
      <Routes>
        <Route path="/DashBoards" element={<DashBoards />} />
        <Route path="/Graphs" element={<Charts />} />
        <Route path="/Devices" element={<Devices />} />
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
