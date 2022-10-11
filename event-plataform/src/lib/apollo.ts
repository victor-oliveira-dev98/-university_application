import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl60ajm2c3orp01uk9een5ry3/master', 
    cache: new InMemoryCache()
})
