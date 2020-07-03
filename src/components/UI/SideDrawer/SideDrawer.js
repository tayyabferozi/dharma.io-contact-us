import React, { Fragment } from "react";

import "./SideDrawer.css";

const SideDrawer = () => {
  const SideDrawerCloseHandler = () => {
    const body = document.getElementsByTagName("body")[0];
    console.log(body);
    const sideDrawer = document.getElementById("SideDrawer");
    const sideDrawerWrapper = document.getElementById("SideDrawerWrapper");
    sideDrawer.classList.remove("Active");
    sideDrawerWrapper.classList.remove("Active");
    body.classList.remove("Inactive");
  };
  return (
    <Fragment>
      <div
        className="SideDrawerWrapper"
        id="SideDrawerWrapper"
        onClick={SideDrawerCloseHandler}
      ></div>
      <div className="SideDrawer" id="SideDrawer">
        <div className="Title">
          <div>
            {/* <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              cursor="pointer"
              color="black"
              fill="currentColor"
              class="sc-gzVnrw bxKtkr"
            >
              <path d="M15.65,29.55l9.74-6V2a23.9,23.9,0,0,0-9.74,2.33Zm-2.08,1.27V5.5A24,24,0,0,0,4.41,36.43Zm13.91,7.49,9.74-6V4.81a23.77,23.77,0,0,0-9.74-2.73Zm-2.09,1.3V26l-20,12.26a24.09,24.09,0,0,0,8.55,8.5ZM39.3,31l10.62-6.58a23.91,23.91,0,0,0-3.09-10.27L39.3,18.55Zm0-24.93V16.2l6.46-3.77A24,24,0,0,0,39.3,6.06Zm0-2.41h0A26,26,0,1,1,26,0,26,26,0,0,1,39.3,3.66ZM16,47.8A24,24,0,0,0,50,26.77Z"></path>
            </svg> */}
          </div>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "100",
              color: "#444",
              cursor: "pointer",
            }}
            onClick={SideDrawerCloseHandler}
          >
            &times;
          </div>
        </div>
        <div className="SearchContainer">
          <div className="Search">
            <input type="search" placeholder="Search" />
            <img src={require("../../../media/search.svg")} alt="search" />
          </div>
          <button>English</button>
        </div>
        <div className="NavItem">Payments Network</div>
        <div className="NavItem">Customers</div>
        <div className="NavItem">Resources</div>
        <div className="NavItem">About Us</div>
        <button className="ContactUs">Contact Us</button>
        <div className="SocialWrapper">
          {/* <img src={require("../../../media/instagram.jpeg")} alt="instagram" />
          <img src={require("../../../media/twitter.jpeg")} alt="twitter" /> */}
        </div>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
