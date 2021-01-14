import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="booking" className="fixed">
          <div className="booking">
            <div className="dropdown">
              <p>Destination</p>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Destination
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="https://bunkbread.com/">
                  A
                </a>
                <a className="dropdown-item" href="https://bunkbread.com/">
                  B
                </a>
                <a className="dropdown-item" href="https://bunkbread.com/">
                  C
                </a>
              </div>
            </div>

            <div className="form-group">
              <label className="col-form-label">From</label>
              <input
                className="form-control"
                type="date"
                defaultValue="2011-08-19"
                id="example-date-input"
              />
            </div>

            <div className="form-group">
              <label className="col-form-label">To</label>
              <input
                className="form-control"
                type="date"
                defaultValue="2011-08-19"
                id="example-date-input"
              />
            </div>

            <div className="Avail-btn">
              <button type="button" className="btn btn-primary">
                Check
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Navbar;
