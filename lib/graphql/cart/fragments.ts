export const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFields on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount { amount currencyCode }
      subtotalAmount { amount currencyCode }
    }
    lines(first: 50) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount { amount currencyCode }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price { amount currencyCode }
              image { url altText }
              selectedOptions { name value }
              product {
                title
                handle
                options { name values }          
                variants(first: 20) {              
                  edges {
                    node {
                      id
                      title
                      availableForSale
                      selectedOptions { name value }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;