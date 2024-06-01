// middleware.js
import jwt from 'jsonwebtoken';

export const middlewarefunc = (req, res, next) => {
    try {
        // Check if the request has an Authorization header and if it starts with "Bearer".
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res.status(403).json({ message: "Access denied, token missing" });
            }
            jwt.verify(token, process.env.PRIVATE_KEY, (err, user) => {
                if (err) {
                    return res.status(403).json({ message: "You are not authorized" });
                }
                req.user = user;
                next();
            });
        } else {
            return res.status(403).json({ message: "Access denied, token missing" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

// Admin role check 
export const checkAdminRole = (req, res, next) => {
    const userRole = req.user && req.user.role;
    if (userRole !== 'admin') {
        return res.status(403).json({ message: "Access denied, only admins are allowed" });
    }
    next();
};