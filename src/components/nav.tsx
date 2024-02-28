import React, { useState } from "react";
import SubList from "./sublist";

function Nav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
      <nav
        className={`bg-white w-1/2 pt-28 px-8 md:p-0 md:w-auto md:bg-transparent right-0 top-0 bottom-0 fixed flex flex-col md:flex-row md:static basis-full md:items-center md:justify-between ${!openMenu ? "translate-x-full" : "translate-x-0"}  md:translate-x-0 transition-translate-x duration-200 z-50`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 gap-4 text-primary-gray">
          <SubList name="features">
            <li className="before:content-todo">Todo List</li>
            <li className="before:content-calendar">Calendar</li>
            <li className="before:content-reminder">Reminders</li>
            <li className="before:content-planning">Planning</li>
          </SubList>

          <SubList name="company">
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </SubList>

          <li>
            <a href="#career">Careers</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <menu className="flex items-center gap-4 flex-col md:flex-row text-center absolute bottom-24 inset-x-10 md:static justify-end">
          <li>
            <a href="#login">Login</a>
          </li>
          <li className="border-2 border-current px-4 py-2 rounded-2xl w-full md:w-auto">
            <a href="#register">Register</a>
          </li>
        </menu>
      </nav>

      <div className="md:hidden">
        {!openMenu && (
          <button
            className="before:content-menu z-50 relative"
            onClick={() => {
              setOpenMenu((menu) => !menu);
            }}
          ></button>
        )}
        {openMenu && (
          <button
            className="before:content-closeMenu z-50 relative"
            onClick={() => setOpenMenu((menu) => !menu)}
          ></button>
        )}
      </div>
      {openMenu && (
        <div
          className="absolute inset-0 bg-black/25 z-10"
          onClick={() => setOpenMenu((menu) => !menu)}
        ></div>
      )}
    </>
  );
}

export default Nav;
