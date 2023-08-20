import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login(props) 
{
// debugger;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://192.168.0.104:4000/user/all");
        setUsers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log("Error occurred while fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

 // Inside the handleSignIn function in Login.js
const handleSignIn = (e) => 
{
    e.preventDefault();
  
    const isAdmin = users.some(
      (user) =>
        user.Role === "admin" &&
        user.email === username &&
        user.password === password
    );
  
    if (isAdmin) 
    {
      console.log("Admin authenticated!");
  
      // Set the user authentication status in session storage
      sessionStorage.setItem("isUserLoggedIn", "true");
      if(props.path!=null && props.path!="/login")
      {
          history.push(props.path) //this is like take user to DB/profile
      }
      else
      {
          history.push("/home");  //this will execute when user asks for /login directly..
      }
    } else {
      setError("Invalid username or password");
      console.log(error);
    }
  };
  
  return (
    <div className="container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
