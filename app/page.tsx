import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {

  const user = await currentUser();
  return (<>
    <Navbar />
    <div className="mt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8 ">
        <Sidebar user={user} />
        <Feed user={user} />
        <News />
      </div>
    </div>
  </>
  );
}
