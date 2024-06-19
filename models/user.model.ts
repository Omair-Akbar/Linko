import mongoose, { Document, Model } from "mongoose";

export interface IUser {
    firstName: string,
    lastName: string,
    userId: string,
    profilePhoto?: string,
    bio?: string,
}
export interface IUserDocument extends IUser, Document {
    createdtAt: Date,
    updatedAT: Date,
}

const userSchema = new mongoose.Schema<IUserDocument>({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    profilePhoto: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },

}, { timestamps: true })
export const user: Model<IUserDocument> = mongoose.models?.user || mongoose.model<IUserDocument>("user", userSchema)