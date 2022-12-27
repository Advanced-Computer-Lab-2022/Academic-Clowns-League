import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import InstructorHome from "./pages/instructorHome";
import InstructorAllCourses from "./pages/instructorAllCourses";
import InstructorFilterAllCourses from "./pages/instructorFilterAllCourses";
import InstructorFilterMyCourses from "./pages/instructorFilterMyCourses";
import InstructorCourse from "./pages/instructorCourse";
import InstructorRatingsAndReviews from "./pages/instructorRatingsAndReviews";
import InstructorProblems from "./pages/instructorProblems";
import InstructorReportProblem from "./pages/instructorReportProblem";
import CourseRatingsAndReviews from "./pages/courseRatingsAndReviews";
import ViewAndEditInfo from "./pages/viewAndEditInfo";
import CreateCourse from "./pages/createCourse";
import AddSubtitle from "./pages/addSubtitle";
import AddExercise from "./pages/addExercise";
import AddPromotion from "./pages/addPromotion";
import ChangePassword from "./pages/changePassword";
//i think not used
import InstructorViewAndEditBio from "./pages/instructorViewAndEditBio";
import EditEmail from "./pages/editEmail";

import IndividualTraineeHome from "./pages/individualTraineeHome";
import ITraineeAllCourses from "./pages/iTraineeAllCourses";
import ITraineeFilterAllCourses from "./pages/iTraineeFilterAllCourses";
import ITraineeCourse from "./pages/iTraineeCourse";
import ITraineeProblems from "./pages/iTraineeProblems";
import ITraineeReportProblem from "./pages/iTraineeReportProblem";
import ITraineeProfile from "./pages/iTraineeProfile";
import ITraineeChangePassword from "./pages/iTraineeChangePassword";
import CheckoutPage from "./pages/checkoutPage";
import PaymentCompletion from "./pages/paymentCompletion";

import CorporateTraineeHome from "./pages/corporateTraineeHome";
import CTraineeAllCourses from "./pages/cTraineeAllCourses";
import CTraineeFilterAllCourses from "./pages/cTraineeFilterAllCourses";
import CTraineeCourse from "./pages/cTraineeCourse";
import CTraineeProblems from "./pages/cTraineeProblems";
import CTraineeReportProblem from "./pages/cTraineeReportProblem";
import CTraineeProfile from "./pages/cTraineeProfile";
import CTraineeChangePassword from "./pages/cTraineeChangePassword";

import AdminAddUsers from "./pages/adminAddUsers";
import AdminProblems from "./pages/adminProblems";
import AdminCourseAccessRequests from "./pages/adminCourseAccessRequests";
import AdminRefundRequests from "./pages/adminRefundRequests";
import AdminPromotions from "./pages/adminPromotions";

import GuestHome from "./pages/guestHome";
import GuestFilterAllCourses from "./pages/guestFilterAllCourses";
import ForgotPassword from "./pages/forgotPassword";
import ResetPassword from "./pages/resetPassword";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Testing from "./pages/testing";


import AccessDenied from "./pages/accessDenied";
import CurrencyContextProvider from "./contexts/CurrencyContext";
import Cookies from 'js-cookie';








//BrowserRouter wraps all things involved with routes, Routes wraps the routes, Route is a single route
function App() {
  let role = Cookies.get('role');
  console.log(role);








  return (
    <div className="App">
      <BrowserRouter>
        <CurrencyContextProvider>
          <div className="pages">
            <Routes>

              <Route path="/" element={<GuestHome />} />
              <Route path="/guestFilterAllCourses" element={<GuestFilterAllCourses />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/resetPassword" element={<ResetPassword />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/testing" element={<Testing />} />

              {role === 'Instructor' ?
                (
                  <Route>
                    <Route path="/instructorHome" element={<InstructorHome />} />
                    <Route path="/instructorAllCourses" element={<InstructorAllCourses />} />
                    <Route path="/instructorFilterAllCourses" element={<InstructorFilterAllCourses />} />
                    <Route path="/instructorFilterMyCourses" element={<InstructorFilterMyCourses />} />
                    <Route path="/instructorCourse" element={<InstructorCourse />} />
                    <Route path="/instructorRatingsAndReviews" element={<InstructorRatingsAndReviews />} />
                    <Route path="/instructorProblems" element={<InstructorProblems />} />
                    <Route path="/instructorReportProblem" element={<InstructorReportProblem />} />
                    <Route path="/courseRatingsAndReviews" element={<CourseRatingsAndReviews />} />
                    <Route path="/viewAndEditInfo" element={<ViewAndEditInfo />} />
                    <Route path="/createCourse" element={<CreateCourse />} />
                    <Route path="/addSubtitle" element={<AddSubtitle />} />
                    <Route path="/addExercise" element={<AddExercise />} />
                    <Route path="/addPromotion" element={<AddPromotion />} />
                    <Route path="/changePassword" element={<ChangePassword />} />
                    <Route path="/instructorViewAndEditBio" element={<InstructorViewAndEditBio />} />
                    <Route path="/editEmail" element={<EditEmail />} />
                  </Route>
                )
                :
                (<Route path="/login" element={<Login />} />)
              }

              {role === 'iTrainee' ?
                (
                  <Route>
                    <Route path="/individualTraineeHome" element={<IndividualTraineeHome />} />
                    <Route path="/iTraineeAllCourses" element={<ITraineeAllCourses />} />
                    <Route path="/iTraineeFilterAllCourses" element={<ITraineeFilterAllCourses />} />
                    <Route path="/iTraineeCourse" element={<ITraineeCourse />} />
                    <Route path="/iTraineeProblems" element={<ITraineeProblems />} />
                    <Route path="/iTraineeReportProblem" element={<ITraineeReportProblem />} />
                    <Route path="/iTraineeProfile" element={<ITraineeProfile />} />
                    <Route path="/iTraineeChangePassword" element={<ITraineeChangePassword />} />
                    <Route path="/checkoutPage" element={<CheckoutPage />} />
                    <Route path="/paymentCompletion" element={<PaymentCompletion />} />

                  </Route>
                )
                :
                (<Route path="/login" element={<Login />} />)
              }


              {role === 'cTrainee' ?
                (
                  <Route>

                    <Route path="/corporateTraineeHome" element={<CorporateTraineeHome />} />
                    <Route path="/cTraineeAllCourses" element={<CTraineeAllCourses />} />
                    <Route path="/cTraineeFilterAllCourses" element={<CTraineeFilterAllCourses />} />
                    <Route path="/cTraineeCourse" element={<CTraineeCourse />} />
                    <Route path="/cTraineeProblems" element={<CTraineeProblems />} />
                    <Route path="/cTraineeReportProblem" element={<CTraineeReportProblem />} />
                    <Route path="/cTraineeProfile" element={<CTraineeProfile />} />
                    <Route path="/cTraineeChangePassword" element={<CTraineeChangePassword />} />

                  </Route>
                )
                :
                (<Route path="/login" element={<Login />} />)
              }


              {role === 'Admin' ?
                (
                  <Route>
                    <Route path="/adminAddUsers" element={<AdminAddUsers />} />
                    <Route path="/adminProblems" element={<AdminProblems />} />
                    <Route path="/adminCourseAccessRequests" element={<AdminCourseAccessRequests />} />
                    <Route path="/adminRefundRequests" element={<AdminRefundRequests />} />
                    <Route path="/adminPromotions" element={<AdminPromotions />} />

                  </Route>
                )
                :
                (<Route path="/login" element={<Login />} />)
              }

              <Route path="*" element={<AccessDenied/>} />


            </Routes>
          </div>
        </CurrencyContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
