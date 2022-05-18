import React from "react";
import Header from "../header/Header";

export default function Layout({ children, data }) {
  // console.log(data);
  return (
    <div>
      <Header headerMenus={data?.menus?.headerMenus} />
      {children}
    </div>
  );
}
