import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// connects ApolloClient instance with GraphQL API
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// instantiate ApolloClient and configure
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// render App wrapped with ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker()