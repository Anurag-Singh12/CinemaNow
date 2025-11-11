import React from "react";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import AdminSidebar from "../../Components/admin/AdminSidebar";

const Layout = () => {
  return (
    <>
      <AdminNavbar />
      <div>
        <AdminSidebar/>
      </div>
    </>
  );
};

export default Layout;
