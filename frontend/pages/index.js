import { GET_PAGE } from "src/queries/pages/get-page";
import { handleRedirectsAndReturnData } from "src/utils/slugs";
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
export async function getStaticProps() {
  //client.query it is form apollo
  const { data, errors } = await client.query({
    query: GET_PAGE,
    variables: {
      uri: "/",
    },
  });

  // console.warn("backend clg data", data);
  const defaultProps = {
    props: {
      data: data || {},
    },
    revalidate: 1, // will be passed to the page component as props
  };

  return handleRedirectsAndReturnData(defaultProps, data, errors, "page");
}
