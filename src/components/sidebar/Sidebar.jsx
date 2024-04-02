import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { WalletOutlined } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import BatchPredictionOutlinedIcon from "@mui/icons-material/BatchPredictionOutlined";
import WorkOutlinedIcon from "@mui/icons-material/WorkOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import SubjectOutlinedIcon from "@mui/icons-material/SubjectOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import { CheckCircleOutline } from '@mui/icons-material';
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import ScreenLockLandscapeOutlinedIcon from "@mui/icons-material/ScreenLockLandscapeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const role_id = localStorage.getItem("role_id");
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/home" style={{ textDecoration: "none" }}>
          <span className="logo">Center Dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
         
          <p className="title">LISTS</p>
          <Link to="/user" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li> 
          </Link>

          {role_id == '0' && (
            <Link to="/coo" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>COO</span>
              </li>
            </Link>
          )}

          {role_id == '0' && (
          <Link to="/center" style={{ textDecoration: "none" }}>
            <li>
              <CenterFocusStrongOutlinedIcon Icon className="icon" />
              <span>Center</span>
            </li> 
          </Link>          )}


        <Link to="/account" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Account</span>
            </li> 
          </Link>
          <Link to="/expense" style={{ textDecoration: "none" }}>
            <li>
              <WalletOutlined className="icon" />
              <span>Expense</span>
            </li> 
          </Link>
          <Link to="/batch" style={{ textDecoration: "none" }}>
            <li>
              <BatchPredictionOutlinedIcon className="icon" />
              <span>Batch</span>
            </li>
          </Link>
          <Link to="/group" style={{ textDecoration: "none" }}>
            <li>
              <GroupIcon className="icon" />
              <span>Group</span>
            </li>
          </Link>
          <Link to="/class" style={{ textDecoration: "none" }}>
            <li>
              <ClassOutlinedIcon className="icon" />
              <span>Class</span>
            </li>
          </Link>
          <Link to="/timetable" style={{ textDecoration: "none" }}>
            <li>
              <AccessTimeIcon className="icon" />
              <span>Time Table</span>
            </li>
          </Link>
          <Link to="/teacher_attendance" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutline className="icon" />
              <span>Teacher Attendance</span>
            </li>
          </Link>
          <Link to="/duty" style={{ textDecoration: "none" }}>
            <li>
              <WorkOutlinedIcon className="icon" />
              <span>Duty</span>
            </li>
          </Link>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <li>
              <ChildCareOutlinedIcon className="icon" />
              <span>Student</span>
            </li>
          </Link>
          <Link to="/subject" style={{ textDecoration: "none" }}>
            <li>
              <SubjectOutlinedIcon className="icon" />
              <span>Subject</span>
            </li>
          </Link>
          <Link to="/teacher" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Teacher</span>
            </li>
          </Link>
          <Link to="/result" style={{ textDecoration: "none" }}>
            <li>
              <PercentOutlinedIcon className="icon" />
              <span>Subject Result</span>
            </li>
          </Link>
          {role_id == '0' && (      
            <Link to="/role" style={{ textDecoration: "none" }}>
            <li>
              <RocketLaunchOutlinedIcon className="icon" />
              <span>User Role</span>
            </li>
          </Link>          )}

          <Link to="/srecord" style={{ textDecoration: "none" }}>
            <li>
              <FiberSmartRecordOutlinedIcon  className="icon" />
              <span>Student Record</span>
            </li>
          </Link>
          <Link to="/rscreen" style={{ textDecoration: "none" }}>
            <li>
              <ScreenLockLandscapeOutlinedIcon  className="icon" />
              <span>Role Screen</span>
            </li>
          </Link>
          <Link to="/examination" style={{ textDecoration: "none" }}>
            <li>
              <CheckCircleOutlineOutlinedIcon  className="icon" />
              <span>Examination</span>
            </li>
          </Link>
          <Link to="/cchapter" style={{ textDecoration: "none" }}>
            <li>
              <TopicOutlinedIcon  className="icon" />
              <span>Course Chapter</span>
            </li>
          </Link>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <li>
              <TopicOutlinedIcon  className="icon" />
              <span>Question</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={() => { localStorage.removeItem("token") }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
