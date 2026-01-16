"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import OptionsButtons from "~/app/_components/OptionButton";
import HeaderAndStopButton from "~/app/_components/HeaderAndStopButton";
import CardHelp from "~/app/_components/CardHelp";
import ErroPage from "~/app/_components/ErroPage";
import { emotionsVocabulary } from "~/app/_contents/beginner/vocabulary/emotions";


const contents = emotionsVocabulary;


export default function Page(){

    const searchQuery = useSearchParams();
    const level = searchQuery.get("level");
    const type = searchQuery.get("type");

    //alert(level);

    const listAllowsLevels:string[] = ["Elementar", "Basic", "Intermediate", "Pre-intermediate", "Intermediate" ,"Advanced"];

    if (level !== null &&  (listAllowsLevels.includes(level))){

        const [isRight, setIsRight] = useState<boolean|null>(null);
        const [randomFullList, setRandomList] = useState<number[]>([0,0,0,0].map(()=>Math.floor(Math.random()*contents.length)))
        const [randomItem, setRandomItem] = useState<number>(Math.floor(Math.random()*4))

        const [bgColor, setBgColor] = useState<string[]>(["","","",""])


        let word:string = contents[randomFullList[randomItem]].word;
        let answer:string = contents[randomFullList[randomItem]].description;


        function handlerOptionsVerification(value:string, buttonNumber:number):void{
            //isRight = null --> ainda não escolheu --> não carrega nenhuma cor
            if (value === answer){
                //isRight = true --> acertou --> carrega a cor verde
                setIsRight(true);
                setBgColor(prev=> {
                    const listColor = [...prev];
                    listColor[buttonNumber-1] = "bg-green-600";
                    return listColor;
                })

                console.log(bgColor);
            }
            else{
                //isRight = false --> errou --> carrega a cor vermelha
                setIsRight(false);
                setBgColor(prev=>{
                    const listColor = [...prev];
                    listColor[buttonNumber-1] = "bg-red-600";
                    return listColor;
                })
            }
        }

        function handlerGenereteNewProblem():void{
            setRandomList([0,0,0,0].map(()=>Math.floor(Math.random()*contents.length)));
            setRandomItem(Math.floor(Math.random()*4))
            setIsRight(null)
            console.log(`${randomFullList} / ${randomItem}`)
            setBgColor(["","","",""])
            //alert("entrei")
        }

        return(
            <main className="bg-[#101422] w-dvw h-dvh flex items-center justify-center p-5">

                    <section className="w-[1280px] items-center justify-center ">

                    {/* SECTION WITH THE HEADER AND THE STOP BUTTON */}
                    <section className="w-[1280px] items-center justify-center">
                        <HeaderAndStopButton questionWord = {word} />
                    </section>
                    <section className=" flex flex-col md:flex-row">

                        {/* SECTION WITH OPTIONS TO CHOOSE FROM */}
                        <section className="basis-2/3" >
                            <OptionsButtons onSelect={handlerOptionsVerification} num ="/numbers/numero-1.png" information = {contents[randomFullList[0]].description} bgColorStyle={bgColor[0]} buttonNumber={1}/>
                            <OptionsButtons onSelect={handlerOptionsVerification} num ="/numbers/numero-2.png" information= {contents[randomFullList[1]].description} bgColorStyle={bgColor[1]} buttonNumber={2}/>
                            <OptionsButtons onSelect={handlerOptionsVerification} num ="/numbers/numero-3.png" information= {contents[randomFullList[2]].description} bgColorStyle={bgColor[2]} buttonNumber={3} />
                            <OptionsButtons onSelect={handlerOptionsVerification} num ="/numbers/numero-4.png" information= {contents[randomFullList[3]].description} bgColorStyle={bgColor[3]} buttonNumber={4} />
                            
                            <div className=" text-center p-2">
                                <button onClick = {handlerGenereteNewProblem} className="border rounded-2xl p-2 cursor-pointer bg-gray-500">NEXT</button>
                            </div>
                        </section>
                    
                        {/* SECTION WITH HELP  */}
                        <section className="basis-1/3 bg-blue-400 max-w-[500px] rounded-3xl p-4 m-auto">
                            <CardHelp/>
                        </section>

                    </section>
                </section>

            </main>
            
        );
    }
    else{
        return(
            <div className = "">
                <ErroPage/>
            </div>
        );
    }
}