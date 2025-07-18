import { useEffect, useState } from "react";

interface IUser {
  username: string;
  id: number;
  name: string;
}

const withUserData = (WrapperComponent: React.Component) => {
  return function EnhancedComponent(props) {
    const [user, setUser] = useState<IUser>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        });
    }, []);

    return <WrapperComponent user={user} loading={loading} {...props} />;
  };
};

function UserDisplay({ user, loading }) {
  if (loading) return <p>Loading...</p>;
  return <p>Welcome, {user.name}</p>;
}

// Sử dụng HOC
export const EnhancedUserDisplay = withUserData(UserDisplay);
