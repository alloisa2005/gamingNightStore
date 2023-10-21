import FilaJuegos from "@/components/FilaJuegos";
import Hero from "@/components/Hero";

export default function Home() {
  return (        
    <>
      <Hero />       
      <FilaJuegos titulo={'Recién agregados'}/>

      <FilaJuegos titulo={'nuevos'}/>

      <FilaJuegos titulo={'usados'}/>
    </>
  )
}
