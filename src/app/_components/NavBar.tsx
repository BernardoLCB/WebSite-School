import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdowns";
import { signOut } from "next-auth/react";

export default function Navbar({image = "user"}:{image?:string}){
    return(
        <nav className="flex bg-gray-400 p-4">
            <header className="w-[70%] text-center text-2xl">
                <h1> Portal de Aprendizado</h1>
            </header>
            <section className="flex w-[100%] justify-end items-center">
                <section>
                    <button className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer">Home</button>
                </section>
                <section>
                    <button className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer">About</button>
                </section>
                <section>
                    {/* {alert(image)} */}
                    {image === "not informatad" &&                 
                    <section>
                        <Link className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer" href={"/auth-page"} >Login</Link>
                    </section> }

                    {image !== "not informatad" &&
                    <button className = "group relative border-lg rounded-2xl pr-4 pl-4 ">
                        <img className="w-[50] h-[50] border-2 roundebd-4xl hover:bg-blue-700 cursor-pointer" src={image} alt=""/>
                        <Dropdown
                        option1={<ul className="hover:text-blue-600"><Link href={"/"}>Gerenciar a Conta</Link></ul>}
                        option2={<ul className="hover:text-blue-600"><Link href={"/"}>Histórico</Link></ul>}
                        option3={<ul className="hover:text-blue-600"><span onClick={()=>signOut()}>LogOut</span></ul>}/>
                    </button>
                    }

                </section>
            </section>
        </nav>
    );
}