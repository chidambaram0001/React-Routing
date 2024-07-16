import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const [formData, setFormData] = useState(null);
 //   const nav = useNavigate();
    const handleChangeEvent = (e)=>{
        setFormData((val)=>{
            return {...val,[e.target.name]:e.target.value}
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)

        localStorage.setItem('isLoggedIn', true);
       // nav('/dashboard')
    }

    return(<div class="login-container">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" onBlur={handleChangeEvent}/>
          </div>
          <div className="input-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" onBlur={handleChangeEvent}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>)
}

export default Login;