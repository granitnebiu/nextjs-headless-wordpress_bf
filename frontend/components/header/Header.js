import React from "react";
import Nav from "./Nav";
import { isEmpty } from "lodash";

export default function Header({ headerMenus }) {
  if (isEmpty(headerMenus)) {
    return null;
  }
  return (
    <header>
      <Nav headerMenus={headerMenus} />
    </header>
  );
}
