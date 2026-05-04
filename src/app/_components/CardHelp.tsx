"use client"

export default function CardHelp(){
    return(
        <section className="">
            <header>
                <h1 className="text-center text-3xl p-2">AJUDA</h1>
            </header>

            <section className="flex text-center justify-center gap-x-4-3">
                
                <div className="flex justify-center p-2">
                    <button className="flex flex-col border-3 rounded-2xl border-black p-4 bg-yellow-200 cursor-pointer hover:bg-gray-600">
                        <span className="text-5xl">🃏</span>
                        <span className="text-black pt-3">DICA</span>
                    </button>
                </div>

                <div className="flex justify-center p-2">
                    <button className="flex flex-col border-3 rounded-2xl border-black p-4 bg-yellow-200 cursor-pointer hover:bg-gray-600">
                        <span className="text-5xl">✂️</span>
                        <h2 className="text-black pt-3">ELIMINAR OPÇÕES</h2>
                    </button>
                </div>
            </section>
        </section>

    );
}