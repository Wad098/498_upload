import "@picocss/pico"
import { Link, Outlet } from "react-router-dom";
import { RiDashboard2Line } from 'react-icons/ri';
import { AiFillDatabase } from 'react-icons/ai';
import { RiBaseStationFill } from 'react-icons/ri';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { TbFileExport } from 'react-icons/tb';
import { MdContactSupport } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import { AiTwotoneSetting } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import "../css/Menu.css"
function Menu() {

  return (
    <>
    <div className="greyline">
      <div className="menu">
        <ul className="navbar-nav">
          <li class="logo">
            <Link to="/" class="nav-link-logo">
              <label className="bluePart2">ICELab </label>
              <label className="blackPart2">Queen's</label>
            </Link>
          </li>
        </ul>

          {/* DashBoards */}
          <li className="nav-item">
          <Link to="/DashBoards" class="nav-link">
            <span class="link-text">DashBoards</span>
            <RiDashboard2Line className='RiDashboard2Line'/>
          </Link>
          </li>

          {/* Device*/}
          <li class="nav-item">
            <Link to="/Station" class="nav-link">
              <span class="link-text">Station</span>
              <RiBaseStationFill className='RiBaseStationFill'/>
            </Link>
          </li>

          {/* Map */}
          <li class="nav-item">
            <Link to="/Map" class="nav-link">
              <span class="link-text">Map</span>
              <FaMapMarkedAlt className='FaMapMarkedAlt'/>
            </Link>
          </li>

          {/* ExtractPage */}
          <li class="nav-item">
            <Link to="/ExtractPage" class="nav-link">
              <span class="link-text">ExtractPage</span>
              <TbFileExport className='FaHistory'/>
            </Link>
          </li>

          {/* Support */}
          <li class="nav-item">
            <Link to="/Support" class="nav-link">
              <span class="link-text">Support</span>
              <MdContactSupport className='MdContactSupport'/>
            </Link>
          </li>

          {/* Login */}
          <li class="nav-item">
            <Link to="/Login" class="nav-link">
              <span class="link-text">Login</span>
              <BiLogIn className='BiLogIn'/>
            </Link>
          </li>

          {/* Setting */}
          <li class="nav-item">
            <Link to="/Setting" class="nav-link">
              <span class="link-text">Setting</span>
              <AiTwotoneSetting className='AiTwotoneSetting'/>
            </Link>
          </li>

          {/* Admin */}
          <li class="nav-item">
            <Link to="/Admin" class="nav-link">
              <span class="link-text">Admin</span>
              <RiAdminFill className='RiAdminFill'/>
            </Link>
          </li>
          </div>
      </div>
      <Outlet/>
      </>


    );
  }

  export default Menu;
