// import AdminHeader from "@/components/adminView/adminHeader";
import AdminHeader from "@/components/adminView/AdminHeader";
import AdminSidebar from "@/components/adminView/AdminSidebar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      {/* admin sidebar */}
      <AdminSidebar open={openSidebar} setOpen={setOpenSidebar} />
      <div className="flex flex-1 flex-col">
        {/* admin header */}
        <AdminHeader setOpen={setOpenSidebar} />
        <main className="flex-1 flex-col flex bg-muted/40 p-4 md:p-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
