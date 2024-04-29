import mongoose from "mongoose";

const projectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        budget: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['Planning', 'In Progress', 'Completed', 'On Hold'],
            default: 'Planning'
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

export const Project = mongoose.model('Project', projectSchema);
