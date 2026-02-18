import Link from "next/link";

type prop = {
    option1?:React.ReactNode;
    option2?:React.ReactNode;
    option3?:React.ReactNode;
}

export default function Dropdown({option1, option2,option3}:prop){
    return(
        <div className="absolute scale-y-0 group-focus-within:scale-y-100 duration-200 origin-top bg-white text-left p-2 right-0 flex-row text-nowrap shadow-lg border rounded-lg">

            {option1 !== undefined && option1}
            {option2 !== undefined && option2}
            {option3 !== undefined && option3}
            {/* <ul className="hover:text-blue-600"><Link href={"/"}>Gerenciar a Conta</Link></ul>
            <ul className="hover:text-blue-600"><Link href={"/"}>Histórico</Link></ul>
            <ul className="hover:text-blue-600"><Link href={"/auth-page"}>Logout</Link></ul> */}
        </div>
    )
}