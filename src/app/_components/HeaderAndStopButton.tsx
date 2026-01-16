"use client"

type prop = {
    questionWord:string;
}

export default function HeaderAndStopButton({questionWord}:prop){
    return(
        <section className="flex p-5">
            <header className="basis-3/4 flex justify-center items-center">
                <span className="ring text-center w-[100%] p-2 font-bold text-lg bg-gray-300"> {questionWord} </span>
            </header>
            <div className="basis-1/4 flex justify-center items-center">
                <button className="ring p-2 cursor-pointer bg-gray-500">parar</button>
            </div>
        </section>
    );
}