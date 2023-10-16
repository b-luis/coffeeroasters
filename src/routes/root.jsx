import React from "react";
import { Header, Footer } from "../components";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
