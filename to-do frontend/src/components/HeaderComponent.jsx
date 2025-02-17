import { NavLink } from "react-router-dom"

const HeaderComponent = () => {
  return (
    <div>
        
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <a href="https://www.linkedin.com/in/udaya-krishnan-m/" className="navbar-brand">To Do List</a>
                <div className="collapse navbar-collapse" id='navbarNav'>

                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className='nav-link' to='/todos'>To Do</NavLink>
                    </li>

                  </ul>
                </div>

            </nav>
        </header>


    </div>
  )
}

export default HeaderComponent