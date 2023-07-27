import { useCallback, useMemo, useState } from "react";

type UserDataParams = {
  name: string;
  age: number;
  state: string;
}

export function useUser() {
  const [name, setName] = useState('Teste');
  const [userData, setUserData] = useState<UserDataParams>({} as UserDataParams);

  const users = useMemo(() => {
    return [{
      name: 'Renato',
      age: 39,
      state: 'São Paulo'
    },
    {
      name: 'Allan',
      age: 22,
      state: 'São Paulo'
    }]
  },[])

  const handleGetUser = useCallback(() => {
    setTimeout(() => {
      const newUsers: UserDataParams = users.filter(user => user.name === name)[0]
      setUserData(newUsers)
    }, 500);
  }, [name, users]);
  
  return (
    {
      name,
      setName,
      handleGetUser,
      userData,
    }
  );
}