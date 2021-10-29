import { users } from "./users";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export const Users = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.replace("/login");
  };
  return (
    <>
      <h1>Users-Page</h1>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log-out
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
