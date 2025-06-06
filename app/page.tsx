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
import ContatoDesk from "@/public/components/Contato/ContatoDesk/ContatoDesk";
import ComoFazemosDesk from "@/public/components/ComoFazemos/ComoFazemosDesk/ComoFazemosDesk";
import CertificadosDesk from "@/public/components/Certificados/CertificadosDesk/CertificadosDesk";
import FundadorDesk from "@/public/components/Fundador/FundadorDesk/FundadorDesk";
import LocalizacaoDesk from "@/public/components/Localizacao/LocalizacaoDesk/LocalizacaoDesk";
import NossosClientesDesk from "@/public/components/NossosClientes/NossosClientesDesk/NossosClientesDesk";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowVal,setWindowVal] = useState<any>()

useEffect(()=>{
  setWindowVal(window)
},[])

  
  if(!windowVal) return<></>
    const controlWindowLargura = windowVal?.innerWidth;

    return(
        
      <> 
      {controlWindowLargura >= 1008?
       <>
         <Banner/>
         <NossosClientes/>
         <FundadorDesk/>
         <LocalizacaoDesk/>
         <Proposito />
         <CertificadosDesk/>
         <Metodologia/>
         <ComoFazemosDesk/>
         <ContatoDesk/>
       </>
       :
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
       }
      </>
   )
}