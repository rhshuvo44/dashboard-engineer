import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import useEngineer from "../hooks/useEngineer";

const Dashboard = () => {
  const [engineer] = useEngineer();
  const { pathname } = useLocation();
  return (
    <div className="drawer drawer-mobile">
      <input id="engineer-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-10 md:p-20 ">
        {/* <!-- Page content here --> */}
        <Outlet />
      </div>
      {!pathname.includes("login") && (
        <>
          <div className="drawer-side">
            <label htmlFor="admin-sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content gap-4 mt-16">
              {/* <!-- Sidebar content here --> */}
              {engineer && (
                <>
                  <li>
                    <NavLink to="project">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="application">Application</NavLink>
                  </li>
                  <li>
                    <NavLink to="requisition">Requisition</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
