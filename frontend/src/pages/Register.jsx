import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import api from "../services/api";

function Register() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
    role: "user"
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
        await api.post("/register", form);
        setMessage("Registration successful!");
        setTimeout(()=>navigate("/login"),2000)
    } catch(error) {
      console.log(error.message);
      if (error.response && error.response.data.error) {
            setMessage(error.response.data.error);
        } else {
            setMessage("Something went wrong. Try again.");
        }
    }
  };

  return (
    <div className={styles.container}>

      <form className={styles.form} onSubmit={handleSubmit}>
        {message && <p className={styles.message}>{message}</p>}
        <h2 className={styles.title}>Create Account</h2>

        <div className={styles.inputGroup}>
          <label>Name</label>
          <input
            name="name"
            minLength={10}
            maxLength={60}
            required
            placeholder="Enter full name"
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Address</label>
          <textarea
            name="address"
            maxLength={400}
            required
            placeholder="Enter address"
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            pattern="^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,16}$"
            required
            placeholder="8-16 characters with uppercase & special character"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="owner">Owner</option>
        </select>
        </div>

        <button className={styles.button}>
          Register
        </button>

        <p className={styles.linkText}>
          Already have an account?
          <NavLink to="/login"> Login</NavLink>
        </p>

      </form>
        
    </div>
  );
}

export default Register;