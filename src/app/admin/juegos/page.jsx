import { DataTable } from '@/components/data-table'
import JuegosList from '@/components/JuegosList'
import React from 'react'
import { columns } from './columns'

const getJuegos = async () => {
  const res = await fetch('http://localhost:3000/api/juegos')
  const data = await res.json()  
  return data;
}

const Juegos = async () => {

  const data = await getJuegos();  

  return (
    <div>
      {/* <JuegosList /> */}      
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Juegos