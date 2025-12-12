import React from "react";
import AdminNavigation from "../components/AdminNaviagtion";
import AdminSideBar from "../components/AdminSideBar";


export default function AdminDashboard() {
    return(
        <div className="bg-white">
            <AdminNavigation />
            <AdminSideBar/>
        </div>
    )
}