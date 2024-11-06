
"use client"

import Contato from "@/public/components/Contato/Contato";
import ComoFazemos from "@/public/components/ComoFazemos/ComoFazemos";
import Metodologia from "@/public/components/Metodologia/Metodologia";
import Certificados from "@/public/components/Certificados/Certificados";
import Proposito from "@/public/components/Proposito/Proposito";
import Fundador from "@/public/components/Fundador/Fundador";
import Banner from "@/public/components/Banner/Banner";
import Localizacao from "@/public/components/Localizacao/Localizacao";
import NossosClientes from "@/public/components/NossosClientes/NossosClientes";
import { useEffect } from "react";
// import { useEffect } from "react";
export default function Home() {
//  type testeTyping = {
//   teste2:string|null
//  }
 
//   let teste:string

//   useEffect(()=>{
//     console.log('Hello Next.Js');
//   },[])


   return (
    <>
          <Banner/>
          <NossosClientes/>
          <Fundador/>
          <Localizacao/>
          <Proposito />
          <Certificados/>
          <Metodologia/>
          <ComoFazemos/>
          <Contato/>
    </>

  );
}
