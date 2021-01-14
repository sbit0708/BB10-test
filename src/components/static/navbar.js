import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  render() {
    return (
      <React.Fragment>
        <section id="navbar">
          <div className="navbar">
            <a href="https://bunkbread.com/" className="logo d-flex">
              <img src="logo.png" alt="logo" />
              <p>BunkBread</p>
            </a>
            <ul className="nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="https://bunkbread.com/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  MORE
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="https://bunkbread.com/">
                    HOME
                  </a>
                  <a className="dropdown-item" href="https://bunkbread.com/">
                    ABOUT
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="https://bunkbread.com/">
                    FRANCHISE
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://bunkbread.com/">
                  SIGNUP
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="https://bunkbread.com/">
                  LOGIN
                </a>
              </li>
            </ul>

            <div
              className="hamburger"
              onClick={() => this.setState({ clicked: !this.state.clicked })}
            >
              <p
                className={`ham ${
                  this.state.clicked ? "display-none" : "display-block"
                }`}
              >
                &#9776;
              </p>
              <p
                className={`close ${
                  this.state.clicked ? "display-block" : "display-none"
                }`}
              >
                &#10006;
              </p>
            </div>

            <div className={`sidebar ${this.state.clicked ? "active" : ""}`}>
              <ul>
                <li className="sidebar-hello">HELLO SIGN IN</li>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>FRANCHISE</li>
              </ul>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Navbar;
