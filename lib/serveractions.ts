"use server"

import { currentUser } from "@clerk/nextjs/server"

const createPostAction = async (inputText:string,selectedFile:string)=>{
    const user = await currentUser();
    if(!user) throw new Error("User not athenticated")
    if(!inputText) throw new Error("Input field requred")

    const image = selectedFile;

try {
    if(selectedFile){

    }else{
        
    }
} catch (error:any) {
    throw new Error(error)
}
}