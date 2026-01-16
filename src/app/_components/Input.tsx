type prop ={
    title:string
    kind:string;
    text:string;
}

export function Input( { title, kind, text } :prop){
    return(
        <section className="text-center p-2 ">
            <header className="text-left">
                <h1>{title}</h1>
            </header>
            <section className="p-2">
                <input className="ring rounded-sm p-2 w-[100%]" type={kind} placeholder={text}/>
            </section>
        </section>
    );
}