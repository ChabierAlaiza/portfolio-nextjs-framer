import { workExperiences } from "@/data"
import { HoverEffect } from "./ui/HoverEffect"

const Experience = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">
                Mi <span className="text-[#63d5f8]"> experiencia</span>
            </h1>
            <HoverEffect
                items={workExperiences}
            />

        </section>
    )
}

export default Experience