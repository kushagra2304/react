import axios from "axios";
import { useEffect, useState } from "react";

function UsersAxios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  fetchUsers();
}, []);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersAxios;
