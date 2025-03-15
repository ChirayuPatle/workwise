import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Menu() {
  const [IsMobile, SetIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    const handleResize = () => {
      SetIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return IsMobile ? (
    <div className="">This is for mobile</div>
  ) : (
    <div className="flex flex-col space-x-3 p-4">
      {/* logo  */}
      <div className="flex flex-row space-x-3">
        {/* image  */}
        <div className="h-10 w-10">
          <img src="./images/logo/logo.svg" alt="" />
        </div>
        {/* name  */}
        <div className="text-xl">WORKWISE</div>
      </div>
      {/* fields  */}
      <div className="flex flex-col space-y-4 px-10 py-2">
        <Link to="/dashboard">
          <NavLink
            className={({ isActive }) =>
              `cursor-pointer m-1 ${isActive ? "bg-black text-white-50" : "bg-none text-black"}`
            }
          >
            <div className="flex flex-row space-x-4 ">
              <img src="./images/logo/menu/team.svg" alt="" className="" />
              Dashboard
            </div>
          </NavLink>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
