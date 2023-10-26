import Image from 'next/image'
import React from 'react'
import { ComoComprarCard } from './ComoComprarCard'

const ComoComprar = () => {
  return (
    <div className='contenedor'>
      <h1 className='font-josefin border-b-2 border-naranja text-2xl lg:text-3xl'>¿Cómo comprar?</h1>
      
      <ComoComprarCard foto={"/images/choose-game.png"} titulo='Busca Tu Juego Favorito' subTitulo='Selecciona de nuestra tienda, más de 300 títulos.' />                          
      <ComoComprarCard foto={'/images/create-account.png'} titulo='Crea Tu Cuenta' subTitulo='Completa tus datos y listo, ya tienes una cuenta.' reverse/>        
      <ComoComprarCard foto={'/images/payment.png'} titulo='Elige como pagar' subTitulo='Espera el juego en tu casa que te lo llevamos.' />        

    </div>
  )
}

export default ComoComprar