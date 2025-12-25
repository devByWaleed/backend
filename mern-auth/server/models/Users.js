import mongoose from "mongoose"

// Creating user schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Automatically added
    verifyOTP: { type: String, default: "" },
    verifyOTPExpireAt: { type: Number, default: 0 },
    isAccountVerified: { type: Boolean, default: false },
    resetOTP: { type: String, default: "" },
    resetOTPExpireAt: { type: Number, default: 0 },
})


// .model gets collection name & schema
const UserModel = mongoose.models.user || mongoose.model("user", UserSchema, "accounts")


// Exporting the model
export default UserModel