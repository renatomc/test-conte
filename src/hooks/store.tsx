import { Dispatch, SetStateAction, createContext, useCallback, useContext, useMemo, useState } from "react";

interface UserData {
  name: string;
  age: number;
  state: string;
}

interface ContextProps {
  user: UserData;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>
  handleGetUser: () => void;
  isLoader: boolean;
}

export const GlobalContext = createContext<ContextProps>(
  {
    userName: '',
    user: {
      name: '',
      age: 0,
      state: '',
    },
    setUserName: (): string => '',
    handleGetUser: () => null,
    isLoader: false
  }
);

// @ts-expect-error
export const GlobalContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('teste');
  const [user, setUser] = useState<UserData>({} as UserData);
  const [isLoader, setIsLoader] = useState(false);

  const users = useMemo(() => {
    return [{
      name: 'Renato',
      age: 39,
      state: 'São Paulo'
    },
    {
      name: 'Allan',
      age: 22,
      state: 'Rio Grande do Sul'
    }]
  },[])

  const handleGetUser = useCallback(() => {
    setIsLoader(true);
    setTimeout(() => {
      const newUsers: UserData = users.filter(user => user.name === userName)[0]
      setUser(newUsers);
      setIsLoader(false);
    }, 500);
  }, [userName, users]);

  return (
    <GlobalContext.Provider value={{userName, setUserName, user, handleGetUser, isLoader}}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
