
import ComoComprar from "@/components/ComoComprar";
import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import VisitarTienda from "@/components/VisitarTienda";

export const metadata = {
  title: "Gaming Night Store | Inicio",  
};

export default async function Home() {    

  return (        
    <>
      <Hero />
           
      <FilaJuegos titulo={'Recién agregados'} query={'latest'} />

      {/* <FilaJuegos titulo={'destacados'} /> */}

      {/* <FilaJuegos titulo={'usados'} juegos={usadosJuegos}/> */}

      <ComoComprar />

      <VisitarTienda />
    </>
  )
}
