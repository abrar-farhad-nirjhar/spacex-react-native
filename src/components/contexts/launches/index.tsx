import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import LAUNCHES from 'api/graphql/query/launches.query';

interface Value {
  launches: any;
  loading: boolean;
  loadMore: () => void;
}

export const LaunchesContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function LaunchesProvider({children}: Props) {
  const [offset, setOffset] = useState(0);
  const [missions, setMissions] = useState<any[]>([]);
  const {data, error, loading} = useQuery(LAUNCHES, {
    variables: {
      offset,
      limit: 10,
    },
    onError(error) {
      console.log(error);
    },
    onCompleted() {
      setMissions([...missions, ...data?.launches]);
    },
  });

  function loadMore() {
    setOffset(offset + 10);
  }

  return (
    <LaunchesContext.Provider value={{launches: missions, loading, loadMore}}>
      {children}
    </LaunchesContext.Provider>
  );
}
