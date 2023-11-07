import { useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          xmlns="http://www.w3.org/2000/svg"
          className="none rotate-180 mx-auto mt-5 animate-[propel_5s_infinite] fixed z-30 flex items-center cursor-pointer left-10 top-6 h-16 w-16 text-gray-500 ease-in-out duration-700 "
          fill="#2563EB"
          viewBox="0 0 10 14"
          aria-hidden="true"
          
          
        >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>         
            </svg>   

      )}

      <div
        className={`top-0 left-0 w-[35vw] bg-neutral-900  pl-10 text-white fixed h-full z-40  ease-in-out duration-1000 shadow-2xl shadow-black ${
          showSidebar ? "translate-y-0 " : "translate-y-full" 
        }`}
      >
        <div className="mt-20">
            <h1 class="flex font-semibold text-slate-200 text-5xl">
                Maneras de  <span class="animate-waving-hand">👋🏻</span>
            </h1>
            <h1 className="text-5xl font-semibold text-slate-200 py-4">
                Hello Valentina!
            </h1>
            
            <h1 className="text-5xl font-semibold text-slate-200 py-4">
                Hola Valentina!
            </h1>
            <h1 className="text-5xl font-semibold text-slate-200 py-4">
                Hallo Valentina!
            </h1>
            <h1 className="text-5xl font-semibold text-slate-200 py-4">
                Salut Valentina!
            </h1>
            <h1 className="text-5xl font-semibold text-slate-200 py-4">
                Ciao Valentina!
            </h1>

            <p className="text-lg pr-5">
                Espero que te encuentres muy bien.<br></br>
                Te quiero felicitar con la decoración que hiciste en el trabajo, realmente te quedo increible.<br></br><br></br>
                Te mando un calido abrazo y espero que descanses bien  🙂
                <br></br><br></br>
                PD:Gracias por mostrarme The Warning, ando escuchando la banda
            </p>
        </div>
        
        
        </div>
     

        
 

     
    </>
  );
};

export default Sidebar;
