
export const fetchCenterId = () => {
  try {
     const response = fetch('http://127.0.0.1:5000/center_id')
    const data = response.json()
    return data
  } catch (error) {
    console.error(error);
  }
};
// Export an empty array to be used until the API data is loaded







export const categoryInputs = [
    {
      fieldName: "category_name",
      id: 1,
      label: "Category Name",
      type: "text",
      placeholder: "E.g: Applied Mathematics",
    },
    {
      fieldName: "no_of_quiz",
      id: 2,
      label: "Number of Quiz",
      type: "number",
      placeholder: "E.g: 10",
    },
  ];
  
  export const quizInputs = [
    {
      fieldName: "category_id",
      id: 1,
      label: "Category Id",
      type: "number",
      placeholder: "E.g: 2",
    },
    {
      fieldName: "quiz_no",
      id: 2,
      label: "Quiz Number",
      type: "text",
      placeholder: "E.g: Quiz 3",
    },
    {
      fieldName: "quiz_name",
      id: 3,
      label: "Quiz Name",
      type: "text",
      placeholder: "E.g: The Scientific Method",
    },
    {
      fieldName: "no_of_questions",
      id: 4,
      label: "Number of Questions",
      type: "number",
      placeholder: "E.g: 20",
    },
    {
      fieldName: "description",
      id: 5,
      label: "Description",
      type: "text",
      placeholder: "E.g: Let's put your memory on our first topic to test.",
    },
    {
      fieldName: "no_of_attempts",
      id: 6,
      label: "No of Attempts",
      type: "dropdown",
      options: ["one", "unlimited"],
      placeholder: "Select",
    },
    {
      fieldName: "status",
      id: 7,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];

  export const centerInputs = [
    {
      fieldName: "name",
      id: 1,
      label: "Center Name",
      type: "text",
      placeholder: "E.g: John",
    },
    {
      fieldName: "address",
      id: 2,
      label: "Address",
      type: "text",
      placeholder: "E.g: HNO .... SNO ..... City",
    },
    {
      fieldName: "phone_no",
      id: 3,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g: 03-- --------",
    },
    {
      fieldName: "status",
      id: 4,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];
 
  export const accountInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "user_id",
      id: 2,
      label: "User Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "description",
      id: 3,
      label: "Description",
      type: "text",
      placeholder: "Info about amount",
    },
    {
      fieldName: "bank_id",
      id: 4,
      label: "Bank Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "amount",
      id: 5,
      label: "Amount",
      type: "text",
      placeholder: "E.g: 200",
    },
    {
      fieldName: "transaction_id",
      id: 6,
      label: "Transaction Id",
      type: "text",
      placeholder: "E.g: raza33010",
    },
    {
      fieldName: "transaction_type",
      id: 7,
      label: "Transaction Type",
      type: "text",
      placeholder: "E.g: Debit Or Credit",
    },
    {
      fieldName: "status",
      id: 8,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];

  export const userInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "email",
      id: 3,
      label: "Email",
      type: "text",
      placeholder: "E.g: @gmail.com",
    },
    {
      fieldName: "phone_no",
      id: 4,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g: 03-- ------",
    },
    {
      fieldName: "role_id",
      id: 5,
      label: "Role",
      type: "select", // Change the type to "select"
      placeholder: "Select a Role", // Optional placeholder for the dropdown
    },    
    {
      fieldName: "password",
      id: 6,
      label: "Password",
      type: "text",
      placeholder: "E.g: any",
    },
    {
      fieldName: "status",
      id: 7,
      label: "Status",
      type: "select", // Change the type to "select"
      placeholder: "Select a Status", // Optional placeholder for the dropdown
      // options: [
      //   { value: "0", label: "0" }, // Add your dropdown options here
      //   { value: "1", label: "1" }, // Add more options as needed
      // ],
    }, 
  ];

  export const cooInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "email",
      id: 3,
      label: "Email",
      type: "text",
      placeholder: "E.g: @gmail.com",
    },
    {
      fieldName: "phone_no",
      id: 4,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g: 03-- ------",
    },
    {
      fieldName: "role_id",
      id: 5,
      label: "Role Id",
      type: "select", // Change the type to "select"
      placeholder: "Select a Role", // Optional placeholder for the dropdown
    },    
    {
      fieldName: "password",
      id: 6,
      label: "Password",
      type: "text",
      placeholder: "E.g: any",
    },
    {
      fieldName: "status",
      id: 7,
      label: "Status",
      type: "select", // Change the type to "select"
      placeholder: "Select a Status", // Optional placeholder for the dropdown
      options: [
        { value: "0", label: "0" }, // Add your dropdown options here
        { value: "1", label: "1" }, // Add more options as needed
      ],
    }, 
  ];

  export const cooInputsn = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "email",
      id: 3,
      label: "Email",
      type: "text",
      placeholder: "E.g: @gmail.com",
    },
    {
      fieldName: "phone_no",
      id: 4,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g: 03-- ------",
    },
    {
      fieldName: "role_id",
      id: 5,
      label: "Role ",
      type: "select", // Change the type to "select"
      placeholder: "Select a Role", // Optional placeholder for the dropdow
    },    
    {
      fieldName: "password",
      id: 6,
      label: "Password",
      type: "text",
      placeholder: "E.g: any",
    },
    // {
    //   fieldName: "status",
    //   id: 7,
    //   label: "Status",
    //   type: "select", // Change the type to "select"
    //   placeholder: "Select a Status", // Optional placeholder for the dropdown
    //   options: [
    //     { value: "0", label: "0" }, // Add your dropdown options here
    //     { value: "1", label: "1" }, // Add more options as needed
    //   ],
    // }, 
  ];

  
  export const batchInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: C-12",
    },
    // {
    //   fieldName: "status",
    //   id: 3,
    //   label: "Status",
    //   type: "number",
    //   placeholder: "E.g: 1 or 0",
    // },
  ];  

  export const nbatchInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: C-12",
    },
    {
      fieldName: "status",
      id: 3,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

  export const classInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: X",
    },
    {
      fieldName: "total_students",
      id: 3,
      label: "Total Students",
      type: "text",
      placeholder: "E.g: 24",
    },
    {
      fieldName: "subjects_id",
      id: 4,
      label: "Subject Id",
      type: "text",
      placeholder: "E.g: 2",
    },
    {
      fieldName: "status",
      id: 5,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ]; 

  export const nclassInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: X",
    },
    {
      fieldName: "total_students",
      id: 3,
      label: "Total Students",
      type: "text",
      placeholder: "E.g: 24",
    },
    {
      fieldName: "subjects_id",
      id: 4,
      label: "Subject Id",
      type: "text",
      placeholder: "E.g: 2",
    },
    // {
    //   fieldName: "status",
    //   id: 5,
    //   label: "Status",
    //   type: "number",
    //   placeholder: "E.g: 1 or 0",
    // },
  ]; 

  export const dutyInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "user_id",
      id: 2,
      label: "User Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "job",
      id: 3,
      label: "Job",
      type: "text",
      placeholder: "E.g Invagilator",
    },
    {
      fieldName: "date",
      id: 4,
      label: "Date",
      type: "text",
      placeholder: "E.g: YYYY-MM-DD",
    },
    {
      fieldName: "duty_time",
      id: 5,
      label: "Time",
      type: "text",
      placeholder: "E.g: HH:MM",
    },
    {
      fieldName: "assigned_by",
      id: 6,
      label: "Assigned By",
      type: "text",
      placeholder: "E.g: John",
    },
    {
      fieldName: "status",
      id: 7,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];

  export const studentInputs = [
    {
      fieldName: "name",
      id: 1,
      label: "Name",
      type: "text",
      placeholder: "E.g Abbas",
    },
    {
      fieldName: "phone",
      id: 2,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g 03456667771",
    },
    {
      fieldName: "father_name",
      id: 3,
      label: "Father Name",
      type: "text",
      placeholder: "E.g Abbas",
    },
    {
      fieldName: "father_phone",
      id: 4,
      label: "Father Phone Number",
      type: "text",
      placeholder: "E.g 03456667771",
    },
    {
      fieldName: "email",
      id: 5,
      label: "Email",
      type: "text",
      placeholder: "E.g @gmail.com",
    },
    {
      fieldName: "address",
      id: 6,
      label: "Address",
      type: "text",
      placeholder: "E.g H.NO .... S.NO",
    },
    {
      fieldName: "roll_no",
      id: 7,
      label: "Roll Number",
      type: "text",
      placeholder: "E.g E15-015",
    },
    {
      fieldName: "center_id",
      id: 8,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "batch_id",
      id: 9,
      label: "Batch Id",
      type: "text",
      placeholder: "E.g 1",
    },
    {
      fieldName: "class_id",
      id: 10,
      label: "Class Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "status",
      id: 11,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];

  export const subjectInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Subject Name",
      type: "text",
      placeholder: "E.g: Subject Name",
    },
    // {
    //   fieldName: "class_id",
    //   id: 3,
    //   label: "Class",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "user_id",
      id: 4,
      label: "User",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "status",
      id: 5,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

  export const nsubjectInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Subject Name",
      type: "text",
      placeholder: "E.g: Subject Name",
    },
    // {
    //   fieldName: "class_id",
    //   id: 3,
    //   label: "Class",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "user_id",
      id: 4,
      label: "User",
      type: "text",
      placeholder: "E.g: 1",
    },
    // {
    //   fieldName: "status",
    //   id: 5,
    //   label: "Status",
    //   type: "number",
    //   placeholder: "E.g: 1 or 0",
    // },
  ];  

  export const teacherInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "user_id",
      id: 2,
      label: "User Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "subject_id",
      id: 3,
      label: "Subject Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "class_id",
      id:4,
      label: "Class Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "status",
      id: 5,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

  export const teacherInputsn = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "email",
      id: 3,
      label: "Email",
      type: "text",
      placeholder: "E.g: @gmail.com",
    },
    {
      fieldName: "phone_no",
      id: 4,
      label: "Phone Number",
      type: "text",
      placeholder: "E.g: 03-- ------",
    },
    {
      fieldName: "role_id",
      id: 5,
      label: "Role ",
      type: "select", // Change the type to "select"
      placeholder: "Select a Role", // Optional placeholder for the dropdow
    },    
    {
      fieldName: "password",
      id: 6,
      label: "Password",
      type: "text",
      placeholder: "E.g: any",
    },
    // {
    //   fieldName: "status",
    //   id: 7,
    //   label: "Status",
    //   type: "select", // Change the type to "select"
    //   placeholder: "Select a Status", // Optional placeholder for the dropdown
    //   options: [
    //     { value: "0", label: "0" }, // Add your dropdown options here
    //     { value: "1", label: "1" }, // Add more options as needed
    //   ],
    // }, 
  ];


  export const resultInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "exam_id",
      id: 2,
      label: "Exam Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "student_id",
      id: 3,
      label: "Student Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "mark",
      id:4,
      label: "Marks",
      type: "text",
      placeholder: "E.g: Enter Marks",
    },
    {
      fieldName: "status",
      id: 5,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

  export const roleInputs = [
    // {
    //   fieldName: "center_id",
    //   id: 1,
    //   label: "Center Id",
    //   type: "text",
    //   placeholder: "E.g: 1",
    // },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: C-12",
    },
    {
      fieldName: "screen",
      id: 3,
      label: "Screen",
      type: "text",
      placeholder: "E.g: ",
    },
    {
      fieldName: "status",
      id: 4,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  


  export const studentrecordInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "student_id",
      id: 2,
      label: "Student Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "description",
      id: 3,
      label: "Description",
      type: "text",
      placeholder: "E.g: description about student",
    },    {
      fieldName: "date",
      id: 4,
      label: "Date",
      type: "text",
      placeholder: "E.g: YYYY-MM-DD",
    },
    {
      fieldName: "status",
      id: 5,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];

  export const rolescreenInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "name",
      id: 2,
      label: "Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "status",
      id: 3,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

  export const examinationInputs = [
    {
      fieldName: "center_id",
      id: 1,
      label: "Center Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "name",
      id: 2,
      label: "Center Name",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "subject_id",
      id: 3,
      label: "Subject Id",
      type: "text",
      placeholder: "E.g: 1",
    },
    {
      fieldName: "type",
      id: 4,
      label: "Paper Type",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "month",
      id: 5,
      label: "Month",
      type: "text",
      placeholder: "E.g: September",
    },
    {
      fieldName: "date",
      id: 6,
      label: "Date",
      type: "text",
      placeholder: "E.g: YYYY-MM-DD",
    },
    {
      fieldName: "total_marks",
      id: 7,
      label: "Total Marks",
      type: "text",
      placeholder: "E.g: 60",
    },
    {
      fieldName: "invigilator",
      id: 8,
      label: "Invigilator",
      type: "text",
      placeholder: "E.g: Abbas",
    },
    {
      fieldName: "schedule_start_time",
      id: 9,
      label: "Scheduled Start Time",
      type: "text",
      placeholder: "E.g: HH:MM:SS",
    },
    {
      fieldName: "schedule_end_time",
      id: 10,
      label: "Scheduled End Time",
      type: "text",
      placeholder: "E.g: HH:MM:SS",
    },
    {
      fieldName: "start_time",
      id: 11,
      label: "Start Time",
      type: "text",
      placeholder: "E.g: HH:MM:SS",
    },
    {
      fieldName: "end_time",
      id: 12,
      label: "End Time",
      type: "text",
      placeholder: "E.g: HH:MM:SS",
    },
    {
      fieldName: "checking_status",
      id: 13,
      label: "Checking Status",
      type: "text",
      placeholder: "E.g: Done",
    },
    {
      fieldName: "status",
      id: 14,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];  

















  export const questionInputs = [
    {
      fieldName: "quiz_id",
      id: 1,
      label: "Quiz Id",
      type: "number",
      placeholder: "E.g: 2",
    },
    {
      fieldName: "question",
      id: 2,
      label: "Question",
      type: "text",
      placeholder: "E.g: What is the smallest unit of life?",
    },
    {
      fieldName: "option_1",
      id: 3,
      label: "Option 1",
      type: "text",
      placeholder: "E.g: Cell",
    },
    {
      fieldName: "option_2",
      id: 4,
      label: "Option 2",
      type: "text",
      placeholder: "E.g: Atom",
    },
    {
      fieldName: "option_3",
      id: 5,
      label: "Option 3",
      type: "text",
      placeholder: "E.g: Molecule",
    },
    {
      fieldName: "option_4",
      id: 6,
      label: "Option 4",
      type: "text",
      placeholder: "E.g: Tissue",
    },
    {
      fieldName: "correct_option",
      id: 7,
      label: "Correct Option",
      type: "text",
      placeholder: "E.g: Cell",
    },
    {
      fieldName: "status",
      id: 8,
      label: "Status",
      type: "number",
      placeholder: "E.g: 1 or 0",
    },
  ];
  