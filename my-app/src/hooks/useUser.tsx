import { useEffect, useState } from "react";

interface IUser {
  username: string;
  id: number;
  name: string;
}

export function useUser() {
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

  return { user, loading };
}
