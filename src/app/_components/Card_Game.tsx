"use client"
import body_parts from '../../_contents/beginner/body_parts'
import OptionsButtons from "./OptionButton";
import Image from 'next/image';
import { Allerta } from 'next/font/google';
import { useState } from 'react';

export default function CardGame(){
    
    let main_randon_number = Math.floor(Math.random()*(body_parts.length-1));
    //console.log(main_randon_number)
    var [options, setoptions] = useState<number[]>([0,0,0,0,0]);
    var [estilo, setestilo] = useState<string[]>(['w-full cursor-pointer text-left', 'w-full cursor-pointer text-left bg-green-400']);

    function handlerGeneredWord(){
        //console.log(options)
        setoptions(options.map(()=>Math.floor(Math.random()* (body_parts.length-1))));
    }

    function handlerOption(event:React.MouseEvent<HTMLButtonElement>){
        let choice:string = event.currentTarget.name;
        //console.log(choice);
        //console.log(body_parts[options[0]].word)
        if(body_parts[options[0]].meaning === choice){
            alert("acertou");
            setestilo('w-full cursor-pointer text-left bg-green-600');
        }
        else{
            alert('errou')
            setestilo('w-full cursor-pointer text-left')
        }
    }

    function OptionsButtons({num,information,style}:{num:string,information:string, style:string}){
    
        return(
            <section className="flex items-center gap-x-3 p-2 ">
                <Image
                    src={num}
                    width={35}
                    height={35}
                    
                    alt="Picture of the author"
                />
                <section className='w-[85%] ring p-1'>
                    <button name= {information} onClick={handlerOption} className={estilo}>{information}</button>
                </section>
            </section>
        );
    }


    return(
        <section className="w-[1280px] items-center justify-center">

            {/* CABEÇALHO CONTEM TITULO E PARAR */}
                <section className="flex p-5">
                    
                <header className="basis-3/4 flex justify-center items-center">
                    <span className="ring text-center w-[100%] p-2 font-bold text-lg"> {body_parts[options[0]].word} </span>
                </header>

                <div className="basis-1/4 flex justify-center items-center">
                    <button onClick={handlerGeneredWord} className="ring p-2 cursor-pointer">parar</button>
                </div>

            </section>

            {/* CARD QUE CONTEM AS OPÇÕES DE MARCAR */}

            <section className="flex flex-col md:flex-row">
                <section className="basis-2/3">
                    <OptionsButtons num ="/numbers/numero-1.png" information={body_parts[options[0]].meaning} />
                    <OptionsButtons num ="/numbers/numero-2.png" information={body_parts[options[1]].meaning} />
                    <OptionsButtons num ="/numbers/numero-3.png" information={body_parts[options[2]].meaning} />
                    <OptionsButtons num ="/numbers/numero-4.png" information={body_parts[options[3]].meaning} />
                    <OptionsButtons num ="/numbers/numero-5.png" information={body_parts[options[4]].meaning} />
                </section>

            {/* CABEÇALHO CONTEM AS AJUDAS */}

                <section className="basis-1/3 bg-blue-400 max-w-[500px] rounded-3xl p-4 m-auto">
                    <header>
                        <h1 className="text-center text-3xl p-2">AJUDA</h1>
                    </header>

                    <section className="flex-wrap text-center justify-center gap-x-4-3">
                        
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

            </section>

        </section>
    );
    
}