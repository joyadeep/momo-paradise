import { shopifyFetch } from "./shopifyFetch";

export async function getAllProducts() {
    return shopifyFetch({
        query: `{
        products(first:10) {
        edges {
        node {
          id
        title
        handle
        tags
        
        category {
          id
          name
        }
        media(first: 5) {
          edges {
            node {
              id
              alt
              mediaContentType
              ... on MediaImage {
                image {
                  url
                  altText
                }
              }
            }
          }
        }
        }}}
        }`
    })
}

export async function getNewProducts(): Promise<any> {
    return shopifyFetch({
        query: `{
        products(first:10,query:"tag:new") {
        edges {
        node {
          id
        title
        handle
        tags
        
        category {
          id
          name
        }
          variants(first: 1) {
            edges {
              node {
                id
                price {
                amount
                currencyCode
                }
              }
            }
          }
        media(first: 5) {
          edges {
            node {
              id
              alt
              mediaContentType
              ... on MediaImage {
                image {
                  url
                  altText
                }
              }
            }
          }
        }
        }}}
        }`
    })
}