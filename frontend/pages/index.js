import Layout from "../components/layout/Layout";
import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Home({ data }) {
  //checking if they are comming correct
  console.log("menus", data);
  return <Layout data={data}>content</Layout>;
}

//nextjs getStatic props
//getting query for menu
export async function getStaticProps(context) {
  //client.query it is form apollo
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  // console.warn("data", data);
  return {
    props: {
      data: {
        menus: {
          // we can pass both of them as one
          headerMenus: data?.headerMenu?.edges,
          footerMenus: data?.footerMenu?.edges,
        },
      },
    }, // will be passed to the page component as props
  };
}
