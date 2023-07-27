import { useGlobalContext } from "../hooks/store";

export function Result() {
  const { user, isLoader } = useGlobalContext();

  return (
    <div>
      {!isLoader && user?.name && (
        <>
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          <h1>State: {user.state}</h1>
        </>
      )}
      {isLoader && (
        <h1>Carregando...</h1>
      )}
    </div>
  )
}