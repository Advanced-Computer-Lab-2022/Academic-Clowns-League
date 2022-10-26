import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Courses from './pages/Courses'
import Instructor from './pages/Instructor'
import Navbar from './components/Navbar'
//import Filter from './components/Filter';

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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
