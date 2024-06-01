import User from "../Model/adminsignup.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// register
export const register = async (req, res) => {

    try {
        console.log("Called")
        const {username, email, password} = req.body
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ message: "User Already exists" });
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({username, email, password: hashPassword });
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//login
export const login = async (req, res,next) => {
    try{
        const user = await User.findOne({email: req.body.email});
        
        if(!user) return next(console.log("user not found"));

        const isCorrect = bcrypt.compareSync(req.body.password,user.password);
        if(!isCorrect) return next(console.log(400,"Wrong password or email!"));

        const token = jwt.sign({
            id: user._id, 
            role: user.role
        },
        process.env.PRIVATE_KEY, { expiresIn: "1m" })
// destructuring to create new object info(contains all properties of the user._doc object except password. 
// the user data retrieved from a database, and this step ensures that the password is not included in the response.
        const {password, ...info} = user._doc;
        res.status(200).json({message:"success", user:info, token})
    }catch(err){
        next(err)
    }
}