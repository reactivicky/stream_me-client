/* 4cd0c3162c7bc5afd0cce83d5fe392e7c086e1d1
 * This file is automatically generated by graphql-let. */

import * as Apollo from '@apollo/client';
export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type EditStreamInput = {
    description?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    addStream: Stream;
    deleteStream: Scalars['Boolean'];
    editStream: Stream;
    login?: Maybe<User>;
    logout: Scalars['Boolean'];
    register: User;
};
export declare type MutationAddStreamArgs = {
    data: StreamInput;
};
export declare type MutationDeleteStreamArgs = {
    streamId: Scalars['Float'];
};
export declare type MutationEditStreamArgs = {
    data: EditStreamInput;
    streamId: Scalars['Float'];
};
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationRegisterArgs = {
    data: RegisterInput;
};
export declare type Query = {
    __typename?: 'Query';
    hello: Scalars['String'];
    me?: Maybe<User>;
    stream?: Maybe<Stream>;
    streams: Array<Stream>;
};
export declare type QueryStreamArgs = {
    streamId: Scalars['Float'];
};
export declare type RegisterInput = {
    email: Scalars['String'];
    password: Scalars['String'];
};
/** Stream */
export declare type Stream = {
    __typename?: 'Stream';
    description?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    title: Scalars['String'];
    url: Scalars['String'];
    user: User;
};
export declare type StreamInput = {
    description?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    url: Scalars['String'];
};
/** User */
export declare type User = {
    __typename?: 'User';
    email: Scalars['String'];
    id: Scalars['ID'];
    streams?: Maybe<Array<Stream>>;
};
export declare type CurrentUserQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type CurrentUserQuery = ({
    __typename?: 'Query';
} & {
    me?: Maybe<({
        __typename?: 'User';
    } & Pick<User, 'id' | 'email'>)>;
});
export declare const CurrentUserDocument: Apollo.DocumentNode;
/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export declare function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>): Apollo.QueryResult<CurrentUserQuery, Exact<{
    [key: string]: never;
}>>;
export declare function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>): Apollo.QueryTuple<CurrentUserQuery, Exact<{
    [key: string]: never;
}>>;
export declare type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export declare type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export declare type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;