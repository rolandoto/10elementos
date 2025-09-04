import React from "react";
import { useNavigate } from "react-router-dom";

const RoomPresentaion =() =>{
    const navigate = useNavigate();

    const HandNext = () =>{
        navigate("/Accomodation");
    }

    return (  <div className="bg-[#fff5f2] py-16 md:py-20 px-4">
  <div className=" mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-10">
    
    {/* Texto */}
    <div className="md:w-1/2 p-4">
      <h2 className="text-3xl md:text-4xl font-lora text-center md:text-left text-[#ff7a45]">
        Reserva tu habitación hoy mismo
      </h2>
      <p className="text-gray-700 text-justify mt-6">
        Nuestras habitaciones están diseñadas para ofrecer comodidad y estilo, a la vez que te sumergen en la vibrante escena artística de Medellín. Cada habitación está decorada con obras de artistas locales, creando un ambiente único e inspirador.
      </p>
      <p className="text-gray-700 text-justify mt-4">
        Gallery Hotel está ubicado en el corazón del centro de Medellín, a solo unos pasos de las principales atracciones turísticas, restaurantes y bares. La ubicación perfecta para explorar la ciudad y descubrir todo lo que tiene para ofrecer.
      </p>
      <div className="flex justify-center md:justify-start">
        <button 
          onClick={HandNext}  
          className="text-white bg-orange-500 mt-6 w-[200px] p-3 rounded-lg hover:bg-orange-600 transition"
        >
          <span className="text-[20px]">Reservar</span>
        </button>
      </div>
    </div>
    
    {/* Imagen */}
    <div className="md:w-1/2 p-4 flex justify-center">
      <img 
        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/MG_8585-scaled.jpg" 
        alt="Reservation" 
        className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-lg"
      />
    </div>
  </div>
</div>

)
  

}

export default RoomPresentaion