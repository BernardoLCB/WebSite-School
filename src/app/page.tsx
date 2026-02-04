"use client"

import { useState } from "react";
import Navbar from "./_components/NavBar";
import { Generic_Card_Apresentacao } from "./_components/CardAprensentacao";
import TabButton from "./_components/TabButton";
import Container_Modulos from "./_components/ContainerModulos";
import { Modulos } from "./_components/Modulos";
import Footer from "./_components/Footer";
import { useSession } from "next-auth/react";

//possivel ideai: implementar um jogo como se fosse o "jogo do milhão"

export default function HomePage() {

  const {data:session, status} = useSession();

  let name:string|null|undefined;
  let image:string|null|undefined;

  if (status == "authenticated"){
    name = session.user.name;
    image = session.user.image;
  }
  else if( status == "unauthenticated"){
    name = "not informatad";
    image = "not informatad";
  }
  

  const [title, setTitle] = useState<string>("null");
  const [isClicked, setIsClicked] = useState<boolean>(false)

  function handlerContent(value:string){
    setIsClicked(true)
    setTitle(value)

  }

  return(
    <>
      <Navbar/>
      <Generic_Card_Apresentacao/>


      {/* <p>
        {if(status == "authenticated"){
          session.data?.user.name ?? false
        }}
      </p> */}
      
      {/* <Card_Modulos/> */}

        <div className="bg-blue-950 border pb-3">

          <section className="max-w-[1280px] m-auto py-2">
              <section className="">
                  <header className="flex flex-col justify-center items-center text-center py-5">
                      <h1 className="text-4xl pt-4 pb-4">Escolha Seu Módulo de Aprendizado</h1>
                      <h3 className="text-lg text-gray-400 max-w-[600px]">Selecione o módulo que mais desperta seu interesse e comece sua jornada de aprendizado</h3>
                  </header>
              </section>
          </section>

          <menu className="pb-4">
            <div className="flex gap-x-10 justify-center ">
              <TabButton onSelect = {handlerContent} level = "Elementar"/>
              <TabButton onSelect = {handlerContent} level = "Basic"/>
              <TabButton onSelect = {handlerContent} level = "Pre-intermediate"/>
              <TabButton onSelect = {handlerContent} level = "Intermediate"/>
              <TabButton onSelect = {handlerContent} level = "Advanced"/>
            </div>
          </menu>
          
        </div>

        {isClicked && <section className="">
          <Container_Modulos title = {title}

          content1={
          <Modulos
            title = {title}
            conteudo = "Vocabulary"
            descricao = "Revisão do beginner, present continuous, going to, like/love/hate + ing."
            emoji = "🐣"/>
          }

          content2={
            <Modulos
              title = {title} 
              conteudo = "Verbs"
              descricao = "Comparatives, superlatives, past simple mais amplo, vocabulário de viagens, comidas e rotinas."
              emoji = "🐣"/>
          }

          content3={
            <Modulos
              title = {title}
              conteudo = "Phrasal Verbs"
              descricao = "Future with will, present perfect (ever/never) introdutório, how much/many, adverbs of frequency."
              emoji = "🐣"/>
          }
                />
          
        </section>}
        
      <Footer/>
    </>
  );
}