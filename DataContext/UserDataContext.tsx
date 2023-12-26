import React, {createContext, ReactNode, useContext, useState} from 'react';
import {TUsers} from '../ActivityScreens/Home.tsx';

export type TChildren = {
  children: ReactNode;
};

export type TUserContext = {
  users: TUsers[];
  setUsers: React.Dispatch<React.SetStateAction<TUsers[]>>;
};

const UserContext = createContext<TUserContext | null>(null);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error('useUserContext must be used within a userContextProvider');
  }
  return context;
}

export function UsersProvider({children}: TChildren) {
  const [users, setUsers] = useState<TUsers[]>([]);
  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
      }}>
      {children}
    </UserContext.Provider>
  );
}
