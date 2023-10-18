import logo from '../images/logo.svg'

const Header = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light header-container">
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#">Features </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Resources</a>
                  </li>
              </ul>
              <hr />
              <ul className="navbar-nav">

                  <li className="nav-item">
                      <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                      <button className="header-btn" type="submit">Sign Up</button>
                  </li>
              </ul>

          </div>
      </nav>
  </>
    )
}
export default Header;