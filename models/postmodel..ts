import mongoose, { Document, Model } from "mongoose";
import { IUser } from "./user.model";

export interface IPost {
    desc:string,
    user:IUser,
    imageUrl?:string,
    likes?:string[],
    comments:any,
}
export interface IPostDocument extends IPost ,Document{
    createdtAt:Date,
    updatedAT:Date,
}

const PostSchema = new mongoose.Schema<IPostDocument>({
    desc:{
        type:String,
        require:true
    },
    user:{
       userId:{
        type:String,
        required:true
       },
       profilePhoto:{
        type:String,
        required:true
       },
       firstName:{
        type:String,
        required:true
       },
       lastName:{
        type:String,
        required:true
       }
    },
    imageUrl:{
        type:String,
        default:""
    },
    likes:{
        type:[String],
    },
    comments:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'comment'
    }
},{timestamps:true})
export const Post :Model<IPostDocument> = mongoose.models?.Post || mongoose.model<IPostDocument>("Post",PostSchema)