import type { ReactElement } from "react";

type prop = {
    title:string ;
    content1:ReactElement;
    content2:ReactElement ;
    content3:ReactElement;
    
}

export default function Container_Modulos( {title, content1, content2, content3} : prop ){

    //alert(title);

    return(
        <div className="p-4 bg-[#222242]">
            <section className=" p-2">
                <header className="text-center text-4xl p-1 font-semibold text-white">
                    {title}
                </header>

                <section className = "flex flex-wrap justify-center gap-4">
                    {content1}
                    {content2}
                    {content3}
                </section>
            </section>
        </div>
        );
 
}