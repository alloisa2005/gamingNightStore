
import React from 'react'
import JuegosListCard from './JuegosListCard'

const getJuegos = async () => {
  const res = await fetch('http://localhost:3000/api/juegos');
  return await res.json();  
}

const JuegosList = async () => {

  const juegos = await getJuegos();  

  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        juegos.map(juego => (
          <JuegosListCard key={juego._id} juego={juego} />
        ))
      }            
    </div>
  )
}

export default JuegosList