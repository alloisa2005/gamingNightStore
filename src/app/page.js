
import ComoComprar from "@/components/ComoComprar";
import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import VisitarTienda from "@/components/VisitarTienda";
import { latestJuegos, nuevosJuegos, usadosJuegos } from "@/data/juegos";

export const metadata = {
  title: "Gaming Night Store | Inicio",  
};

export default async function Home() {    

  return (        
    <>
      <Hero />
           
      {/* <FilaJuegos titulo={'Recién agregados'} juegos={latestJuegos} />

      <FilaJuegos titulo={'nuevos'} juegos={nuevosJuegos}/>

      <FilaJuegos titulo={'usados'} juegos={usadosJuegos}/> */}

      <ComoComprar />

      <VisitarTienda />
    </>
  )
}
