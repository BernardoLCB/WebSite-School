"use client"

type prop ={
    onSelect: (level:string)=> void;
    level:string;
};

export default function TabButton({onSelect, level}:prop){
    return(
        <div>
            <button onClick={()=>onSelect(level)} className="ring p-2 cursor-pointer rounded-lg focus:bg-gray-600 hover:bg-gray-500"> {level}</button>
        </div>
    );
}