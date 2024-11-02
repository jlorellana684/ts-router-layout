import { Outlet } from "@tanstack/react-router";
import React from "react";

export const EmptyLayout = () => {
  return (
    <>
      <div>EmptyLayout</div>
      <Outlet />
    </>
  );
};
