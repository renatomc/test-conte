import { useGlobalContext } from "../hooks/store";

export function User() {
  const { setUserName, userName, user, handleGetUser } = useGlobalContext();

  return (
    <div>
      <h1>User: {userName}</h1>
      <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      <button onClick={handleGetUser}>Buscar</button>
      <div>
        {user?.name || ''}
        {user?.age || ''}
        {user?.state || ''}
      </div>
    </div>
  )
}