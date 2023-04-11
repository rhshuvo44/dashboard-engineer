import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../component/Button";
import logo from "../img/logo/sg-white.png";
import user from "../img/user/ripon.jpg";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Header = () => {
  const [notices, setNotices] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setNotices(data);
      });
  }, []);

  const newNotices = notices.reverse().slice(0, 5);
  const { pathname } = useLocation();

  return (
    <div className="navbar bg-base-100 top-0 fixed z-1 px-3 text-white">
      <div className="flex-1">
        <Link to="https://sarkargroupofcompanies.com/">
          <img src={logo} alt="logo" title="logo" className="w-32" />
        </Link>
      </div>

      {!pathname.includes("login") && (
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <button className="btn btn-ghost btn-circle ">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item">
                    {newNotices.length}
                  </span>
                </div>
              </button>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow text-white"
            >
              <div className="card-body last:border-b-0">
                <span className="text-info font-bold text-center border-b-2 border-primary">
                  Notification
                </span>

                {newNotices.map((notice) => (
                  <Link
                    className="border-b-2 "
                    key={notice.id}
                    to={`/noticeDetails/${notice.id}`}
                  >
                    {notice.title.slice(0, 25)}
                  </Link>
                ))}
                <div className="card-actions flex justify-center">
                  <Button path="/noticeAll">View All Notice</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-24 rounded-full">
                <img src={user} alt="avatar" title="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-3 shadow bg-base-100 rounded-box w-52 gap-2 "
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <button onClick={() => signOut(auth)}>Logout</button>
              </li>
            </ul>
          </div>
          <label
            htmlFor="engineer-sidebar"
            className="btn btn-square btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      )}
    </div>
  );
};

export default Header;
