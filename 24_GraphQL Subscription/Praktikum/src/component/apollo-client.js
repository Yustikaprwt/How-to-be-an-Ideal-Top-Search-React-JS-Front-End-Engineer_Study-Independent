import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: 'https://novel-wolf-20.hasura.app/v1/graphql',
    cache : new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
        'W4aGcE2yTYTOOupX8ah936x6L4WltYvtmgcR2XUx6qIy4pp64S8TiXRxUSRDuTch',
    },
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://novel-wolf-20.hasura.app/v1/graphql',
    connectionParams: {
        headers: {
            'x-hasura-admin-secret':
            'W4aGcE2yTYTOOupX8ah936x6L4WltYvtmgcR2XUx6qIy4pp64S8TiXRxUSRDuTch',
        },
    },
  }));

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );
  
  const client = new ApolloClient({
      link: splitLink,
      cache: new InMemoryCache(),
  });

export default client