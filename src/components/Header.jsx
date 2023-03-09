// this file will dispalying the logo for our institute ( Almabetter  )

import React from "react";
import logo from "../assets/BrandLogo1.png";

const Header = () => {
  return (
    <div className=" bg-white ">
    <div className="flow-root ">
  
      <img className="  float-left object-cover h-20 w-20  " src={logo} alt="logo" />
      <button className="py-2 px-6  bg-red-600 text-white rounded-md mb-10 float-right " >
                        Login/signin
                      </button>
    </div>
  </div>
  );
};

export default Header;
