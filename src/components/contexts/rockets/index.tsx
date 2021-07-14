import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import ROCKETS from 'api/graphql/query/rockets.query';

interface Value {
  rockets: any;
  loading: boolean;
}

export const RocketsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function RocketProvider({children}: Props) {
  const {data, error, loading} = useQuery(ROCKETS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  return (
    <RocketsContext.Provider value={{rockets: data?.rockets, loading}}>
      {children}
    </RocketsContext.Provider>
  );
}
