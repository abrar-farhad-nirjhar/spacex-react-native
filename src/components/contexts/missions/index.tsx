import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import MISSIONS from 'api/graphql/query/missions.query';

interface Value {
  missions: any;
  loading: boolean;
}

export const MissionsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function MissionsProvider({children}: Props) {
  const {data, error, loading} = useQuery(MISSIONS, {
    variables: {
      offset: 0,
      limit: 10,
    },
  });

  return (
    <MissionsContext.Provider value={{missions: data?.missions, loading}}>
      {children}
    </MissionsContext.Provider>
  );
}
