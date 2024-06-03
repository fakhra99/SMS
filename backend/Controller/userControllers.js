// import userModel from '../Model/user.js';
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

// const SECRET_KEY = "NOTEAPI";

// const signup = async (req, res) => {
//    const { username, email, password } = req.body;
//    try {
//     const existingUser = await userModel.findOne({ email: email });
//     if(existingUser){
//         return res.status(400).json({ message: "User already exists" });
//     }
//     const hashPassword = await bcrypt.hash(password, 10);

//     const result = await userModel.create({
//         email: email,
//         password: hashPassword,
//         username: username
//     });
//     const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
//     res.status(201).json({ user: result, token: token });
//    } catch(err) {
//     console.error(err);
//     res.status(500).json({ message: "Something went wrong" });
//    }
// }

// const signin = async (req, res) => {
//     const { username, password } = req.body;
//     console.log(username, password)
//     try {
//         const existingUser = await userModel.findOne({ username: username });
//         if (!existingUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const matchPassword = await bcrypt.compare(password, existingUser.password);
//         if (!matchPassword) {
//             return res.status(400).json({ message: "Invalid Credentials" });
//         }

//         const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, SECRET_KEY);
//         res.status(200).json({ user: existingUser, token: token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Something went wrong" });
//     }
// };

// export  { signup, signin };
