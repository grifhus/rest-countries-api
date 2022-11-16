import { IoMoonOutline } from "react-icons/io5"

const Header = (props) =>{
  const {toggleDarkMode} = props;

  return (
      <header>
          <nav className="navbar">
          
              <div className="logo"><h2>Where in the world?</h2></div>
              <div className="luna">
              <IoMoonOutline/>
              <div className="dark-mode-container">
             
                  
                  <button onClick={toggleDarkMode} type="button" id="dark-mode-btn">


                  
                  <p>Dark Mode</p></button>
                  </div>
              </div>
          </nav>
      </header>
  )
}

export default Header;