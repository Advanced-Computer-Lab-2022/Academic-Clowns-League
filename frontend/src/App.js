import { BrowserRouter, Routes, Route } from "react-router-dom";
//BrowserRouter surrounds everything that ever needs to use the routing system
//Routes wraps all of our individual routes
//Route -> to create a single route

//all our pages will go here so I can style this div later on
//adding an individual route, needs 2 props: path and element

//pages & components
import Home from "./pages/home";
import SearchAllCourses from "./pages/searchAllCourses";
//we wanna put the Navbar outside (above) all pages but still inside the router, to be able to use the link component

import Courses from "./pages/courses";
import Instructor from "./pages/instructor";
import Navbar from "./components/navbar";
import InstructorCourses from "./pages/instructorCourses";
import Guest from "./pages/guest";
import IndividualTrainee from "./pages/individualTrainee";
import CorporateTrainee from "./pages/corporateTrainee";
import CorpCourses from "./pages/corpCourses";

//BrowserRouter wraps all things involved with routes
//Routes wraps the routes
//Route is a single route

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />} //the component we want to render for this route
            />
            <Route
              path="/searchAllCourses"
              element={<SearchAllCourses />} //the component we want to render for this route
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructor" element={<Instructor />} />
            <Route path="/mycourses" element={<InstructorCourses />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/itrainee" element={<IndividualTrainee />} />
            <Route path="/ctrainee" element={<CorporateTrainee />} />
            <Route path="/ctraineecourses" element={<CorpCourses />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
