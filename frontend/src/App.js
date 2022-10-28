import { BrowserRouter, Routes, Route } from "react-router-dom"; //BrowserRouter: surrounds everything that needs to use the routing systemimport Navbar from "./components/Navbar";
//pages and componenets

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
/*import Home2 from "./pages/Home2";*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            /*route path of home2*/
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
