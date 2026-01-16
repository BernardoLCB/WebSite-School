"use client"

import Link from "next/link";
import { useState, type ReactEventHandler } from "react";
import { convertCompilerOptionsFromJson } from "typescript";
import Input from "~/app/_components/Input";
import LoginChoice from "~/app/_components/LoginChoice";

export default function Auth_Page(){

    const [choice, setchoice] = useState<string>("Entrar")
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("")
    const [register, setRegister] = useState<string>("")
    const [ConfirmePassword, SetConfirmePassword] = useState<string>("")
    
    //this function will run every time when the form get submitted
    function handleSubmit(event):void{
        event.preventDefault();
        alert(`login: ${login} --> password: ${password}`);
        
        if(choice ==="Criar Conta" && password !== ""){
            if(register === password){
                alert("senha bateu com a do registro")
            }
            else{
                alert("senha não bate com a do registro")
            }
        }
        
        //SetLogin(event.target.value);

    }

    //this function runs every time when the inputs labels change
    function handleChange(type:string, event):void{
        if (type ==="Email"){
            setLogin(event.target.value);
        }
        else if (type =="Senha"){
            setPassword(event.target.value);
        }
        setRegister(event.target.value);
    }


    return(
        <main className="h-dvh bg-[#101422] flex items-center justify-center ">

            <form onSubmit={handleSubmit} className="w-[500px] bg-[#0A0B0F] ring rounded-xl p-4 text-white">
                <header className="text-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-transparent">Portal Educacional</h1>
                    <h3 className="text-sm text-gray-400">Acesse sua conta para continuar aprendendo</h3>
                </header>

                <section className="p-4">
                    <LoginChoice choice = {choice} updateChoice = {setchoice}/>
                </section>

                <section>
                    <Input
                        title="Email"
                        kind="text"
                        text="seu@email.com"
                        onChange = {handleChange}
                        
                    />
                    <Input
                        title="Senha"
                        kind="password"
                        text="Digite sua senha"
                        onChange = {handleChange}
                    />

                    {choice === "Criar Conta" && <div>
                    <Input
                        title="Confirme a Senha"
                        kind="password"
                        text="Digite sua senha novamente"
                        onChange = {handleChange}
                    />
                    </div>
                    }

                </section>
                
                <label>
                    <input type="checkbox" />
                    <span className="p-2">lembrar de mim</span>
                </label>

                <section className="flex bg-gradient-to-r from-blue-500 to-purple-600 justify-center rounded-lg">
                    <button onChange={(e) =>setLogin(e.target.value)} className="w-[100%] h-[100%] text-black font-semibold text-sm cursor-pointer hover:bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg p-2">{choice}</button>
                </section>
               
               <section className="p-4">
                <Link href={""}>Esqueceu a senha?</Link>
               </section>

            </form>
        </main>
    );
}