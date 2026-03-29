import { useState, useRef } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import styles from "./Login.module.css";
import api from "../services/api.js"

function Login({onLogin}) {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  let email = useRef("");
  let password = useRef("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        // setForm((prev) => ({
        //     email: email.current.value,
        //     password: password.current.value,
        //     }));
        const res = await api.post("/login", {
          email: email.current.value,
          password: password.current.value,
        });
        // console.log(res.data.name,res.data.role,res.data.token);
        localStorage.setItem("token",res.data.token);
        onLogin(res.data.name,res.data.role);
        console.log(res.data.token);

        
        setMessage("Login successful!");
        setTimeout(()=>navigate("/"),2000);
      
    } catch(error) {
      console.log(error.message);
      if (error.response && error.response.data.error) {
            setMessage(error.response.data.error);
        } else {
            setMessage("Failed to Login please tryagain.");
        }
      
    }
    
  };

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
        {message && <p className={styles.message}>{message}</p>}
        <h2 className={styles.title}>Login</h2>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
          ref={email}
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            // onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
          ref={password}
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            // onChange={handleChange}
          />
        </div>

        <button className={styles.button}>Login</button>

        <p className={styles.linkText}>
          Don't have an account?
          <NavLink to="/register"> Register</NavLink>
        </p>

      </form>

    </div>
  );
}

export default Login;