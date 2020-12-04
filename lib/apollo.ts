import { useMemo } from "react"
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  HttpLink,
} from "@apollo/client"

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
  })

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  if (typeof window === "undefined") return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
