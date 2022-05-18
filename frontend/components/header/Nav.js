import { isEmpty } from "lodash";
import Link from "next/link";

export default function Nav({ headerMenus }) {
  if (isEmpty(headerMenus)) {
    return null;
  }

  console.log(headerMenus);
  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-6">
      <div className="flex-no-shrink mr-6 flex items-center text-white">
        <svg
          className="mr-2 h-8 w-8"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="text-xl font-semibold tracking-tight">Tailwind CSS</span>
      </div>
      <div className="block lg:hidden">
        <button className="text-teal-lighter border-teal-light flex items-center rounded border px-3 py-2 hover:border-white hover:text-white">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        {headerMenus?.length ? (
          <div className="text-sm lg:flex-grow">
            {headerMenus.map((menu) => (
              <Link key={menu.node.id} href={menu.node.path}>
                <a
                  href="#responsive-header"
                  className="mt-4 mr-4 block text-teal-100 hover:text-white lg:mt-0 lg:inline-block"
                >
                  {menu.node.label}
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
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
