import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const PageLayouts = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayouts;
