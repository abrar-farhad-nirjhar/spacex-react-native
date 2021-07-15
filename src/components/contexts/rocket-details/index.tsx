import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import ROCKETDETAILS from 'api/graphql/query/rocket-details.query';

interface Value {
  rocket: any;
  loading: boolean;
}

export const RocketDetailsContext = createContext({} as Value);

interface Props {
  id: any;
  children: JSX.Element;
}

export function RocketDetailsProvider({id, children}: Props) {
  const {data, error, loading} = useQuery(ROCKETDETAILS, {
    variables: {
      id,
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <RocketDetailsContext.Provider value={{rocket: data?.rocket, loading}}>
      {children}
    </RocketDetailsContext.Provider>
  );
}
