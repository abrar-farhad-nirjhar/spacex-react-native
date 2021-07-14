import React from 'react';
import Tabs from 'navigation/tab-navigation';
import {ApolloProvider} from '@apollo/client';
import {client} from '../lib/apollo';
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Tabs />
    </ApolloProvider>
  );
}
