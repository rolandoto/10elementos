import React from "react"


const TitleWelcome  =() =>{

    return (
            <div className="flex flex-col  mt-24  mx-auto max-w-7xl  md:flex-row items-center my-12 p-4">
                <div className="md:w-1/2 p-4">
                    <img src={"https://textycon.com/wp-content/uploads/MG_8585-scaled.jpg"} alt="Room" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-normal text-orange-600 mb-4 font-lora text-[30px] text-center ">¡Donde el arte y la hospitalidad se unen!</h2>
                <p className="text-gray-700 text-justify	 mb-4">
                    Bienvenido a Gallery Hotel, ubicado en el corazón del vibrante centro de Medellín. Inspirado en la rica cultura callejera de la ciudad, nuestro hotel ofrece un espacio único donde podrás conectarte con el arte urbano y disfrutar de una experiencia memorable.
                </p>
                <p className="text-gray-700 text-justify	 ">
                    Nuestras habitaciones están decoradas con obras de artistas locales, creando un ambiente estimulante y acogedor. Además, contamos con una terraza en la azotea con impresionantes vistas de la ciudad, un bar donde podrás disfrutar de cócteles artesanales y un restaurante que sirve cocina local con un toque moderno.
                </p>
                </div>
            </div>)

}

export default TitleWelcome