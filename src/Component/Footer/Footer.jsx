import React from "react"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import pdf from "../../Image/contracto.pdf"
import garantia from "../../Image/garantia.pdf"
import { IoBusinessOutline } from "react-icons/io5";
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"

const Footer =({PostHotelByIdHotel}) =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/galleryhotelmedellin", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/galleryhotelmed/", "_blank");
    };

    return (
                   <footer className="bg-black  text-white py-8">
                <div className="mx-auto max-w-7xl p-4  flex flex-col md:flex-row justify-between  md:items-center">
                <div className="block">
                    <img
                        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/Logo-Gallery-Colores.png"
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        className="w-48 mb-4 m-auto "
                    />
                        <button
                            onClick={PostHotelByIdHotel}
                            className="m-auto  w-full px-8 py-4 bg-orange-500 text-white  transition-colors">
                            Reservar
                        </button>
                </div>
                
                <div>
                    <div className="mt-6">
                        <ul className="space-y-2">
                            <li className="flex items-center"> <IconFaWhatsapp />+57 315 223 44 83</li>
                            <li className="flex items-center mr-6">  <IconsMdEmail  color={"white"}/>reservas@galleryhotel.co</li>
                            <li className="flex items-center"> <IconFaMapMarkerAlt/>Cl. 47 #41 - 55, Medellín, Colombia</li>
                        </ul>
                    
                    </div>
                    
                    <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram     onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                            </div>
                    </div>
                </div>
               
                <div className=" ">
                    <div class=" text-white flex items-center justify-between ">
                        <div class="w-full max-w-md mt-6">
                            <h2 class="text-center text-xl font-semibold mb-6">Navegación</h2>
                            <div className="block" >
                                <ul>
                                    <li><a target="_blank" href={pdf} className="text-white"> Términos y Condiciones del sitio web</a>.</li>
                                    <li> <a target="_blank" href={garantia} className="text-white"> Política de garantía</a>.</li>
                                    <li>  <a target="_blank" className="text-white"> Política de tratamiento de datos</a>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-white mt-8">
                    <div className=" flex  flex-col sm:flex-row  justify-between mt-8 mx-auto max-w-7xl items-center">
                            <div>
                            © Copyright. Todos los derechos reservados.
                            </div>
                          
                                    <div className=" ">
                                    <div className="flex space-x-4">
                                    <img 
                                        src="https://raw.githubusercontent.com/rolandoto/image-pms/refs/heads/main/payment.png" 
                                        alt="Métodos de pago" 
                                        width="200" 
                                        height="100" 
                                    />
                                    </div>
                            </div>
                        </div>
                </div>
            </footer>
    )
}
export default Footer