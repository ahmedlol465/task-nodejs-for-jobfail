// Importing required modules from Mongoose
import { Schema, model } from "mongoose";
import { systemRoles } from "../../src/uitils/system.role.js";


// Defining the User Schema using Mongoose Schema
const taskSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        taskType: [{
            textTask: {
                type: Boolean,
                default: true,
                
            },
            listTask: {
                type: Boolean,
                default: false
            }
        }],
        shared: {
            type: Boolean,
            default: true
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "Catagory",
            required: true
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },

    {
    // Enabling automatic timestamps for createdAt and updatedAt
        timestamps: true,
        toJSON: {virtuals:true},
        ObjectId: {virtuals:true}
    }
);

taskSchema.virtual("reviews", {
    ref: 'User',
    localField: '_id',
    foreignField: 'productId'
})

// Creating and exporting the User model using the defined schema
export default model("Task", taskSchema);
