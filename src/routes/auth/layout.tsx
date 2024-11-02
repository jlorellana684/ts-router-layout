import * as React from "react";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div> Auth header</div>
      <Outlet />
      <div> Auth footer</div>
    </>
  );
}
