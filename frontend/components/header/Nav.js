import { isEmpty } from "lodash";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav({ headerMenus, header }) {
  if (isEmpty(headerMenus)) {
    return null;
  }

  const [menuVisible, setMenuVisible] = useState(false);
  //   console.log(headerMenus);
  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div className="flex-no-shrink mr-6 flex items-center text-white">
        <div className="mr-4">
          <Image src={header?.siteLogoUrl} alt="logo" width={48} height={48} />
        </div>
        <div className="flex flex-col items-start justify-start">
          <span className="text-xl font-semibold tracking-tight">{header.siteTitle}</span>
          <span>{header?.siteTagLine}</span>
        </div>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="flex items-center rounded border border-teal-200 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
        >
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuVisible ? "block" : "hidden"
        }  w-full flex-grow lg:flex lg:w-auto lg:items-center`}
      >
        {headerMenus?.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus.map((menu) => (
              <Link key={menu?.node?.id} href={menu?.node?.path}>
                <a className="mt-4 mr-4 block text-teal-100 hover:text-white lg:mt-0 lg:inline-block">
                  {menu?.node?.label}
                </a>
              </Link>
            ))}
          </div>
        ) : null}
        <div>
          <a
            href="#"
            className="hover:text-teal mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white lg:mt-0"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
