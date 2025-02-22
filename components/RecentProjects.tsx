import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"
import Link from "next/link"

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                Algunos de mis {' '}
                <span className="text-[#63d5f8]">últimos proyectos</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-7 mt-10">
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                        <Link href={link || "/"}
                            target={"_blank"}>

                            <PinContainer
                                title="Visitar"
                                href={link}

                            >
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className="absolute -bottom-4 rotate-2 w-[95%] rounded-md" />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {title}
                                </h1>
                                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-2">
                                    {des}
                                </p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div key={index} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{
                                                transform: `translateX(-${5 * index * 2}px)`
                                            }}>
                                                <img src={icon} alt={icon} className="p-2" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-lg md:text-xs text-sm text-[#63d5f8]">Ver demo en vivo</p>
                                        <FaLocationArrow className="ms-3" color="#63d5f8" />
                                    </div>
                                </div>
                            </PinContainer>
                        </Link>
                    </div>
                ))
                }
            </div >
        </div >
    )
}

export default RecentProjects