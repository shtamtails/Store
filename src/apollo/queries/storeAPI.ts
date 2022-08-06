import { gql } from "@apollo/client";

export const FETCH_CATEGORIES = gql`
  query getCategories {
    categories {
      name
    }
  }
`;

export const FETCH_PRODUCTS_BY_CATEGORY = gql`
  query getProductsByCategory($name: CategoryInput) {
    category(input: $name) {
      name
      products {
        id
        name
        inStock
        gallery
        brand
        attributes {
          name
        }
        prices {
          currency {
            symbol
          }
          amount
        }
      }
    }
  }
`;

export const FETCH_CURRENCIES = gql`
  query getCurrencies {
    currencies {
      label
      symbol
    }
  }
`;

export const FETCH_PRICE_BY_ID = gql`
  query getProductPriceById($input: String!) {
    product(id: $input) {
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;

export const FETCH_PRODUCT_INFO_BY_ID = gql`
  query getProductInfo($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      brand
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`;
