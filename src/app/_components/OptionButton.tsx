"use client"

import Image from 'next/image'
import { ReactElement } from 'react';

type propOptionsButtons = {
    num:string;
    information:string;
    onSelect: (value:string, buttonNumber:number)=> void;
    bgColorStyle:string;
    buttonNumber:number;
}

export default function OptionsButtons({num, information, onSelect, bgColorStyle ,buttonNumber}:propOptionsButtons){

    // let bgClass:string = "";

    // if(isRight === true){
    //     bgClass = "bg-green-600";
    // }
    // else if(isRight === false){
    //     bgClass = "bg-red-600"
    // }


    return(
        <section className="flex items-center gap-x-3 p-2">
            <Image
                src={num}
                width={35}
                height={35}
                
                alt="Picture of the author"
            />
            <section className={`w-[85%] ring p-1 ${bgColorStyle}`}>
                <button onClick={()=>onSelect(information, buttonNumber)} className='w-full cursor-pointer text-left '>{information}</button>
            </section>
        </section>
    );
}

//'w-[85%] ring p-1'
//${isRight ? 'bg-green-600' : 'bg-red-600'}