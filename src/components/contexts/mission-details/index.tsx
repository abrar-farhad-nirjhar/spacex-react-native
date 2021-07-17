import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import MISSIONDETAILS from 'api/graphql/query/mission-details.query';

interface Value {
  mission: any;
  loading: boolean;
}

export const MissionDetailsContext = createContext({} as Value);

interface Props {
  id: any;
  children: JSX.Element;
}

export function MissionDetailsProvider({id, children}: Props) {
  const {data, error, loading} = useQuery(MISSIONDETAILS, {
    variables: {
      id,
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <MissionDetailsContext.Provider value={{mission: data?.mission, loading}}>
      {children}
    </MissionDetailsContext.Provider>
  );
}
