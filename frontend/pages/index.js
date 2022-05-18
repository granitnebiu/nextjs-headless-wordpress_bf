import Layout from "../components/layout/Layout";
import client from "../src/apollo/client";
import { GET_MENUS } from "../src/queries/get-menus";

export default function Home({ data }) {
  //checking if they are comming correct
  console.log("Fontend clog data", data);
  return <Layout data={data}>content</Layout>;
}

//nextjs getStatic props
//getting query for menu
export async function getStaticProps(context) {
  //client.query it is form apollo
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  // console.warn("backend clg data", data);
  return {
    props: {
      data: {
        header: data?.header || [],
        menus: {
          // we can pass both of them as one

          headerMenus: data?.headerMenu?.edges || [],
          footerMenus: data?.footerMenu?.edges || [],
        },
        footer: data?.footer || [],
      },
    },
    revalidate: 1, // will be passed to the page component as props
  };
}
