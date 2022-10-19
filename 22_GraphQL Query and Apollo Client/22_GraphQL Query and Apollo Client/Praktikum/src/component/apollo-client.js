import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://novel-wolf-20.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
        'W4aGcE2yTYTOOupX8ah936x6L4WltYvtmgcR2XUx6qIy4pp64S8TiXRxUSRDuTch',
    },
});

export default client