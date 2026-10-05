import { User } from "../models/user.model.js";

export const isRecruiter = async (req, res, next) => {
    try {
        const user = await User.findById(req.id);
        
        // If user doesn't exist or is NOT a recruiter, block them!
        if (!user || user.role !== 'recruiter') {
            return res.status(403).json({
                message: "Access denied. Only recruiters can post jobs or manage companies.",
                success: false
            });
        }

        next(); // User is a verified recruiter, allow them through!
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
};
