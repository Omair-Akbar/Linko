import React, { useRef, useState} from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { FaImage } from "react-icons/fa6";
import { readFileAsDataUrl } from "@/lib/utils"
import Image from 'next/image'


export function PostDialog({ user, setOpen, open, src }: { user: any, setOpen: any, open: boolean, src: string }) {
  
  const [selectedFile,setSelectedFile] = useState<string>("");
  const [inputText,setInputText] = useState<string>("")
   
  const inputRef = useRef<HTMLInputElement>(null);
  
  const fileChangeHandler= async (e:React.ChangeEvent<HTMLInputElement>)=>{
    const file = e?.target?.files?.[0]
    if(file){
      const dataUrl = await readFileAsDataUrl(file)
    setSelectedFile(dataUrl)
    }
  }

  const postActionHandler = async(formData:FormData)=>{
    const inputText = formData.get("inputText") as string
   try {
    await createPostAction(inputText,selectedFile);
   } catch (error) {
    console.log("error11111111111111111")
   }

  }

  return (
    <Dialog open={open}>
      <DialogContent onInteractOutside={() => { setOpen(false) }} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex gap-2">
            <ProfilePhoto src={src} />
            <div>
              <h1 className="p-2 pb-1">{`${user?.firstName} ${user?.lastName}`}</h1>
              <p className="p-2 pt-0 text-[12px] font-light">Post to Anyone</p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <form action={postActionHandler}>
          <div className="flex flex-col">
            <Textarea onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>{setInputText(e.target.value)}} value={inputText} id="name" name="inputText" className="border-none text-lg focus-visible:ring-0" placeholder="What do you want to talk about?" />
            <div className="my-4 ">
              {
                selectedFile && <Image alt="Preview" height={400} width={400} src={selectedFile}/>
              }
              
            </div>
          </div>
        <DialogFooter>
          <div className="flex items-center gap-4">
          <input ref={inputRef} onChange={fileChangeHandler} type="file" name="image" className="hidden" accept="image/*" />
          <Button className="rounded-full bg-blue-600 px-5" type="submit">Post</Button>
          </div>
        </DialogFooter>
        </form>
        <div className="flex">
        <Button className="gap-2" onClick={()=>{inputRef?.current?.click()}} variant={"ghost"}>
        <FaImage className="text-xl text-slate-700"/>
        <p>Media</p>
        </Button>
        <Button className="gap-2" onClick={()=>{inputRef?.current?.click()}} variant={"ghost"}>
        <Plus className="text-slate-700"/>
        <p>More</p>
        </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
