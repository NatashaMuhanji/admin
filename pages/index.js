import Layout from "@/components/layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const {data: session} = useSession();
  console.log({session});
  return <Layout>
    <div className="text-blue-900 flex justify-between">
       <h2>Hello, <strong>{session?.user?.name}</strong>.</h2>
       <div className="flex bg-gray-300 gap-1 text-black p-1 rounded-md">
        <img src={session?.user?.image} alt="Pic" className="w-6 h-6 rounded-md" />
        {session?.user?.name}
       </div>
    </div>
  </Layout>
}
