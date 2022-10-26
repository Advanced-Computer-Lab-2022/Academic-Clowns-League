import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Courses from './pages/Courses'
import Instructor from './pages/Instructor'
import Navbar from './components/Navbar'
import InstructorCourses from './pages/InstructorCourses'
import Guest from './pages/Guest'
import IndividualTrainee from './pages/IndividualTrainee'
import CorporateTrainee from './pages/CorporateTrainee'

//BrowserRouter wraps all things involved with routes
//Routes wraps the routes
//Route is a single route

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path = "/courses"
              element = {<Courses/>}
            />
            <Route
              path = '/instructor'
              element = {<Instructor/>}
            />
            <Route
              path = '/mycourses'
              element = {<InstructorCourses/>}
            />
            <Route
              path = '/guest'
              element = {<Guest/>}
            />
            <Route
              path = '/itrainee'
              element = {<IndividualTrainee/>}
            />
            <Route
              path = '/ctrainee'
              element = {<CorporateTrainee/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
