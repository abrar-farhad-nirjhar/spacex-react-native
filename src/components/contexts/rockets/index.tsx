import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import ROCKETS from 'api/graphql/query/rockets.query';

interface Value {
  rockets: any;
  loading: boolean;
  loadMore: () => void;
}

export const RocketsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function RocketProvider({children}: Props) {
  const [offset, setOffset] = useState(0);
  const [rockets, setRockets] = useState<any[]>([]);
  const {data, error, loading} = useQuery(ROCKETS, {
    variables: {
      offset,
      limit: 10,
    },
    onCompleted() {
      setRockets([...rockets, ...data?.rockets]);
    },
  });
  function loadMore() {
    setOffset(offset + 10);
  }

  return (
    <RocketsContext.Provider value={{rockets: rockets, loading, loadMore}}>
      {children}
    </RocketsContext.Provider>
  );
}
