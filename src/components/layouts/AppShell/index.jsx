import React from "react";
import Navbar from "../navbar";

function AppShell(props) {
  const { children } = props;
  return (
    <main className="">
      <div>
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default AppShell;
