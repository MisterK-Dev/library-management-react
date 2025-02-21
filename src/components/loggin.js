import React, {useState, useEffect} from "react";
import {useNavigate } from "react-router-dom";
function Loggin ({isLoggedIn, setIsLoggedIn}) {
  const navigate = useNavigate();
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const admin={username:"admin", password:"admin1234"};
 useEffect(() => {
    if (isLoggedIn) {
      alert("You have logged in, redirecting to the dashboard!");
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
const handleSubmit = (e) => {
e.preventDefault();
if (userName==admin.username) {
if (password==admin.password) {
setIsLoggedIn(true);
navigate("/dashboard");
} else {
alert("wrong password"); }
} else { 
alert("wrong userName");
}
}
return (
<div>
<h2> loggin using below form note: as it is a with out DB project i have not used validation for user credentials
</h2>
<form onSubmit={handleSubmit}>

<label htmlFor="userName">enter user name:</label>
      <input type="text" placeholder="Username" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required autoFocus/>
<br/>
<label htmlFor="password">enter your password: </label>
      <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
</form>
</div>
);
}

export default Loggin;