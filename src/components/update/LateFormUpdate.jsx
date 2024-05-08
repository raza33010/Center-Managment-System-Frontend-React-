import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Select from 'react-select';
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { lateformInputs } from "../../formSource";

  const statusOptions = [
      { value: 1, label: 'Active' },
      { value: 0, label: 'Inactive' },
    ];

const  LateFormUpdate = ({ title }) => {

    // Extracting LFId using regular expressions
    const location = useLocation();
    const LFId = location.pathname.match(/\/update-late-form\/(\d+)/)?.[1];

    // Initializing state
    const [selectedStatus, setSelectedStatus] = useState(null);
    const [inputValues, setInputValues] = useState("");
    let [token] = useState(localStorage.getItem("token"));
    
    const redirectToLogin = () => {
        alert("Plaese Login first then you can access this page...");
        window.location.href = '/'; // Replace "/login" with the actual login page path
    };

    const navigate = useNavigate();

    useEffect(() => {
        const fetchLform = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/student/lform/${LFId}`, {
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch quiz');
                }
                const data = await response.json();
                console.log("abbas",data)
                setInputValues(data.data);
                const status = data.data.Status
                console.log(status);
                if (status == 1){
                    setSelectedStatus({ value: status, label: 'Active' });
                }
                else{
                    setSelectedStatus({ value: status, label: 'Inactive' });
                }
                localStorage.setItem("quizData", JSON.stringify(data));

            } catch (error) {
                console.error(error);
            }
        };

        if (LFId) {
            fetchLform();
        }
    }, [LFId]);
    // console.log("quiz in a state:", data);



    const handleInputChange = (e) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const handleStatusSelectChange = (selectedOption) => {
        setSelectedStatus(selectedOption);
        setInputValues({
          ...inputValues,
          status: selectedOption.value,
        });
      };




    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("center_id", localStorage.getItem('center_id'));
        formData.append("student_id", localStorage.getItem('student_id'));
        formData.append("user_id", localStorage.getItem('user_id'));
        formData.append("reason", inputValues.reason);
        formData.append("time", inputValues.time);
        formData.append("date", inputValues.date);
        formData.append('status', inputValues.status || 1);
        // formData.append("logo", file); // Append the file to FormData
    


        // Send formData to the server using an HTTP request to update
        fetch(`http://127.0.0.1:5000/student/upd_lform/${LFId}`, {
            method: "PUT",
            body: formData, // Pass the object as the body
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log("Response from API", data);
                // Navigate to the desired page after API response
                navigate(`/student/late-form`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            {!token && redirectToLogin()}
            {token && (
                <div className="update">
                    <Sidebar />
                    <div className="updateContainer">
                        <Navbar />
                        <div className="top">
                            <h1>{title}</h1>
                        </div>
                        <div className="bottom">
                            <div className="right">
                                <form onSubmit={handleUpdate}>
                                    {lateformInputs.map((input) => (
                                         <div className="formInput" key={input.id}>
                                         <label>{input.label}</label>
                                         {
                                        input.fieldName === "status" ? (
                                             <Select
                                             options={statusOptions}
                                             name={input.fieldName}
                                             value={selectedStatus}
                                             onChange={handleStatusSelectChange}
                                             required
                                             />
                                         ) :<input
                                             type={input.type}
                                             placeholder={input.placeholder}
                                             name={input.fieldName}
                                             value={inputValues[input.fieldName] || ''}
                                             onChange={handleInputChange}
                                             required
                                             // inputMode={input.fieldName === 'no_of_quiz' ? 'numeric' : undefined}
                                         />
                                         }
                                     </div>
                                    ))}
                                    <div style={{ clear: "both" }} className="formUpdate">
                                        <button
                                            style={{ float: "right" }}
                                        // onClick={() => navigate(`/categories/${LFId}`)}
                                        >
                                            Update
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            style={{ float: "right" }}
                                            onClick={() => navigate(`/student/late-form`)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
    );
};

export default LateFormUpdate;