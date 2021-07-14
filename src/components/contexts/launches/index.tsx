import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import LAUNCHES from 'api/graphql/query/launches.query';

interface Value {
  launches: any;
  loading: boolean;
}

export const LaunchesContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function LaunchesProvider({children}: Props) {
  const {data, error, loading} = useQuery(LAUNCHES, {
    variables: {
      offset: 0,
      limit: 10,
    },
    onError(error) {
      console.log(error);
    },
    onCompleted() {
      console.log(data);
    },
  });

  console.log('Hello');

  return (
    <LaunchesContext.Provider value={{launches: data?.launches, loading}}>
      {children}
    </LaunchesContext.Provider>
  );
}
