import { FaPhone } from "react-icons/fa"
import MagicButton from "./ui/Button"
import { socialMedia } from "@/data"

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw] z-10">¿Estás listo para llevar tu <span className="text-[#63d5f8]">presencia digital</span> al siguiente nivel?</h1>
                <p className="text-white-100 md:mt-10 my-5 text-center z-10">Contáctame hoy y hablemos sobre cómo ayudarte a alcanzar tus objetivos.</p>
                <a href="mailto:contacto@chabidev.com">
                    <MagicButton
                        title="¡Hablemos!"
                        icon={<FaPhone />}
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light z-10">
                    Copyright © {new Date().getFullYear()} ChabiDev
                </p>
                <div className="flex items-center md:gap-3 gap-6">
                    {
                        socialMedia.map((social) => (
                            <div key={social.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 z-10">
                                <img src={social.img} alt={social.img} width={20} height={20} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </footer>
    )
}

export default Footer