import React from "react";
import { Outlet } from "react-router-dom";

export default function Authlayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-black">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Welcome to ECommerce Shopping
          </h1>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
