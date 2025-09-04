import React from "react";
import { useNavigate } from "react-router-dom";

const CardRoomDetail =({features,image,title,price}) =>{

    const navigate = useNavigate();

    const handSubmitNextReservation =() =>{
        navigate("/Accomodation");
    }

    return (
        <div className="p-6  bg-white flex flex-col h-full">
  {/* Imagen */}
  <img
    src={image}
    width="100" 
    height="100"
    alt={title}
    className="w-full h-56 object-cover rounded-xl mb-6"
  />

  {/* Título */}
  <h3 className="text-[#ff7a45] text-xl md:text-2xl  mb-4">
    {title}
  </h3>

  {/* Características */}
  <ul className="text-gray-700 text-left list-disc list-inside mb-6 space-y-1 flex-1">
    {features.map((feature, idx) => (
      <li key={idx}>{feature}</li>
      
    ))}
  </ul>

  {/* Precio y botón */}
  <div className="mt-auto">
    <p className="text-gray-900 font-medium text-lg mb-4">
      Desde{" "}
      <span className="text-[20px] font-bold">
        ${parseInt(price).toLocaleString("es-CO")} COP
      </span>{" "}
      <span className="text-sm text-gray-600">(IVA incluido)</span>
    </p>
    <button
      onClick={handSubmitNextReservation}
      className="text-white bg-orange-500 w-full md:w-[180px] p-3 rounded-lg hover:bg-orange-600 transition"
    >
      <span className="text-lg">Reservar</span>
    </button>
  </div>
</div>

    )
}

export default CardRoomDetail