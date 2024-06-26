import React from "react"
import moment from "moment";

const CardCheckout =({ID,room_image,title,Price,cantidad,nights,person,Room,end,start,Price_nigth}) =>{

    
    const dateStart=  moment(start).format('YYYY-MM-DD');
    const dateEnd=  moment(end).format('YYYY-MM-DD');
    

    return ( <div>
                <div className="mb-4 flex  justify-between items-end">
                    <div className="text-gray-700  mt-3 text-sm">
                            <p className="text-sm  font-semibold">{title}</p>
                            <p className="font-normal text-[13px]" >Entrada: <span className="font-normal text-[13px]">{dateStart}</span></p>
                            <p className="font-normal text-[13px]" >Salida: <span className="font-normal text-[13px]">{dateEnd}</span></p>
                            <p className="font-normal text-[13px]" >Regimen/plan: <span className="font-normal text-[13px]">Alojamiento y Desayuno</span></p>
                            <p className="font-normal text-[13px]">Ocupacion: <span className="font-normal text-[13px]">{person} Adultos</span></p>
                            <p className="font-normal text-[13px]">Noche: <span className="font-normal text-[13px]">{nights} </span></p>
                    </div>
                    <div className=" text-right">
                            <span className="text-2xl font-bold">{parseInt(Price).toLocaleString()} COP</span>
                    </div>
                </div>
                <div className="bg-black   text-white p-4 rounded-lg">
                    <div className="flex items-center mb-4">
                    <img 
                        src={room_image}
                        alt="Standard Doble" 
                        className="w-24 h-24 object-cover mr-4 rounded-lg"
                    />
                    <div>
                        <p>{title}</p>
                        <p className="font-bold">{parseInt(Price_nigth).toLocaleString()} COP  más por noche.</p>
                    </div>
                    </div>
                </div>
            </div>
    )

}

export default CardCheckout