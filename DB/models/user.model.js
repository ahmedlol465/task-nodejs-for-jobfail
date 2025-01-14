// Importing required modules from Mongoose
import { Schema, model } from "mongoose";
// import { systemRoles } from "../../src/uitils/system.role.js";


// Defining the User Schema using Mongoose Schema
const UserSchema = new Schema(
{
    // User's username
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    // User's email address
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true

    },
    // User's password
    password: {
        type: String,
        required: true,
        trim: true,
    },
    // User's mobile number

    // User's role (User or Company HR)
    // role: {
    //     type: String,
    //     // enum: [systemRoles.USER, systemRoles.ADMIN, systemRoles.SUPER_ADMIN, systemRoles.DELIVERY_ROLE],
    //     enum: Object.values(systemRoles), // to support all values in systeem roles
    //     default: systemRoles.USER,
    // },
    // isloggedIn: {
    //     type: Boolean,
    //     default: false
    // }
    },
    {
    // Enabling automatic timestamps for createdAt and updatedAt
    timestamps: true,
    }
);

// Creating and exporting the User model using the defined schema
export default model("User", UserSchema);
