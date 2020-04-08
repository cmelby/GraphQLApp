import React from 'react';
import logo from './logo.svg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css';

function App() {
  const cleint = new ApolloClient({
    url: 'http://graphql-pokemon.now.sh'
  });


  return (
    <ApolloProvider cleint={client}>

    </ApolloProvider>
  );
}

export default App;

// named component { ApolloProvider }
// @apollo/react-hooks