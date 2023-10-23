import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";
import { latestJuegos, nuevosJuegos, usadosJuegos } from "@/data/juegos";

export default function Home() {
  return (        
    <>
      <Hero />  
           
      <FilaJuegos titulo={'Recién agregados'} juegos={latestJuegos} />

      <FilaJuegos titulo={'nuevos'} juegos={nuevosJuegos}/>

      <FilaJuegos titulo={'usados'} juegos={usadosJuegos}/>
    </>
  )
}
