import React from "react";

const CardRoomDetail =({features,image,title}) =>{

    return (
        <div  className="  p-6 rounded-lg relative ">
            <img src={image} alt={title} className="w-full rounded-lg mb-4" />
                <h3 className=" words  text-[#ff7a45] text-[23px]  mb-4">{title}</h3>
                <ul className="text-gray-700 h-[180px] text-left list-disc list-inside">
                {features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                ))}
               
                </ul>        
                <div className="PriceRoomDetail">
                    <div >
                        <strong className=" text-[20px] " >Desde $129.000</strong>
                    </div>
                </div>
                                
        </div>
                )
}

export default CardRoomDetail