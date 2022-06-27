import React, { createContext, useContext, useEffect, useState } from 'react';
import getRealm from '../infrastructure/realm';

export interface IRealmContextProviderProps {
  children: React.ReactElement;
}

export const RealmContext = createContext<Realm | undefined>(undefined);

export default function RealmContextProvider({
  children,
}: IRealmContextProviderProps) {
  const [realm, setRealm] = useState<Realm | undefined>();

  useEffect(() => {
    (async () => {
      setRealm(await getRealm());
    })();
  }, []);
  return (
    <RealmContext.Provider value={realm}>{children}</RealmContext.Provider>
  );
}

export const useRealmContext = () => useContext(RealmContext);
