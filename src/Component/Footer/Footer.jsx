import React from "react"
import {  IconFaFacebookF, IconFaInstagram, IconFaMapMarkerAlt, IconFaWhatsapp, IconFaYoutube, IconsMdEmail } from "../Icons/Icons"
import pdf from "../../Image/contracto.pdf"
const Footer =() =>{

    const handleFacebook = () => {
        window.open("https://www.facebook.com/galleryhotelmedellin", "_blank");
    };

    const handleInstagram = () => {
        window.open("https://www.instagram.com/galleryhotelmed/", "_blank");
    };

    return (
            <footer className="bg-black   text-white py-8">
                <div className="mx-auto max-w-7xl p-4  flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex">
                    <img
                        src="https://github.com/rolandoto/image-pms/blob/main/Logo-Gallery-Colores.png?raw=true"
                        alt="Logo de Gallery Hotel" 
                        width="100" 
                        height="100"
                        className="w-48 mb-4"
                    />
                </div>

                <div>
                    <div className="">
                        <ul className="space-y-2">
                            <li className="flex items-center"> <IconFaWhatsapp /> +57 315 223 44 83</li>
                            <li className="flex items-center mr-6">  <IconsMdEmail />  reservas@galleryhotel.co</li>
                            <li className="flex items-center"> <IconFaMapMarkerAlt/>  Cl. 47 #41 - 55, Medellín, Colombia</li>
                        </ul>
                    
                    </div>
                    
                    <div className="w-[350px] lg:w-[280px] lg:w-122 " >
                            <div className="flex justify-center space-x-4 mt-4">
                                <IconFaInstagram   onclick={handleInstagram} />
                                <IconFaFacebookF  onclick={handleFacebook} />
                                
                            </div>
                    </div>
                </div>
               
               
                <div className=" ">
                    <div class=" text-white md:block flex  md:justify-center  w-full items-end justify-center ">
                    <div class="w-full max-w-7xl mt-6">
                        <h2 class="text-center text-xl font-semibold mb-6"></h2>
                    
                    </div>
                        <div className=" bottom-0  right-5 w-40 h-[100px] md:w-60 md:h-60">
                    <div className="map-container" style={{ width: "100%", height: "100%" }}>
                        <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.6054137513!2d-75.5631796!3d6.2437756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428575a0dc0d1%3A0xbc26f43cbd055cc8!2sGallery%20Hotel%20Medell%C3%ADn!5e0!3m2!1sen!2sve!4v1730845631930!5m2!1sen!2sve"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    </div>
                    </div>
                </div>
              
                </div>
                <div className="text-center border-t-1  mx-auto max-w-7xl  text-white mt-8">
                    <div className=" flex  flex-col sm:flex-row  justify-between mt-8 mx-auto max-w-7xl items-center">
                            <div>
                            © Copyright. Todos los derechos reservados
                            </div>
                            <a target="_blank" href={pdf} className="text-white "> Términos y Condiciones del sitio web</a>.
                                    <div className=" ">
                                    <div className="flex space-x-4">
                                    <img 
                                        src="https://github.com/rolandoto/image-pms/blob/main/payment.png?raw=true" 
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