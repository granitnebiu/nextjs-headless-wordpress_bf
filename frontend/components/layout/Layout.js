import Head from "next/head";

import { isEmpty } from "lodash";

import PropTypes from "prop-types";
import Header from "@/header/Header";
import Footer from "@/footer/Footer";
import Seo from "@/seo/Seo";
import { sanitize } from "src/utils/miscellaneous";

const Layout = ({ data, isPost, children }) => {
  const { page, post, posts, header, footer, headerMenus, footerMenus } = data || {};

  // If it does not have either post or page.
  if (isEmpty(page) && isEmpty(post) && isEmpty(posts)) {
    return null;
  }

  const seo = isPost ? post?.seo ?? {} : page?.seo ?? {};
  const uri = isPost ? post?.uri ?? {} : page?.uri ?? {};

  return (
    <div>
      <Seo seo={seo} uri={uri} />
      <Head>
        <link rel="shortcut icon" href={header?.favicon} />
        {seo?.schemaDetails ? (
          <script
            type="application/ld+json"
            className="yoast-schema-graph"
            key="yoastSchema"
            dangerouslySetInnerHTML={{ __html: sanitize(seo.schemaDetails) }}
          />
        ) : null}
      </Head>
      <Header header={header} headerMenus={headerMenus?.edges} />
      <div className="min-h-almost-screen mx-auto px-5 py-24 md:container">{children}</div>
      <Footer footer={footer} footerMenus={footerMenus?.edges} />
    </div>
  );
};

Layout.propTypes = {
  data: PropTypes.object,
  isPost: PropTypes.bool,
  children: PropTypes.object,
};

Layout.defaultProps = {
  data: {},
  isPost: false,
  children: {},
};

export default Layout;
