import { services } from "@/data"
import { Button } from "./ui/MovingBorder"

const Services = () => {
    return (
        <div className="py-20" id="services">
            <h1 className="heading">
                Todos mis {' '}
                <span className="text-[#63d5f8]">servicios</span>
            </h1>
            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {
                    services.map((service) => (
                        <Button
                            key={service.id}
                            duration={Math.floor(Math.random() * 10000) + 10000}
                            borderRadius="1.75rem"
                            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                        >
                            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                                <img src={service.thumbnail} alt={service.thumbnail} className="lg:w-32 md:w-20 w-16" />
                                <div className="lg:ms-5">
                                    <h3 className="text-start text-xl md:text-2xl font-bold">
                                        {service.title}
                                    </h3>
                                    <p className="text-start text-white-100 mt-3 font-semibold">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                    ))
                }
            </div>
        </div>
    )
}

export default Services