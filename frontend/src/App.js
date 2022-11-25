import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import InstructorHome from "./pages/instructorHome";
import SearchInstrCourses from "./pages/searchInstrCourses";
import FilterAllCourses from "./pages/filterAllCourses";
import FilterMyCourses from "./pages/filterInstCourses";
import InstructorCourse from "./pages/instructorCourse";

import IndividualTraineeHome from "./pages/individualTraineeHome";
import ITraineeAllCourses from "./pages/iTraineeAllCourses";
import ITraineeFilterAllCourses from "./pages/iTraineeFilterAllCourses";
import TraineeCourse from "./pages/traineeCourse";

import CorporateTraineeHome from "./pages/corporateTraineeHome";
import CTraineeAllCourses from "./pages/cTraineeAllCourses";
import FilterCorpCourses from "./pages/filterCorpCourses";
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
            <Route path="/searchInstrCourses" element={<SearchInstrCourses />} />
            <Route path="/filterAllCourses" element={<FilterAllCourses />} />
            <Route path="/filterInstCourses" element={<FilterMyCourses />} />
            <Route path="/instructorCourse" element={<InstructorCourse />} />

            <Route path="/individualTraineeHome" element={<IndividualTraineeHome />} />
            <Route path="/iTraineeAllCourses" element={<ITraineeAllCourses />} />
            <Route path="/iTraineeFilterAllCourses" element={<ITraineeFilterAllCourses />} />
            <Route path="/traineeCourse" element={<TraineeCourse />} />
            {/* test by typing   http://localhost:3000/traineeCourse?id=637d0729cee474fa712b4010 in the url */}

            <Route path="/corporateTraineeHome" element={<CorporateTraineeHome />}  />
            <Route path="/cTraineeAllCourses" element={<CTraineeAllCourses />}  />
            <Route path="/filterCorpCourses" element={<FilterCorpCourses />} />
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
