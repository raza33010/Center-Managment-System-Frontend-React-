import "./datatable.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { halfleaveformColumns, halfleaveformRows, fetchHalfleaveformRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSlug } from "../../SlugContext";

const HalfLeaveFormDataTable = () => {
    const [data, setData] = useState(halfleaveformRows);
    const [loading, setLoading] = useState(false);
    const studentName = localStorage.getItem('student_name');
    const { slugs } = useSlug();
    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const rows = await fetchHalfleaveformRows();
            console.log("jawad",rows)
            setLoading(false);
            setData(Array.from(rows.data));
        };
        getData();
    }, []);

    const handleDelete = (id) => {
        // Make a DELETE request to the Flask API endpoint
        fetch(`http://127.0.0.1:5000/student/del_leave_form/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // Remove the item from your React data state if the API request is successful
            setData(data.filter((item) => item.id !== id));
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      };
      const viewLinkString = "Halfleaveform-Single";
      const editLinkString = "Halfleaveform-Edit";
      const newLinkString = "Halfleaveform-New";

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                         {slugs && slugs.includes(viewLinkString) && (
                        <Link to={`/student/half-leave-form/${params.row.id}`} style={{ textDecoration: "none" }}>
                        <div className="viewButton">View</div>
                        </Link>)}
                        {slugs && slugs.includes(editLinkString) && (
                        <Link to={`/student/half-leave-form/update-half-leave-form/${params.row.id}`} style={{ textDecoration: "none" }}>
                            <div className="editButton">Edit</div>
                        </Link>)}
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                {studentName}'s Half Leave Form
                {slugs && slugs.includes(newLinkString) && (
                <Link to="/student/half-leave-form/new" className="link">
                    Add New
                </Link>)}
            </div>
            {loading ? <h1 style={{ textAlign: "student", paddingTop: "20%" }}>loading...</h1> :
                <DataGrid
                    className="datagrid"
                    rows={data}
                    columns={halfleaveformColumns.concat(actionColumn)}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    components={{
                        Toolbar: GridToolbar, // Include the GridToolbar in the Toolbar slot
                    }}
                />}
        </div>
    );
};

export default HalfLeaveFormDataTable;