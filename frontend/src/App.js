import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import InstructorHome from "./pages/instructorHome";
import InstructorAllCourses from "./pages/instructorAllCourses";
import InstructorFilterAllCourses from "./pages/instructorFilterAllCourses";
import InstructorFilterMyCourses from "./pages/instructorFilterMyCourses";
import InstructorCourse from "./pages/instructorCourse";
import InstructorRatingsAndReviews from "./pages/instructorRatingsAndReviews";

import CourseRatingsAndReviews from "./pages/courseRatingsAndReviews";


import IndividualTraineeHome from "./pages/individualTraineeHome";
import ITraineeAllCourses from "./pages/iTraineeAllCourses";
import ITraineeFilterAllCourses from "./pages/iTraineeFilterAllCourses";
import ITraineeCourse from "./pages/iTraineeCourse";

import CorporateTraineeHome from "./pages/corporateTraineeHome";
import CTraineeAllCourses from "./pages/cTraineeAllCourses";
import CTraineeFilterAllCourses from "./pages/cTraineeFilterAllCourses";
import CTraineeCourse from "./pages/cTraineeCourse";

import GuestHome from "./pages/guestHome";
import GuestFilterAllCourses from "./pages/guestFilterAllCourses";


import AdminHome from "./pages/adminHome";
import Testing from "./pages/testing";

//BrowserRouter wraps all things involved with routes, Routes wraps the routes, Route is a single route
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>

            <Route path="/instructorHome" element={<InstructorHome />} />
            <Route path="/instructorAllCourses" element={<InstructorAllCourses />} />
            <Route path="/instructorFilterAllCourses" element={<InstructorFilterAllCourses />} />
            <Route path="/instructorFilterMyCourses" element={<InstructorFilterMyCourses />} />
            <Route path="/instructorCourse" element={<InstructorCourse />} />
            <Route path="/instructorRatingsAndReviews" element={<InstructorRatingsAndReviews />} />

            <Route path="/courseRatingsAndReviews" element={<CourseRatingsAndReviews />} />

            <Route path="/individualTraineeHome" element={<IndividualTraineeHome />} />
            <Route path="/iTraineeAllCourses" element={<ITraineeAllCourses />} />
            <Route path="/iTraineeFilterAllCourses" element={<ITraineeFilterAllCourses />} />
            <Route path="/iTraineeCourse" element={<ITraineeCourse />} />
            {/* test by typing   http://localhost:3000/traineeCourse?id=637d0729cee474fa712b4010 in the url */}

            <Route path="/corporateTraineeHome" element={<CorporateTraineeHome />}  />
            <Route path="/cTraineeAllCourses" element={<CTraineeAllCourses />}  />
            <Route path="/cTraineeFilterAllCourses" element={<CTraineeFilterAllCourses />} />
            <Route path="/cTraineeCourse" element={<CTraineeCourse />} />

            <Route path="/guestHome" element={<GuestHome />} />
            <Route path="/guestFilterAllCourses" element={<GuestFilterAllCourses />} />


            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/testing" element={<Testing />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
