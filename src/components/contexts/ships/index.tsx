import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import SHIPS from 'api/graphql/query/ships.query';

interface Value {
  ships: any;
  loading: boolean;
  loadMore: () => void;
}

export const ShipsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function ShipsProvider({children}: Props) {
  const [offset, setOffset] = useState(0);
  const [ships, setShips] = useState<any[]>([]);
  const {data, error, loading} = useQuery(SHIPS, {
    variables: {
      offset,
      limit: 10,
    },
    onCompleted() {
      setShips([...ships, ...data?.ships]);
    },
  });

  function loadMore() {
    setOffset(offset + 10);
  }

  return (
    <ShipsContext.Provider value={{ships: ships, loading, loadMore}}>
      {children}
    </ShipsContext.Provider>
  );
}
