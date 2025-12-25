import UserModel from "../models/Users.js";

export const getUserData = async (req, res) => {

    try {
        const userID = req.userID;

        const user = await UserModel.findById(userID)

        if (!user) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        return res.json({
            success: true,
            userData: {
                name: user.name,
                isAccountVerified: user.isAccountVerified
            }
        })
    }

    catch (error) {
        return res.json({ success: false, message: error.message })
    }
}