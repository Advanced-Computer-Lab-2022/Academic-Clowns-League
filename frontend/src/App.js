import {BrowserRouter , Routes, Route} from 'react-router-dom'
//BrowserRouter surrounds everything that ever needs to use the routing system
//Routes wraps all of our individual routes
//Route -> to create a single route


//all our pages will go here so I can style this div later on
//adding an individual route, needs 2 props: path and element



//pages & components
import Home from './pages/home'
import SearchAllCourses from './pages/searchAllCourses'
import Navbar from './components/navbar';
//we wanna put the Navbar outside (above) all pages but still inside the router, to be able to use the link component


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />




        <div className='pages'> 
            <Routes>
              <Route 
                path="/"
                element={ <Home /> } //the component we want to render for this route

              />
              <Route 
                path="/searchAllCourses"
                element={ <SearchAllCourses /> } //the component we want to render for this route

              />

            </Routes>
      
         </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
