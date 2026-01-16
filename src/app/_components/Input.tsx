"use client"

type prop ={
    title:string
    kind:string;
    text:string;
    onChange:(type:string, event)=>void;
}

export default function Input( { title, kind, text, onChange} :prop){
    return(
        <section className="text-center p-2 text-white">
            <header className="text-left text-white">
                <h1>{title}</h1>
            </header>
            <section className="p-2">
                <input onChange={(event)=>onChange(title, event)} className="ring rounded-sm p-2 w-[100%] text-white" type={kind} placeholder={text}/>
            </section>
        </section>
    );
}