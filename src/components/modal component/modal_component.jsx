import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import SAwardlistDataTable from '../datatable/SAwardlistDataTable';
import { useNavigate, useLocation } from 'react-router-dom';
import './modal.scss';

const CloseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const User_Single = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [userUrl, setUserUrl] = useState('');
  const [userData, setUserData] = useState(null); // State to hold fetched user data
  const [loading, setLoading] = useState(true); // Loading state

  let [token] = useState(localStorage.getItem("token"));

  const redirectToLogin = () => {
      alert("Plaese Login first then you can access this page...");
      window.location.href = '/'; // Replace "/login" with the actual login page path
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      const abbas ={
            "address": "Hasan Acadmey",
            "created_at": "Fri, 05 May 2023 21:43:16 GMT",
            "id": 1,
            "logo": "download (3).jpg",
            "name": "Jinnah Campus",
            "phone_no": "02134185108",
            "status": 1,
            "updated_at": "Mon, 02 Oct 2023 11:19:50 GMT"
        }; // Modify API call to accept pagination parameters
  
      console.log('abbas1', abbas);
      setUserData(abbas);
      setLoading(false); // Set loading to false after data is fetched
    };
    fetchData();
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/awardlist');
  };

  return (
    <>
      {!token && redirectToLogin()}
     {token && (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SAwardlistDataTable />
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box className="custom-modal">
                {!loading && (
                  <button
                    className="close-button"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    {CloseIcon}
                  </button>
                )}
                {loading ? ( // Render loading state while data is being fetched
                  <Typography>Loading...</Typography>
                ) : (
                  <>

                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                      {userData && (
                        <>
                          <div><strong>Name:</strong>{userData?.name}</div>
                          <div><strong>Phone No:</strong>{userData?.phone_no}</div>
                          {/* Render other user data as needed */}
                        </>
                      )}
                      <a href={userUrl} target="_blank" rel="noopener noreferrer">{userUrl}</a>
                    </Typography>
                  </>
                )}
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
     )
                      }
      </>
  );
};

export default User_Single;
