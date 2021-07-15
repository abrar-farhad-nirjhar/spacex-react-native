import {useQuery} from '@apollo/client';
import React, {createContext, useState, useEffect} from 'react';
import MISSIONS from 'api/graphql/query/missions.query';

interface Value {
  missions: any;
  loading: boolean;
  loadMore: () => void;
}

export const MissionsContext = createContext({} as Value);

interface Props {
  children: JSX.Element;
}

export function MissionsProvider({children}: Props) {
  const [offset, setOffset] = useState(0);
  const [missions, setMissions] = useState<any[]>([]);
  const {data, error, loading} = useQuery(MISSIONS, {
    variables: {
      offset,
      limit: 10,
    },
    onCompleted() {
      setMissions([...missions, ...data?.missions]);
    },
  });
  function loadMore() {
    setOffset(offset + 10);
  }

  return (
    <MissionsContext.Provider value={{missions: missions, loading, loadMore}}>
      {children}
    </MissionsContext.Provider>
  );
}
