import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <NavLink to={"/"}>
          <div className="ml-5">
            <h1 className="text-red-900 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
              React Redux Shopping Cart
            </h1>
          </div>
        </NavLink>
        <ul className="flex list-none item-center space-x-6 text-gary-800 font-semibold">
          <NavLink
            to={"/"}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline 2px chocolate" : "",
            })}
          >
            <li className="cursor-pinter">Home</li>
          </NavLink>
          <NavLink
            to={"/cart"}
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline 2px chocolate" : "",
            })}
          >
            <li className="cursor-pinter">
              <p>
                Cart:<span>{`${cart.length > 0 ? cart.length : ""}`}</span>{" "}
              </p>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
