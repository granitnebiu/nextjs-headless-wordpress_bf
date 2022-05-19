import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Head from "next/head";
import Seo from "@/seo/Seo";
import { isEmpty } from "lodash";
import PropTypes from "prop-types";
// import { sanitize } from "src/utils/miscellaneous";

export default function Layout({ children, data }) {
  // console.log(data);
  if (isEmpty(data?.page)) {
    return null;
  }

  const { page, header, footer, menus, headerMenu, footerMenu } = data || {};
  return (
    <div>
      <Seo seo={page?.seo} uri={page?.uri} />

      <Head>
        <link rel="shortcut icon" href={header.favicon} />
        {page?.seo?.schemaDetails && (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{ __html: page?.seo?.schemaDetails }}
          />
        )}
      </Head>
      <Header header={header} headerMenus={headerMenu?.edges} />
      <div className="h-almost-screen">{children}</div>

      <Footer footer={footer} footerMenus={footerMenu?.edges} />
    </div>
  );
}
