"use client"

import { separadorMiles } from "@/utils/separadorMiles"
import Image from "next/image"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = [  
  {
    accessorKey: "boxImage",        
    header: "Foto",
    cell: ({ row }) => (
      <div className="w-[55px] h-[55px] shadow-lg">
        <Image src={row.getValue('boxImage')} alt="asas" width={100} height={100} className="object-cover w-full h-full" />
      </div>
    )
  },  
  {
    accessorKey: "nombre",
    header: "Nombre",
    cell: ({ row }) => (
      <p className="">{row.getValue('nombre')}</p>
    )
  },    
  {
    accessorKey: "price",
    header: "Precio ($)",
    cell: ({ row }) => (
      <p className="">{separadorMiles(row.getValue('price'))}</p>
    )
  },
  {
    accessorKey: "category",
    header: "Categoría",
    cell: ({ row }) => (
      <p className=" first-letter:uppercase text-gray-400">{separadorMiles(row.getValue('category'))}</p>
    )
  },
  {
    id: "actions",    
    cell: ({ row }) => {
      const juego = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">  
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>                       
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem onClick={() => navigator.clipboard.writeText(juego._id)}>
              Copiar User Id
            </DropdownMenuItem> */}
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem>Eliminar</DropdownMenuItem>
            <DropdownMenuItem>Ver Juego</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
