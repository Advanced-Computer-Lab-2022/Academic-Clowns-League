import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//BrowserRouter surrounds everything that ever needs to use the routing system
//Routes wraps all of our individual routes
//Route -> to create a single route

//all our pages will go here so I can style this div later on
//adding an individual route, needs 2 props: path and element

//pages & components
import InstructorHome from "./pages/instructorHome";
import AdminHome from "./pages/adminHome";
import GuestHome from "./pages/guestHome";
import IndividualTraineeHome from "./pages/individualTraineeHome";
//we wanna put the Navbar outside (above) all pages but still inside the router, to be able to use the link component

import FilterAllCourses from "./pages/filterAllCourses";
import FilterMyCourses from "./pages/filterInstCourses";

import Navbar from "./components/navbar";
import InstructorCourses from "./pages/filterInstCourses";
import CorporateTraineeHome from "./pages/corporateTraineeHome";
import FilterCorpCourses from "./pages/filterCorpCourses";
import SearchInstrCourses from "./pages/searchInstrCourses";
//import CourseDetails from './components/courseDetails';
import TraineeCourse from "./pages/traineeCourse";

//BrowserRouter wraps all things involved with routes
//Routes wraps the routes
//Route is a single route

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/instructorHome" element={<InstructorHome />} />
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/guestHome" element={<GuestHome />} />
            <Route
              path="/individualTraineeHome"
              element={<IndividualTraineeHome />}
            />
            <Route
              path="/corporateTraineeHome"
              element={<CorporateTraineeHome />}
            />

            <Route
              path="/searchInstrCourses"
              element={<SearchInstrCourses />}
            />
            <Route path="/filterAllCourses" element={<FilterAllCourses />} />
            <Route path="/filterInstCourses" element={<FilterMyCourses />} />
            <Route path="/mycourses" element={<InstructorCourses />} />
            <Route path="/filterCorpCourses" element={<FilterCorpCourses />} />

            <Route path="/traineeCourse" element={<TraineeCourse />} />

            {/*<Route path="/courses/:id" element={<TraineeCourse />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
