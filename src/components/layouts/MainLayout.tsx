import { Outlet } from "@tanstack/react-router";
import React from "react";

export const MainLayout = () => {
  return (
    <>
      <div>MainLayout Header</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayout Footer</div>
    </>
  );
};
