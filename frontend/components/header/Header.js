import React from "react";
import Nav from "./Nav";
import { isEmpty } from "lodash";

export default function Header({ headerMenus, header }) {
  if (isEmpty(headerMenus)) {
    return null;
  }
  return (
    <header>
      <Nav header={header} headerMenus={headerMenus} />
    </header>
  );
}
