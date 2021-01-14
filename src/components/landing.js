import React from "react";
import Navbar from "./static/navbar";
import Booking from "./static/booking";
import Detail from "./static/detail";
import Footer from "./static/footer";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Booking />
        <Detail />
        <Footer />
      </div>
    );
  }
}

export default Landing;
