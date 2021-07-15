import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import SHIPDETAILS from 'api/graphql/query/ship-details.query';

interface Value {
  ship: any;
  loading: boolean;
}

export const ShipDetailsContext = createContext({} as Value);

interface Props {
  id: any;
  children: JSX.Element;
}

export function ShipDetailsProvider({id, children}: Props) {
  const {data, error, loading} = useQuery(SHIPDETAILS, {
    variables: {
      id,
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <ShipDetailsContext.Provider value={{ship: data?.ship, loading}}>
      {children}
    </ShipDetailsContext.Provider>
  );
}
