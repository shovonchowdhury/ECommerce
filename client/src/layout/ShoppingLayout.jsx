import ShoppingHeader from "@/components/shoppingView/ShoppingHeader";
import React from "react";
import { Outlet } from "react-router-dom";

export default function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white min-h-screen ">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
