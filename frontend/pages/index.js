import { GET_PAGE } from "src/queries/pages/get-page";
import Layout from "../components/layout/Layout";
import client from "../src/apollo/client";

export default function Home({ data }) {
  //checking if they are comming correct
  console.log("Fontend clog data", data);
  return (
    <Layout data={data}>
      {data?.page?.content ? (
        <div dangerouslySetInnerHTML={{ __html: data?.page?.content ?? {} }} />
      ) : null}
    </Layout>
  );
}

//nextjs getStatic props
//getting query for menu
export async function getStaticProps(context) {
  //client.query it is form apollo
  const { data, loading, networkStatus } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
    },
  });

  // console.warn("backend clg data", data);
  return {
    props: {
      data: {
        header: data?.header || [],
        menus: {
          headerMenus: data?.headerMenu?.edges || [],
          footerMenus: data?.footerMenu?.edges || [],
        },
        footer: data?.footer || [],
        page: data?.page || [],
      },
    },
    revalidate: 1, // will be passed to the page component as props
  };
}
