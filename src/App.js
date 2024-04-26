import Home from "./pages/home/Home";
import TestHome from "./pages/home/TestHome";
import Login from "./pages/login/Login";
import TestLogin from "./pages/login/TestLogin";
import Profile from "./pages/profile/Profile";
import Instruction from "./pages/instruction/Instruction";
import TestQuestion from "./pages/questions/TestQuestion";
import ReviewQuestions from "./pages/review/ReviewQuestions";

//Center CRUD
import ClassList from "./pages/list/ClassLIst";
import CoursechapterList from "./pages/list/CoursechapterList";
import UnitList from "./pages/list/UnitList";
import TeacherList from "./pages/list/TeacherList";
import SubjectList from "./pages/list/SubjectList";
import StudentList from "./pages/list/StudentList";
import LateFormList from "./pages/list/LateFormList";
import TimeTableList from "./pages/list/TimeTableList";
import TeacherAttendanceList from "./pages/list/TeacherAttendanceList";
import SAwardList from "./pages/list/SAwardList";
import LeaveFormList from "./pages/list/LeaveFormList";
import AbsentFormList from "./pages/list/AbsentFormList";
import DutyList from "./pages/list/DutyList";
import GroupList from "./pages/list/GroupList";
import CenterList from "./pages/list/CenterList";
import StudentrecordList from "./pages/list/StudentrecordList";
import AccountList from "./pages/list/AccountList";
import ExpenseList from "./pages/list/ExpenseList";
import BatchList from "./pages/list/BatchList";
import RoleList from "./pages/list/RoleList";
import List from "./pages/list/List";
import QuizList from "./pages/list/QuizList";
import UserList from "./pages/list/UserList";
import COOList from "./pages/list/COOList";
import RolescreenList from "./pages/list/RolescreenList";
import ExaminationList from "./pages/list/ExaminationList";
import QuestionList from "./pages/list/QuestionList";
import ResultList from "./pages/list/ResultList";
import User_Single from "./components/modal component/modal_component";

import Single from "./pages/single/Single";
import UserSingle from "./pages/single/UserSingle";
import COOSingle from "./pages/single/COOSingle";
import RolescreenSingle from "./pages/single/RolescreenSingle";
import ExaminationSingle from "./pages/single/ExaminationSingle";
import QuizSingle from "./pages/single/QuizSingle";
import QuestionSingle from "./pages/single/QuestionSingle";
import CenterSingle from "./pages/single/CenterSingle";
import StudentrecordSingle from "./pages/single/StudentrecordSingle";
import AccountSingle from "./pages/single/AccountSingle";
import ExpenseSingle from "./pages/single/ExpenseSingle";
import BatchSingle from "./pages/single/BatchSingle";
import RoleSingle from "./pages/single/RoleSingle";
import ClassSingle from "./pages/single/ClassSingle";
import CourseChapterSingle from "./pages/single/CoursechapterSingle";
import DutySingle from "./pages/single/DutySingle";
import GroupSingle from "./pages/single/GroupSingle";
import StudentSingle from "./pages/single/StudentSingle";
import LateFormSingle from "./pages/single/LateFormSingle";
import TimeTableSingle from "./pages/single/TimeTableSingle";
import TeacherAttendanceSingle from "./pages/single/TeacherAttendanceSingle";
import LeaveFormSingle from "./pages/single/LeaveFormSingle";
import AbsentFormSingle from "./pages/single/AbsentFormSingle"; 
import SubjectSingle from "./pages/single/SubjectSingle";
import TeacherSingle from "./pages/single/TeacherSingle";
import ResultSingle from "./pages/single/ResultSingle";

import New from "./pages/new/New";
import QuizNew from "./pages/new/QuizNew";
import QuestionNew from "./pages/new/QuestionNew";
import CenterNew from "./pages/new/CenterNew";
import StudentrecordNew from "./pages/new/StudentrecordNew";
import AccountNew from "./pages/new/AccountNew";
import ExpenseNew from "./pages/new/ExpenseNew";
import UserNew from "./pages/new/UserNew";
import COONew from "./pages/new/COONew";
import RolescreenNew from "./pages/new/RolescreenNew";
import ExaminationNew from "./pages/new/ExaminationNew";
import BatchNew from "./pages/new/BatchNew";
import RoleNew from "./pages/new/RoleNew";
import ClassNew from "./pages/new/ClassNew";
import CourseChapterNew from "./pages/new/CourseChapterNew";
import DutyNew from "./pages/new/DutyNew";
import GroupNew from "./pages/new/GroupNew";
import StudentNew from "./pages/new/StudentNew";
import LateFormNew from "./pages/new/LateFormNew";
import TimeTableNew from "./pages/new/TimeTableNew";
import TeacherAttendanceNew from "./pages/new/TeacherAttendanceNew";
import LeaveFormNew from "./pages/new/LeaveFormNew";
import AbsentFormNew from "./pages/new/AbsentFormNew";
import SubjectNew from "./pages/new/SubjectNew";
import TeacherNew from "./pages/new/TeacherNew";
import ResultNew from "./pages/new/ResultNew";

import Update from "./components/update/Update";
import QuizUpdate from "./components/update/QuizUpdate";
import QuestionUpdate from "./components/update/QuestionUpdate";
import CenterUpdate from "./components/update/CenterUpdate";
import StudentrecordUpdate from "./components/update/StudentrecordUpdate";
import AccountUpdate from "./components/update/AccountUpdate";
import ExpenseUpdate from "./components/update/ExpenseUpdate";
import UserUpdate from "./components/update/UserUpdates";
import COOUpdate from "./components/update/COOUpdate";
import RolescreenUpdate from "./components/update/RolescreenUpdate";
import ExaminationUpdate from "./components/update/ExaminationUpdate";
import BatchUpdate from "./components/update/BatchUpdate";
import RoleUpdate from "./components/update/RoleUpdate";
import ClassUpdate from "./components/update/ClassUpdate";
import CourseChapterUpdate from "./components/update/CourseChapterUpdate";
import DutyUpdate from "./components/update/DutyUpdate";
import GroupUpdate from "./components/update/GroupUpdate";
import StudentUpdate from "./components/update/StudentUpdate";
import LateFormUpdate from "./components/update/LateFormUpdate";
import TimeTableUpdate from "./components/update/TimeTableUpdate";
import TeacherAttendanceUpdate from "./components/update/TeacherAttendanceUpdate";
import LeaveFormUpdate from "./components/update/LeaveFormUpdate";
import AbsentFormUpdate from "./components/update/AbsentFormUpdate";
import SubjectUpdate from "./components/update/SubjectUpdate";
import TeacherUpdate from "./components/update/TeacherUpdate";
import ResultUpdate from "./components/update/ResultUpdate";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { expenseInputs, quizInputs, studentInputs, lateformInputs, timetableInputs, teacher_attendanceInputs, leaveformInputs, absentformInputs, resultInputs, roleInputs, teacherInputs, subjectInputs, nsubjectInputs,examinationInputs, rolescreenInputs, cooInputsn, cooInputs, userInputs, questionInputs, studentrecordInputs, centerInputs, accountInputs, batchInputs, nclassInputs, cchapterInputs, classInputs, dutyInputs, groupInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            
            <Route index element={<Login />} />
            <Route path="quizLogin" element={<TestLogin />} />
            <Route path="home" element={<Home />} />

          

            <Route path="quizHome">  
              <Route index element={<TestHome />} />
              <Route path="instruction" element={<Instruction />} />
              <Route path="quizQuestion" element={<TestQuestion />} />
              <Route path="reviewQuestion" element={<ReviewQuestions />} />
            </Route>
            

            <Route path="center">
              <Route index element={<CenterList />} />
              <Route path=":centerId" element={<CenterSingle />} />
              <Route path="upd_center/:centerId" element={<CenterUpdate inputs={centerInputs} title="Update Center" />} />
              <Route
                path="new"
                element={<CenterNew inputs={centerInputs} title="Add New Center" />}
              />
            </Route>

            <Route path="account">
              <Route index element={<AccountList />} />
              <Route path=":accountId" element={<AccountSingle />} />
              <Route path="upd_account/:accountId" element={<AccountUpdate inputs={accountInputs} title="Update Account" />} />
              <Route
                path="new"
                element={<AccountNew inputs={accountInputs} title="Add New Account" />}
              />
            </Route>

            <Route path="expense">
              <Route index element={<ExpenseList />} />
              <Route path=":expenseId" element={<ExpenseSingle />} />
              <Route path="upd_expense/:expenseId" element={<ExpenseUpdate inputs={expenseInputs} title="Update Expense" />} />
              <Route
                path="new"
                element={<ExpenseNew inputs={expenseInputs} title="Add New Expense" />}
              />
            </Route>

            <Route path="user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserSingle />} />
              <Route path="upd_user/:userId" element={<UserUpdate inputs={userInputs} title="Update user" />} />
              <Route
                path="new"
                element={<UserNew inputs={userInputs} title="Add New user" />}
              />
            </Route>

            <Route path="coo">
              <Route index element={<COOList />} />
              <Route path=":cooId" element={<COOSingle />} />
              <Route path="upd_coo/:cooId" element={<COOUpdate inputs={cooInputs} title="Update COO" />} />
              <Route
                path="new"
                element={<COONew inputs={cooInputsn} title="Add New COO" />}
              />
            </Route>

            <Route path="batch">
              <Route index element={<BatchList />} />
              <Route path=":batchId" element={<BatchSingle />} />
              <Route path="upd_batch/:batchId" element={<BatchUpdate inputs={batchInputs} title="Update batch" />} />
              <Route
                path="new"
                element={<BatchNew inputs={batchInputs} title="Add New batch" />}
              />
            </Route>

            <Route path="class">
              <Route index element={<ClassList />} />
              <Route path=":classId" element={<ClassSingle />} />
              <Route path="upd_class/:classId" element={<ClassUpdate inputs={classInputs} title="Update Class" />} />
              <Route
                path="new"
                element={<ClassNew inputs={nclassInputs} title="Add New Class" />}
              />
            </Route>

            <Route path="duty">
              <Route index element={<DutyList />} />
              <Route path=":dutyId" element={<DutySingle />} />
              <Route path="upd_duty/:dutyId" element={<DutyUpdate inputs={dutyInputs} title="Update Duty" />} />
              <Route
                path="new"
                element={<DutyNew inputs={dutyInputs} title="Add New Duty" />}
              />
            </Route>
            <Route path="group">
              <Route index element={<GroupList />} />
              <Route path=":groupId" element={<GroupSingle />} />
              <Route path="upd_group/:groupId" element={<GroupUpdate inputs={groupInputs} title="Update Group" />} />
              <Route
                path="new"
                element={<GroupNew inputs={groupInputs} title="Add New Group" />}
              />
            </Route>

            <Route path="account">
              <Route index element={<AccountList />} />
              <Route path=":accountId" element={<AccountSingle />} />
              <Route path="upd_account/:accountId" element={<AccountUpdate inputs={accountInputs} title="Update Account" />} />
              <Route
                path="new"
                element={<AccountNew inputs={accountInputs} title="Add New Account" />}
              />
            </Route>

            <Route path="timetable">
                <Route index element={<TimeTableList />} />
                <Route path=":timetabletId" element={<TimeTableSingle />} />
                <Route path="upd_timetable/:timetableId" element={<TimeTableUpdate inputs={timetableInputs} title="Update Slot" />} />
                <Route
                  path="new"
                  element={<TimeTableNew inputs={timetableInputs} title="Add New Slot" />}
                />
              </Route>

              <Route path="teacher_attendance">
                <Route index element={<TeacherAttendanceList />} />
                <Route path=":teacher_attendanceId" element={<TeacherAttendanceSingle />} />
                <Route path="upd_teacher_attendance/:teacher_attendanceId" element={<TeacherAttendanceUpdate inputs={teacher_attendanceInputs} title="Update Slot" />} />
                <Route
                  path="new/:teacher_attendanceId"
                  element={<TeacherAttendanceNew inputs={teacher_attendanceInputs} title="Add Teacher Attendance" />}
                />
              </Route>

              <Route path="awardlist">
                <Route index element={<SAwardList />} />
                <Route path="by_id" element={<User_Single />} />
                <Route path=":teacher_attendanceId" element={<TeacherAttendanceSingle />} />
                <Route path="upd_teacher_attendance/:teacher_attendanceId" element={<TeacherAttendanceUpdate inputs={teacher_attendanceInputs} title="Update Slot" />} />
                <Route
                  path="new/:teacher_attendanceId"
                  element={<TeacherAttendanceNew inputs={teacher_attendanceInputs} title="Add Teacher Attendance" />}
                />
              </Route>

            <Route path="student">
              <Route index element={<StudentList />} />
              <Route path=":studentId" element={<StudentSingle />} />
              <Route path="lform">
                <Route index element={<LateFormList />} />
                <Route path=":lformtId" element={<LateFormSingle />} />
                <Route path="upd_lform/:lformId" element={<LateFormUpdate inputs={lateformInputs} title="Update Late Form" />} />
                <Route
                  path="new"
                  element={<LateFormNew inputs={lateformInputs} title="Add New Late Form" />}
                />
              </Route>
              <Route path="leaveform">
                <Route index element={<LeaveFormList />} />
                <Route path=":leaveformtId" element={<LeaveFormSingle />} />
                <Route path="upd_leaveform/:leaveformId" element={<LeaveFormUpdate inputs={leaveformInputs} title="Update Leave Form" />} />
                <Route
                  path="new"
                  element={<LeaveFormNew inputs={leaveformInputs} title="Add New Leave" />}
                />
              </Route>
              <Route path="absentform">
                <Route index element={<AbsentFormList />} />
                <Route path=":absentformId" element={<AbsentFormSingle />} />
                <Route path="upd_absentform/:absentformId" element={<AbsentFormUpdate inputs={absentformInputs} title="Update Leave Form" />} />
                <Route
                  path="new"
                  element={<AbsentFormNew inputs={absentformInputs} title="Add New Absent Form" />}
                />
              </Route>
              <Route path="upd_student/:studentId" element={<StudentUpdate inputs={studentInputs} title="Update Student" />} />
              <Route
                path="new"
                element={<StudentNew inputs={studentInputs} title="Add New Student" />}
              />
            </Route>

            <Route path="subject">
              <Route index element={<SubjectList />} />
              <Route path=":studentId" element={<SubjectSingle />} />
              <Route path="upd_subject/:subjectId" element={<SubjectUpdate inputs={subjectInputs} title="Update Subject" />} />
              <Route
                path="new"
                element={<SubjectNew inputs={nsubjectInputs} title="Add New Subject" />}
              />
              <Route path="cchapter">
              <Route index element={<CoursechapterList />} />
              <Route path=":cchapterId" element={<CourseChapterSingle />} />
              <Route path="upd_cchapter/:cchapterId" element={<CourseChapterUpdate inputs={cchapterInputs} title="Update Chapter" />} />
              <Route
                path="new"
                element={<CourseChapterNew inputs={cchapterInputs} title="Add New Chapter" />}
              />
              <Route path="unit">
              <Route index element={<UnitList />} />
              <Route path=":unitId" element={<CourseChapterSingle />} />
              <Route path="upd_unit/:unitId" element={<CourseChapterUpdate inputs={cchapterInputs} title="Update Unit" />} />
              <Route
                path="new"
                element={<CourseChapterNew inputs={cchapterInputs} title="Add New Unit" />}
              />
            </Route>
            </Route>
            </Route>

            <Route path="teacher">
              <Route index element={<TeacherList />} />
              <Route path=":teacherId" element={<TeacherSingle />} />
              <Route path="upd_teacher/:teacherId" element={<TeacherUpdate inputs={teacherInputs} title="Update Teacher" />} />
              <Route
                path="new"
                element={<TeacherNew inputs={teacherInputs} title="Add New Teacher" />}
              />
            </Route>

            <Route path="result">
              <Route index element={<ResultList />} />
              <Route path=":resultId" element={<ResultSingle />} />
              <Route path="upd_result/:resultId" element={<ResultUpdate inputs={resultInputs} title="Update Subject Result" />} />
              <Route
                path="new"
                element={<ResultNew inputs={resultInputs} title="Add New Subject Result" />}
              />
            </Route>

            <Route path="role">
              <Route index element={<RoleList />} />
              <Route path=":roleId" element={<RoleSingle />} />
              <Route path="upd_role/:roleId" element={< RoleUpdate inputs={roleInputs} title="Update User Role" />} />
              <Route
                path="new"
                element={<RoleNew inputs={roleInputs} title="Add New Role" />}
              />
            </Route>

            <Route path="srecord">
              <Route index element={<StudentrecordList />} />
              <Route path=":srecordId" element={<StudentrecordSingle />} />
              <Route path="upd_srecord/:srecordId" element={<StudentrecordUpdate inputs={studentrecordInputs} title="Update Student Record" />} />
              <Route
                path="new"
                element={<StudentrecordNew inputs={studentrecordInputs} title="Add New Student Record" />}
              />
            </Route>

            <Route path="rscreen">
              <Route index element={<RolescreenList />} />
              <Route path=":rscreenId" element={<RolescreenSingle />} />
              <Route path="upd_rscreen/:rscreenId" element={<RolescreenUpdate inputs={rolescreenInputs} title="Update Role Screen" />} />
              <Route
                path="new"
                element={<RolescreenNew inputs={rolescreenInputs} title="Add New Role Screen" />}
              />
            </Route>

            <Route path="examination">
              <Route index element={<ExaminationList />} />
              <Route path=":examinationId" element={<ExaminationSingle />} />
              <Route path="upd_examination/:examinationId" element={<ExaminationUpdate inputs={examinationInputs} title="Update Exam" />} />
              <Route
                path="new"
                element={<ExaminationNew inputs={examinationInputs} title="Add New Exam" />}
              />
            </Route>


            {/* <Route path="user">
              <Route index element={<UserList />} />
              <Route path=":userId" element={<UserSingle />} />
            </Route> */}

            {/* <Route path="center">
              <Route index element={<List />} />
              <Route path=":examinationId" element={<Single />} />
              <Route path="update/:examinationId" element={<Update inputs={categoryInputs} title="Update Exam" />}/>
              <Route
                path="new"
                element={<New inputs={categoryInputs} title="Add New Category" />}
              />
            </Route> */}
            
            <Route path="quiz">
              <Route index element={<QuizList />} />
              <Route path=":quizId" element={<QuizSingle />} />
              <Route path="update/:quizId" element={<QuizUpdate inputs={quizInputs} title="Update Quiz" />} />
              <Route
                path="new"
                element={<QuizNew inputs={quizInputs} title="Add New Quiz" />}
              />
            </Route>
            
            <Route path="question">
              <Route index element={<QuestionList />} />
              <Route path=":questionId" element={<QuestionSingle />} />
              <Route path="update/:questionId" element={<QuestionUpdate inputs={questionInputs} title="Update Question" />} />
              <Route
                path="new"
                element={<QuestionNew inputs={quizInputs} title="Add New Question" />}
              />
            </Route>

            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;