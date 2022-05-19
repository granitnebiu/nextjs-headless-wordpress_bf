import client from "src/apollo/client";
import { isEmpty } from "lodash";
import { GET_PAGES_URI } from "src/queries/pages/get-pages";
import { GET_PAGE } from "src/queries/pages/get-page";
import { useRouter } from "next/router";
import Layout from "../components/layout/Layout";
import { FALLBACK, handleRedirectsAndReturnData, isCustomPageUri } from "../src/utils/slugs";
// import { sanitize } from "../src/utils/miscellaneous";

export default function Page({ data }) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  console.log("data", data);
  return <Layout data={data}>{router?.query?.slug.join("/")}</Layout>;
}

export async function getStaticProps({ params }) {
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: params?.slug.join("/"),
    },
  });

  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}

/**
 * Since the page name uses catch-all routes,
 * for example [...slug],
 * that's why params would contain slug which is an array.
 * For example, If we need to have dynamic route '/foo/bar'
 * Then we would add paths: [ params: { slug: ['foo', 'bar'] } } ]
 * Here slug will be an array is ['foo', 'bar'], then Next.js will statically generate the page at /foo/bar
 *
 * At build time next js will make an api call get the data and
 * generate a page bar.js inside .next/foo directory, so when the page is served on browser
 * data is already present, unlike getInitialProps which gets the page at build time but makes an api
 * call after page is served on the browser.
 *
 * @see https://nextjs.org/docs/basic-features/data-fetching#the-paths-key-required
 *
 * @returns {Promise<{paths: [], fallback: boolean}>}
 */
export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_PAGES_URI,
  });

  const pathsData = [];
  // console.log(data?.pages?.nodes);
  data?.pages?.nodes &&
    data?.pages?.nodes.map((page) => {
      if (!isEmpty(page?.uri) && !isCustomPageUri(page?.uri)) {
        const slugs = page?.uri?.split("/").filter((pageSlug) => pageSlug);
        // console.log("this is the ", slugs);
        pathsData.push({ params: { slug: slugs } });
      }
    });
  return {
    paths: pathsData,
    fallback: FALLBACK, // false or 'blocking'
  };
}
