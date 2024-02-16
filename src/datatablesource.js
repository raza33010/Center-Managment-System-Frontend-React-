/**
 * Student Record
 */
export const studentrecordColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "center_id",
    headerName: "Center Id",
    width: 230,
  },
  {
    field: "student_id",
    headerName: "Student Id",
    width: 230,
  },
  {
    field: "file",
    headerName: "Report Card",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  {
    field: "date",
    headerName: "Date",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchStudentrecordRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/srecord";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Export an empty array to be used until the API data is loaded
export const studentrecordRows = [];

/**
 * Account
 */
export const accountColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Account Name",
    width: 230,
  },
  {
    field: "balance",
    headerName: "Account Balance",
    width: 230,
  },
  // {
  //   field: "bank_id",
  //   headerName: "Bank Id",
  //   width: 230,
  // },
  // {
  //   field: "amount",
  //   headerName: "Amount",
  //   width: 230,
  // },
  // {
  //   field: "transaction_id",
  //   headerName: "Transaction Id",
  //   width: 230,
  // },
  // {
  //   field: "transaction_type",
  //   headerName: "Transaction Type",
  //   width: 230,
  // },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchAccountRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'user',
    role_id: localStorage.getItem("role_id"),
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};

// Export an empty array to be used until the API data is loaded
export const accountRows = [];

/**
 * Expense
 */
export const expenseColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "user_names",
    headerName: "User",
    width: 230,
  },
  {
    field: "account_names", 
    headerName: "Account Name",
    width: 230,
  },
  {
    field: "transaction_names",
    headerName: "Transaction",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 230,
  },
  {
    field: "balances",
    headerName: "Balance",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchExpenseRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'user',
    role_id: localStorage.getItem("role_id"),
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};

// Export an empty array to be used until the API data is loaded
export const expenseRows = [];



/**
 * Users
 */
export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone_no",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "role_names",
    headerName: "Role Id",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchUserRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'user',
    role_id: localStorage.getItem("role_id"),
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const userRows = [];

export const cooColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone_no",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "role_names",
    headerName: "Role Id",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchCooRows =  async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'coo',
    role_id: '2',
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const cooRows = [];



/**
 * Class
 */
export const classColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "total_students",
    headerName: "Total Students",
    width: 230,
  },
  {
    field: "subject_names",
    headerName: "Subjects",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchClassRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'coo',
    role_id: '2',
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/class', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const classRows = [];

/**
 * Batch
 */
export const batchColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchBatchRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'coo',
    role_id: '2',
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/batch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const batchRows = [];

/**
 * Account
 */
export const dutyColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "user_names",
    headerName: "User Id",
    width: 230,
  },
  {
    field: "job",
    headerName: "Job",
    width: 230,
  },
  {
    field: "date",
    headerName: "date",
    width: 230,
  },
  {
    field: "duty_time",
    headerName: "time",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchDutyRows =  async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    // role: 'coo',
    // role_id: '2',
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/duty', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const dutyRows = [];

/**
 * Student
 */
export const studentColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "image",
    headerName: "Student Picture",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "father_name",
    headerName: "Father Name",
    width: 230,
  },
  {
    field: "father_phone",
    headerName: "Father Phone Number",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "bform",
    headerName: "B Form",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },
  {
    field: "roll_no",
    headerName: "Roll No",
    width: 230,
  },
  {
    field: "center_id",
    headerName: "Center Id",
    width: 230,
  },
  {
    field: "batch_id",
    headerName: "Batch Id",
    width: 230,
  },  
  {
    field: "class_id",
    headerName: "Class Id",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchStudentRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/student";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Export an empty array to be used until the API data is loaded
export const studentRows = [];



/**
 * Subject
 */
export const subjectColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Subject Name",
    width: 230,
  },
  // {
  //   field: "class_names",
  //   headerName: "Class",
  //   width: 230,
  // },
  {
    field: "user_names",
    headerName: "Users",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchSubjectRows =  async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    // role: 'coo',
    // role_id: '2',
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/subject', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const subjectRows = [];

/**
 * Teacher
 */
export const teacherColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone_no",
    headerName: "Phone Number",
    width: 230,
  },
  {
    field: "role_names",
    headerName: "Role",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchTeacherRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'teacher',
    role_id: localStorage.getItem("role_id"),
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const teacherRows = [];

/**
 * result
 */
export const resultColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "center_id",
    headerName: "Center Id",
    width: 230,
  },
  {
    field: "exam_id",
    headerName: "Exam Id",
    width: 230,
  },
  {
    field: "student_id",
    headerName: "Student Id",
    width: 230,
  },
  {
    field: "mark",
    headerName: "Marks",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchResultRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/result";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const resultRows = [];

/**
 * role
 */
export const roleColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "screen",
    headerName: "Screen",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchRoleRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/role";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const roleRows = [];

/**
 * Center
 */
export const centerColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Center Name",
    width: 230,
  },
  {
    field: "logo",
    headerName: "Picture",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "phone_no",
    headerName: "Phone Number",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchCenterRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/center";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Export an empty array to be used until the API data is loaded
export const centerRows = [];

/**
 * Role Screen
 */
export const rolescreenColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "center_id",
    headerName: "Center Id",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchRolescreenRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/rscreen";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const rolescreenRows = [];

/**
 * Examination
 */
export const examinationColumns = [
  { field: "id", headerName: "ID", width: 70 },
  // {
  //   field: "center_id",
  //   headerName: "Center Id",
  //   width: 230,
  // },
    {
    field: "file",
    headerName: "Paper",
    width: 230,
  },
  {
    field: "class_names",
    headerName: "Class",
    width: 230,
  },
  {
    field: "subject_names",
    headerName: "Subject",
    width: 230,
  },
  {
    field: "type",
    headerName: "Paper Type",
    width: 230,
  },
    {
    field: "month",
    headerName: "Month",
    width: 230,
  },
  {
    field: "date",
    headerName: "Date",
    type:'date',
    width: 230,
  },
  {
    field: "total_marks",
    headerName: "Total Marks",
    width: 230,
  },
  {
    field: "user_names",
    headerName: "Invigilator",
    width: 230,
  },
  {
    field: "schedule_start_time",
    headerName: "Schedule Start Time",
    width: 230,
  },
  {
    field: "schedule_end_time",
    headerName: "Schedule End Time",
    width: 230,
  },
  {
    field: "start_time",
    headerName: "Start Time",
    width: 230,
  },
  {
    field: "end_time",
    headerName: "End Time",
    width: 230,
  },
  {
    field: "checking_status",
    headerName: "Checking Status",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchExaminationRows = async () => {
  const formData = {
    center_id: localStorage.getItem("center_id"),
    role: 'user',
    role_id: localStorage.getItem("role_id"),
  };
  console.log("abbas",formData);
  const formDataString = JSON.stringify(formData);
  try {
     const response = await fetch('http://127.0.0.1:5000/examination', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formDataString,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then((data) => {
        const userdata = data;
        console.log("abbas",userdata);
        return userdata
     
      })
      .catch((error) => {
        console.log(error)
        // setError('Invalid username or password!');
        // setUsername('');
        // setPassword('');
      }
      );
    return response
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const examinationRows = [];

/**
 * Course Chapter
 */
export const coursechapterColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "center_id",
    headerName: "Center Id",
    width: 230,
  },
  {
    field: "subject_id",
    headerName: "Subject Id",
    width: 230,
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchCoursechapterRows = async () => {
  try {
    const apiUrl = "http://127.0.0.1:5000/cchapter";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const coursechapterRows = [];























/**
 * Categories
 */
export const categoryColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "category_name",
    headerName: "Category",
    width: 230,
  },
  {
    field: "category_picture",
    headerName: "Picture",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },

  {
    field: "no_of_quiz",
    headerName: "Number of Quiz",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchCategoryRows = async () => {
  try {
    const apiUrl = "/center";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const categoryRows = [
        {
            "id": 1,
            "category_name": "Biology and Scientific Method",
            "category_picture": "file:///C:/Users/Muhammad%20Jawwad/Downloads/undraw_doctors_7fdn%20(1).svg",
            "no_of_quiz": 20,
            "status": 1,
            "created_at": "2022-11-21T14:00:12.000Z",
            "updated_at": "2022-11-21T14:00:12.000Z"
        },
        {
            "id": 2,
            "category_name": "Arts and Sciences",
            "category_picture": "file:///C:/Users/Muhammad%20Jawwad/Downloads/undraw_doctors_7fdn%20(1).svg",
            "no_of_quiz": 10,
            "status": 1,
            "created_at": "2022-11-21T14:02:08.000Z",
            "updated_at": "2022-11-21T14:02:08.000Z"
        },
        {
            "id": 3,
            "category_name": "Investment and Types",
            "category_picture": "file:///C:/Users/Muhammad%20Jawwad/Downloads/undraw_business_plan_re_0v81.svg",
            "no_of_quiz": 10,
            "status": 1,
            "created_at": "2022-11-21T14:03:18.000Z",
            "updated_at": "2022-11-21T14:03:18.000Z"
        },
        {
            "id": 4,
            "category_name": "Art and Painting Basic",
            "category_picture": "undraw_making_art_re_ee8w.svg",
            "no_of_quiz": 10,
            "status": 1,
            "created_at": "2022-11-21T14:04:45.000Z",
            "updated_at": "2022-11-21T14:04:45.000Z"
        },
];

/**
 * Quizes
 */
export const quizColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "quiz_no",
    headerName: "Quiz Number",
    width: 230,
  },
  {
    field: "category_id",
    headerName: "Category Id",
    width: 230,
  },
  {
    field: "quiz_name",
    headerName: "Quiz Name",
    width: 230,
  },
  {
    field: "picture",
    headerName: "Picture",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.value} alt="Profile" className="cellImg" />
        </div>
      );
    },
  },
  {
    field: "no_of_questions",
    headerName: "Number of Questions",
    width: 230,
  },
  {
    field: "description",
    headerName: "Description",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchQuizRows = async () => {
  try {
    const apiUrl = "/api/admin/getquiz";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const quizRows = [];

/**
 * Questions
 */
export const questionColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "quiz_id",
    headerName: "Quiz Id",
    width: 230,
  },
  {
    field: "question",
    headerName: "Question",
    width: 230,
  },
  {
    field: "option_1",
    headerName: "Option 1",
    width: 230,
  },
  {
    field: "option_2",
    headerName: "Option 2",
    width: 230,
  },
  {
    field: "option_3",
    headerName: "Option 3",
    width: 230,
  },
  {
    field: "option_4",
    headerName: "Option 4",
    width: 230,
  },
  {
    field: "correct_option",
    headerName: "Correct Option",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchQuestionRows = async () => {
  try {
    const apiUrl = "/api/admin/getquestion";
    const response = await fetch(apiUrl);
    console.log("response",response);
    const data = await response.json();
    console.log("data",data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const questionRows = [];

/**
 * Review
 */
export const reviewColumns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "question",
    headerName: "Question",
    width: 1180,
  },
];
// Fetch the data from the API and format it for the DataGrid
export const fetchReviewRows = async () => {
  try {
    const apiUrl = "/api/admin/getquestion";
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded
export const reviewRows = [];