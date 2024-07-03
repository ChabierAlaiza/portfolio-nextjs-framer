export const navItems = [
    { name: "Sobre Mí", link: "#about" },
    { name: "Proyectos", link: "#projects" },
    { name: "Servicios", link: "#services" },
    { name: "Contacto", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "Personalización y adaptabilidad a tus necesidades",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexibilidad a las diferentes zonas horarias",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Mis tecnologías",
        description: "Estas son las tecnologías que utilizo",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Desarrollo FullStack",
        description: "Desarrollo tanto el frontend como el backend de tu aplicación web",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 6,
        title: "¿Quieres empezar tu proyecto conmigo?",
        description: "Contáctame",
        className: "lg:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Sitio y aplicación web I-Lish",
        des: "Sitio web con Live Shopping para I-Lish y aplicación de gestión interna.",
        img: "/project-ilish.png",
        iconLists: ["ts.svg", "/angular.png", "/c-sharp.png", "/net.png", "/mysql.png", "/wordpress.png", "/git.svg"],
        link: "https://ilish-web.test.diaple.com"
    },
    {
        id: 2,
        title: "Página web Axial CRM con e-commerce",
        des: "Desarrollo del sitio web para la aplicación de Axial CRM con sistema de e-comerce.",
        img: "/project-axial.png",
        iconLists: ["/ts.svg", "/angular.png", "/wordpress.png", "/git.svg"],
        link: "https://www.axialcrm.com/es/",
    },
    {
        id: 3,
        title: "Módulo PadelManager para PT Suite",
        des: "Desarrollo del módulo PadelManager en la aplicación PadelTrain, para la gestión deportiva de un club.",
        img: "/project-padeltrain.png",
        iconLists: ["/ts.svg", "/angular.png", "/c-sharp.png", "/net.png", "/sql-server.png", "ionic.webp"],
        link: "https://www.padeltrain.com",
    },
    {
        id: 4,
        title: "Portfolio Personal",
        des: "Mi portfolio personal, desarrollado con NextJs, TailwindCSS y Framer Motion para animaciones.",
        img: "/project-portfolio.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"]
    },
];


export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const services = [
    {
        id: 1,
        title: "Desarrollo de Sitios Web y Aplicaciones Web Responsive",
        desc: "Creación sitios web y aplicaciones web modernos, a medida y adaptables, brindando experiencias de usuario excepcionales en todos los dispositivos.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Integración de APIs y Desarrollo Backend",
        desc: "Amplia experiencia en el desarrollo backend y la integración de APIs para potenciar la funcionalidad de sitios web y aplicaciones.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Optimización de Velocidad y Rendimiento",
        desc: "Me especializo en mejorar la velocidad y el rendimiento de sitios web, garantizando tiempos de carga rápidos y una experiencia fluida.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Desarrollo de E-commerce",
        desc: "Desarrollo tiendas online personalizadas, efectivas y fáciles de usar, potenciando las ventas y optimizando la gestión de inventario.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 5,
        title: "Optimización SEO",
        desc: "Ofrezco servicios de SEO integral para mejorar la visibilidad en motores de búsqueda y aumentar el tráfico orgánico.",
        className: "md:col-span-2",
        thumbnail: "/exp6.png",
    },
    {
        id: 6,
        title: "Mantenimiento y Soporte Técnico",
        desc: "Ofrezco servicios de mantenimiento y soporte técnico para asegurar un funcionamiento continuo y sin problemas de los sitios y aplicaciones web.",
        className: "md:col-span-2",
        thumbnail: "/exp5.png",
    }
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];

export const workExperiences = [

    {
        id: 1,
        name: "Desarrollador Fullstack Autónomo",
        company: "Freelance",
        duration: "2020 - Actualidad",
        functions: [
            "Desarrollo de sitios web con WordPress para diferentes clientes.",
            "Desarrollo de aplicaciones web con ANGULAR para el frontend.",
            "Creación de APIs con C#, ASP .Net Core y MySQL.",
            "Maquetación web con HTML, CSS y JS.",
            "Mantenimiento de sitios web."
        ]
    },
    {
        id: 2,
        name: "Desarrollador Web Fullstack",
        company: "Diaple Networking SL",
        duration: "2021 - 2023",
        functions: [
            "Maquetación web con HTML, CSS y JS.",
            "Desarrollo Backend C# con entorno ASP.Net Core, Entity Framework y MySQL",
            "Desarrollo Frontend con ANGULAR 6 y posteriores.",
            "Experiencia con PHP y Laravel.",
            "Desarrollo de sitios web personalizados con WordPress."
        ]
    },
    {
        id: 3,
        name: "Director Academia de Pádel",
        company: "Elite Padel Academy",
        duration: "2023 - Actualidad",
        functions: [
            "Dirección de la Academia de Pádel.",
            "Monitor de la Escuela de Competición y Alto Rendimiento.",
            "Coaching en competiciones.",
            "Gestión de la academia."
        ]
    },
    {
        id: 4,
        name: "Técnico Nacional de Pádel",
        company: "Pádel Zaragoza 2008 SL",
        duration: "2015 - 2023",
        functions: [
            "Monitor de pádel en escuela de menores y de adultos en todos los niveles.",
            "Monitor de la Escuela de Competición y Alto Rendimiento.",
            "Coaching en competiciones de menores.",
            "Subdirector de la Escuela de Competición.",
            "Gestión y planificación de entrenamientos diaria, mensual y anual.",
            "Gestión y organización de actividades, eventos y torneos del club."
        ]
    }
]
