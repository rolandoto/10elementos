import React from "react"
import { IconCiFacebook, IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"


const Footer =() =>{

    return (
            <footer className="bg-black   text-white py-8">
                <div className="mx-auto max-w-7xl p-4  flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex ">
                <img src="https://textycon.com/wp-content/uploads/Logo-Gallery-Colores.png" alt="Gallery Hotel" className=" w-[220px] mb-4" /> {/* Adjust the path accordingly */}   
                </div>
                <div className=" ">
                    <ul className="space-y-2">
                    <li className="flex items-center"> <IconFaWhatsapp /> +57 315 223 44 83</li>
                    <li className="flex items-center mr-6">  <IconsMdEmail />  reservas@galleryhotel.co</li>
                    <li className="flex items-center"> <IconFaMapMarkerAlt/>  Cl. 47 #41 - 55, Medellín, Colombia</li>
                    </ul>
                    <div className="flex  justify-center space-x-4 mt-4">
                        <IconFaInstagram />
                        <IconFaFacebookF />
                        <IconFaYoutube />
                    </div>
                </div>
                <div className=" ">
                    <div class="bg-black text-white flex items-center justify-center ">
                        <div class="w-full max-w-md">
                            <h2 class="text-center text-xl font-semibold mb-6">CONTACTO</h2>
                            <form class="space-y-4">
                                <div class="grid grid-cols-2 gap-4">
                                    <input class="col-span-1 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" placeholder="Nombre"/>
                                    <input class="col-span-1 bg-white text-black p-3  focus:outline-none focus:ring-2 focus:ring-orange-500" type="email" placeholder="Email" />
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <input class="col-span-1 bg-white text-black p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" type="text" placeholder="Telefono"/>
                                    <button type="submit" class="bg-black text-white border border-white p-3  focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-white hover:text-black">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-white mt-8">
                    <div className=" flex  flex-col sm:flex-row  justify-between mt-8 mx-auto max-w-7xl items-center">
                            <div>
                                Copyright © 2024 – All Rights Reserved Gallery Hotel
                            </div>
                                    <div className=" ">
                                    <div className="flex space-x-4">
                                    <img src="https://textycon.com/wp-content/uploads/payment.png" alt="" />
                                    </div>
                            </div>
                        </div>
                </div>
            </footer>
    )
}
export default Footer