import Link from "next/link";
import Input from "./Input";
import LoginChoice from "./LoginChoice";

export default function LoginForm({choice, handleSubmit, handleChange}:{choice:string,handleSubmit:()=>void, handleChange:()=>void}){
    return(
        <div>
            <form onSubmit={handleSubmit} className="w-[500px] bg-[#0A0B0F] ring rounded-xl p-4 text-white">
                <header className="text-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-transparent">Portal Educacional</h1>
                    <h3 className="text-sm text-gray-400">Acesse sua conta para continuar aprendendo</h3>
                </header>

            {/* Entrar and Criar Conta buttons */}

                <section className="p-4">
                    <LoginChoice choice = {choice} updateChoice = {setchoice}/>
                </section>

            {/* Imput Section */}

                <section>
                    <Input
                        title="Email"
                        kind="text"
                        text="seu@email.com"
                        onChange = {handleChange}
                        
                    />
                    <Input
                        title="Senha"
                        kind="password"
                        text="Digite sua senha"
                        onChange = {handleChange}
                    />

                    {choice === "Criar Conta" && <div>
                    <Input
                        title="Confirme a Senha"
                        kind="password"
                        text="Digite sua senha novamente"
                        onChange = {handleChange}
                    />
                    </div>
                    }

                </section>
                
                <label>
                    <input type="checkbox" />
                    <span className="p-2">lembrar de mim</span>
                </label>

                <section className="flex bg-gradient-to-r from-blue-500 to-purple-600 justify-center rounded-lg">
                    <button onChange={(e) =>setLogin(e.target.value)} className="w-[100%] h-[100%] text-black font-semibold text-sm cursor-pointer hover:bg-gradient-to-r from-blue-700 to-purple-800 rounded-lg p-2">{choice}</button>
                </section>
               
               <section className="p-4">
                <Link href={""}>Esqueceu a senha?</Link>
               </section>

               <button type="submit" name="asdadsad" value="123456">
                asdadadasdasdasd
               </button>

            </form>
        </div>
    )
}