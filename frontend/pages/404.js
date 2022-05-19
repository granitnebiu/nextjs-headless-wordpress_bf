import Footer from "@/footer/Footer";
import Header from "@/header/Header";
import Link from "next/link";
import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";

function Error404({ data }) {
  const { header, footer, headerMenu, footerMenu } = data || {};
  return (
    <>
      <Header header={header} headerMenus={headerMenu?.edges} />
      <div className="h-almost-screen">
        <section className="body-font text-gray-600">
          <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
            <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
              <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 sm:text-4xl">
                Sorry No result found
              </h1>
              <div className="flex justify-center">
                <Link href="/">
                  <a className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                    Back to Home
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
              <img
                className="rounded object-cover object-center"
                alt="hero"
                src="https://dummyimage.com/620x400"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer footer={footer} footerMenus={footerMenu?.edges} />
    </>
  );
}

export default Error404;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      data: data || {},
    },
  };
}
