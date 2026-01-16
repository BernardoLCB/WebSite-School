export function Generic_Card_Apresentacao(){
    return(
        <section className="bg-[#222242] py-15">
            <section className="flex flex-col max-w-[1280px] m-auto gap-y-10">

                <header className="flex flex-col max-w-[700px] text-center m-auto">
                    <h1 className=" text-5xl bg-gradient-to-r from-blue-500  to-purple-600 bg-clip-text text-transparent">Portal de Aprendizado</h1>
                    <h3 className="text-2xl text-gray-400">Descubra um mundo de conhecimento através dos nossos módulos especializados</h3>
                </header>

                <section className="max-w-[900px] m-auto text-center">
                    <p className="text-gray-400">Bem-vindo ao nosso portal educacional! Aqui você encontrará uma coleção cuidadosamente curada de módulos de aprendizado, cada um projetado para proporcionar uma experiência de ensino excepcional e interativa.  Nossos módulos abrangem desde conceitos fundamentais até tópicos avançados, permitindo que você construa suas habilidades de forma progressiva e estruturada. Cada módulo foi desenvolvido por especialistas e inclui exercícios práticos, exemplos reais e recursos complementares.</p>
                </section>
                <section className="m-auto">
                    <button className="bg-gradient-to-r from-blue-500  to-purple-600 p-4 rounded-md cursor-pointer">Explorar Módulos </button>
                </section>
            </section>
        </section>
    );
}