import AdminItems from "@/components/AdminItems";


const AdminLayout = ({ children }) => {
    return (
        <div className='contenedor my-3 min-h-[598px]'>            
          <h1 className='titulo'>Menú de Administrador</h1>

          <div className="w-full mt-3 flex flex-col md:flex-row gap-2">
              <AdminItems />

              <div className="flex-1 p-2">
                {children}
              </div>
          </div>
        </div>
    );
};

export default AdminLayout;