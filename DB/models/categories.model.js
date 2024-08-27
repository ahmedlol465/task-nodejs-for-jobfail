import { Schema, model } from "mongoose";


const categorySchema = new Schema({
    // strings
    name: {
        type: String,
        required: true,
        trim: true
    },

    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // updatedBy: { type: Schema.Types.ObjectId, ref: 'User' } 

})

categorySchema.virtual("tasks", {
    ref: 'Task',
    localField: '_id',
    foreignField: 'categoryId'
})


export default model("category", categorySchema)