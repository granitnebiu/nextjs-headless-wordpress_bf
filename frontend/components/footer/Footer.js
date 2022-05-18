import React from "react";
import { isEmpty, isArray } from "lodash";
import Link from "next/link";
// import { sanitize } from "../../src/utils/miscellaneous";

export default function Footer({ footer, footerMenus }) {
  return (
    <footer className="bg-teal-500 p-6">
      <div className="-mx-1 flex flex-wrap overflow-hidden text-white">
        {/* Widget One  */}
        <div className="my-1 w-full overflow-hidden px-1  sm:w-full lg:w-1/2 xl:w-1/3">
          {/* <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne) }}></div> */}
          <div dangerouslySetInnerHTML={{ __html: footer?.sidebarOne }}></div>
        </div>
        {/* Widget Two  */}
        <div className="my-1 w-full overflow-hidden px-1 sm:w-full lg:w-1/2 xl:w-1/3">
          {/* <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo) }}></div> */}
          <div dangerouslySetInnerHTML={{ __html: footer?.sidebarTwo }}></div>
        </div>
        {/* Footer Menu */}
        <div className="my-1 w-full overflow-hidden px-1 sm:w-full lg:w-1/2 xl:w-1/3">
          {!isEmpty(footerMenus) && isArray(footerMenus) ? (
            <ul>
              {footerMenus.map((footerMenu) => (
                <li key={footerMenu?.node?.id}>
                  <Link href={footerMenu?.node?.path}>
                    <a>{footerMenu?.node?.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
