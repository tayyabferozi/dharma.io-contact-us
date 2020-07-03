import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Blog from "./components/Blog/Blog";
// import BlogBoxes from "./components/BlogBoxes/BlogBoxes";
import Contact from "./components/Contact/Contact";
// import SideDrawer from "./components/UI/SideDrawer/SideDrawer";
import Footer from "./components/Footer/Footer";
// import Subscribe from "./components/Subscribe/Subscribe";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <SideDrawer /> */}
        <div className="TextCenter">
          <Navbar />
          <Contact />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
