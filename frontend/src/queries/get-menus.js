import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";

export const GET_MENUS = gql`
headerMenu: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
    edges {
      node {
        ...MenuFragment
        childItems {
          edges {
            node {
                ...MenuFragment
            }
          }
        }
      }
    }
  }
  footerMenu: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
    edges {
      node {
        id
        label
        url
        path
      }
    }
  }
  ${MenuFragment}
`;
