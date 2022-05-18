import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";

export default function Layout({ children, data }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href={data?.header.favicon} />
      </Head>
      <Header header={data?.header} headerMenus={data?.menus?.headerMenus} />
      {children}
      <Footer footer={data?.footer} footerMenus={data?.menus?.footerMenus} />
    </div>
  );
}
