import { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_API} `
  },
  cache: new InMemoryCache()
});

