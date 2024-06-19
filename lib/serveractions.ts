"use server"
import { Post } from "@/models/postmodel.";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server"
import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
export const createPostAction = async (inputText: string, selectedFile: string) => {
    await connectDB();
    const user = await currentUser();
    if (!user) throw new Error("User not athenticated")
    if (!inputText) throw new Error("Input field requred")

    const image = selectedFile;
    const userDatabase: IUser = {
        firstName: user.firstName || "user",
        lastName: user.lastName || "name",
        userId: user.id,
        profilePhoto: user.imageUrl,
    }
    let uploadResponse;
    try {
        if (selectedFile) {
            uploadResponse = await cloudinary.uploader.upload(image)
            await Post.create({
                desc: inputText,
                user: userDatabase,
                imageUrl: uploadResponse?.secure_url


            })
            revalidatePath("/")
        } else {
            await Post.create({
                desc: inputText,
                user: userDatabase,
            })
        }
        revalidatePath("/")

    } catch (error: any) {
        throw new Error(error)
    }
}


// GET ALL POST FROM SERVER ACTION
export const getAllPosts = async () => {
    await connectDB();
    try {
        const posts = await Post.find().sort({ createdAt: -1 })
        return JSON.parse(JSON.stringify(posts))
    } catch (error) {
        console.log(error)
    }
}


// delete post by id 
export const deletePostAction = async(postId:string) => {
    await connectDB();
    const user:any = await currentUser();
    console.log()
    if(!user)  throw new Error("User Not Authenticated")
    const post = await Post.findById(postId)
    if(!post) throw new Error ("Post not found")

    if(post.user.userId !== user?.id){
       throw new Error("You are not owner of this post") 
    }
try {
    await Post.deleteOne({_id:postId})
    revalidatePath("/");
} catch (error) {
    throw new Error("Something went wrong")
}
}

