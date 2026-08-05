// export const CART_FRAGMENT = /* GraphQL */ `
//   fragment CartFields on Cart {
//     id
//     checkoutUrl
//     totalQuantity
//     cost {
//       totalAmount { amount currencyCode }
//       subtotalAmount { amount currencyCode }
//     }
//     lines(first: 50) {
//       edges {
//         node {
//           id
//           quantity
//           merchandise {
//             ... on ProductVariant {
//               id
//               title
//               product { title handle }
//               price { amount currencyCode }
//               image { url altText }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// lib/shopify/cart/fragments.ts
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
                options { name values }          # ← what option names exist (e.g. "Size")
                variants(first: 20) {              # ← all variants to populate the dropdown
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