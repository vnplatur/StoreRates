import bcrypt from "bcrypt";
import { findUserByEmail, createUser } from "../models/userModel.js";
import jwt from 'jsonwebtoken';

// REGISTER
export const registerUsers = (req, res) => {
  let { name, email,address, password, role } = req.body;
  console.log("name, email, password",name, email, password)

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  password = String(password);
  findUserByEmail(email, async (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
    
    if (results.length > 0){
      console.log("data: ",results);
      return res.status(400).json({ error: "Email already registered" });
    }

    let hashedPassword = await bcrypt.hash(password, 10);
    
    createUser(name, email,address, role, hashedPassword, (err) => {
      if (err) return res.status(500).json({ error: err.message });
      
      res.status(201).json({ message: "User registered successfully" });
    });
  });
};

// LOGIN
export const loginUsers = (req, res) => {
  let { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Email and password required" });

  findUserByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(401).json({ error: "Invalid email or password" });

    let user = results[0];
    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch){
      return res.status(401).json({ error: "Invalid email or password" });
    }else{
      // Create token.
          const token = jwt.sign(
            {
              userID: user.id,
              email: user.email,
              name: user.name
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );

          // Send token.
          return res.status(200).json({token,name:user.name, role: user.role});
    }
    // res.json({
    //   message: "Login successful",
    //   user: { id: user.id, name: user.name, email: user.email },
    // });
  });
};
