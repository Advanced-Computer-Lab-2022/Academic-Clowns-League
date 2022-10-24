import { Link } from 'react-router-dom'
//to do a link u have to import a link component from the react router dom package


const Navbar = () => { //Navbar is the component (it's a function)

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Online Learning Platform</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar