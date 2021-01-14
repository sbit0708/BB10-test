import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section id="detail">
          <div className="detail">
            <div className="detail-img">
              <img src="./Mixed dorm 6.jpg" alt=".." />
            </div>
            <div className="description">
              <h3>Heading</h3>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>

              <div className="utils">
                <a href="https://bunkbread.com/">Likes</a>
                <a href="https://bunkbread.com/">Review</a>
                <a href="https://bunkbread.com/">Location</a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Navbar;
