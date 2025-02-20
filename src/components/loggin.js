import React, {useState, useEffect} from "react";
import {useNavigate } from "react-router-dom";
function Loggin ({isLoggedIn, setIsLoggedIn}) {
  const navigate = useNavigate();
 useEffect(() => {
    if (isLoggedIn) {
      alert("You have logged in, redirecting to the dashboard!");
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);
const handleSubmit = (e) => {
e.preventDefault();
setIsLoggedIn(true);
navigate("/dashboard");
}
return (
<div>
<h2> loggin using below form note: as it is a with out DB project i have not used validation for user credentials
</h2>
<form onSubmit={handleSubmit}>

<label htmlFor="userName">enter user name:</label>
      <input type="text" placeholder="Username" id="userName"  required autoFocus/>
<br/>
<label htmlFor="password">enter your password: </label>
      <input type="password" placeholder="Password" id="password" required />
      <button type="submit">Login</button>
</form>
</div>
);
}

export default Loggin;