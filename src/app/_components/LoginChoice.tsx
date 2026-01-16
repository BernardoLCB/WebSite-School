import type { Dispatch, SetStateAction } from "react";

type prop={
    choice:string,
    updateChoice:Dispatch<SetStateAction<string>>,
}

export default function LoginChoice({choice, updateChoice}:prop){
    return(
        <section className="flex bg-[#27272A] rounded-lg p-1 justify-center">

            <button type="button" onClick={()=>updateChoice("Entrar")} className="w-[50%] p-2 cursor-pointer focus:bg-black rounded-lg text-white">Entrar</button>

            <button type="button" onClick={()=>updateChoice("Criar Conta")} className=" w-[50%] cursor-pointer focus:bg-black rounded-lg text-white">Criar Conta</button>
            
        </section>
    );
}