import Nav from "@/components/nav";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Layout({children}) {
  const { data: session } = useSession()
  if(!session){
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={()=>signIn('google')} className="bg-white p-2 px-4 rounded-lg">Login with Google</button>
        </div>
      </div>
    );
  }
  return(
    <div className="bg-blue-900 min-h-screen flex">
    <Nav/>
      <div className="text-blue-900 p-3 m-2 ml-0 rounded-md bg-white flex-grow">{children}</div>
    </div>
  );

}
