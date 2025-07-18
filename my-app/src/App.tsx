import "./App.css";
import { PrimeChecker } from "./components/Memo";
import { EnhancedUserDisplay } from "./hoc/UserDisplay";
import { useUser } from "./hooks/useUser";

const UserComponent = () => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;
  return <p>Hi, {user?.name}</p>;
};

function App() {
  return (
    <>
      <EnhancedUserDisplay />
      <UserComponent />
      <PrimeChecker />
    </>
  );
}

export default App;
