"use client"

import React, { useState } from "react";
import { Input } from "./Input";

export default function Card_Auth(){
    
    const [opcao, setopcao] = useState<string>("Entrar")

    function handleClick(event:React.MouseEvent<HTMLButtonElement>){
        let choice: string = event.currentTarget.name;
        setopcao(choice)
    }

    return(
        <section className="w-[500px] bg-[#0A0B0F] ring rounded-xl p-4">
            <header className="text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-transparent">Portal Educacional</h1>
                <h3 className="text-sm text-gray-400">Acesse sua conta para continuar aprendendo</h3>
            </header>

            <section className="p-4">
                <section className="flex bg-[#27272A] rounded-lg p-1 justify-center">
                    <button name="Entrar" onClick={handleClick} className="w-[50%] p-2 cursor-pointer focus:bg-black rounded-lg">Entrar</button>
                    <button name="Criar Conta"onClick={handleClick} className=" w-[50%] cursor-pointer focus:bg-black rounded-lg">Criar Conta</button>
                </section>
            </section>

            <section>
                <Input
                    title="Email"
                    kind="text"
                    text="seu@email.com"
                />
                <Input
                    title="Senha"
                    kind="password"
                    text="Digite sua senha"
                />
            </section>
            <section className="flex bg-gradient-to-r from-blue-500 to-purple-600 justify-center rounded-lg  p">
                <button className="w-[100%] h-[100%] text-black font-semibold text-sm cursor-pointer hover:bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg p-2">{opcao}</button>
            </section>

        </section>
    );
}