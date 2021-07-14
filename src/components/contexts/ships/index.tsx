import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import SHIPS from 'api/graphql/query/ships.query';

interface Value {
  ships: any;
  loading: boolean;
}

export const ShipsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function ShipsProvider({children}: Props) {
  const {data, error, loading} = useQuery(SHIPS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  return (
    <ShipsContext.Provider value={{ships: data?.ships, loading}}>
      {children}
    </ShipsContext.Provider>
  );
}
