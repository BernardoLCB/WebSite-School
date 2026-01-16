export default function Navbar(){
    return(
        <nav className="flex bg-gray-400 p-4">
            <header className="w-[70%] text-center text-2xl">
                <h1> Portal de Aprendizado</h1>
            </header>
            <section className="flex w-[100%] justify-end items-center">
                <section>
                    <button className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer">Home</button>
                </section>
                <section>
                    <button className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer">About</button>
                </section>
                <section>
                    <button className = "border-lg rounded-2xl hover:bg-blue-700 pr-4 pl-4 cursor-pointer">User</button>
                </section>
            </section>
        </nav>
    );a
}