import SearchBar from "@/components/SearchBar";

const JuegosLayout = ({ children }) => {
  return (
    <div className='contenedor my-3'>
      <h1 className="titulo">Juegos</h1>

      <SearchBar />

      <div className='w-full mt-4 flex gap-2 font-josefin'>
        {/* Filtros */}
        <div className="flex flex-col gap-2 p-2 w-[18%] border border-naranja">
          <p className="font-bold">Filtros:</p>
        </div>

        {/* Lista de Juegos */}
        <div className='flex-1 p-2'>{children}</div>
      </div>

    </div>
  )
};

export default JuegosLayout;