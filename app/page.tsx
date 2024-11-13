
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

export default function Home() {

  const a = window   
  if(!a) return<></>
    const controlWindowLargura = a?.innerWidth;

    console.table(controlWindowLargura)
    //se a minha tela tiver mais do que 1008px ou igual a 1008px
   
      return(
        
         <> 
         {controlWindowLargura >= 1008?
          <>
            <Banner/>
            <NossosClientesDesk/>
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
