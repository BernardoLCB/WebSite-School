"use client"

import Link from "next/link";

type prop = {
    title?:string;
    conteudo:string,
    descricao:string,
    emoji:string;
}

export function Modulos({title, conteudo, descricao, emoji}:prop){
    return(
        <section className="flex gap-x-4 bg-gradient-to-br from-gray-800 to-black rounded-md border border-blue-800 p-4 max-w-[400px] hover:cursor-pointer">

            <figure className="">
                <p className="bg-gradient-to-r from-blue-500  to-purple-600 p-4 rounded-2xl text-2xl">{emoji}</p>
            </figure>

            <header className="flex flex-col gap-y-4">
                <h1 className="text-2xl text-white">{conteudo}</h1>
                <h3 className="text-gray-400">{descricao}</h3>
                <button className="flex"><Link className="bg-gradient-to-r from-blue-500  to-purple-600 p-4 justify-start rounded-md" href= {`../gamepage?level=${title}&type=${conteudo}`}> Acessar Módulo ➔ </Link></button>
            </header>

            <section>

            </section>
        </section>
    );
}