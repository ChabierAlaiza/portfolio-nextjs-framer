"use client"

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        id: number;
        name: string;
        company: string;
        duration: string;
        functions: string[];
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedItem, setSelectedItem] = useState<number>(1);

    return (
        <div className="flex flex-col lg:flex-row py-10 gap-20 justify-center items-center max-w-4xl mx-auto">
            <div
                className={cn(
                    "grid grid-cols-2 lg:flex lg:flex-col",
                    className
                )}
            >
                {items.map((item, idx) => (
                    <div
                        key={item?.id}
                        className="relative group w-full cursor-pointer"
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedItem(idx + 1)}
                    >
                        <div className="relative my-2">
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className="absolute inset-0 w-full bg-neutral-200 dark:bg-slate-800 block rounded-sm"
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <Card
                                className={selectedItem === item?.id ? "bg-neutral-200 dark:bg-slate-800" : ""}
                            >
                                <div className="flex flex-col gap-2 items-center">
                                    <CardDescription>{item.duration}</CardDescription>
                                    <CardTitle>{item.name}</CardTitle>
                                </div>

                            </Card>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 border-white/[0.1] border rounded-3xl bg-white-100/[0.1] p-5">
                <CardContent
                    functions={items[selectedItem - 1].functions}
                >
                    <h3 className="text-xl font-semibold">
                        {items[selectedItem - 1].name} <span className="text-[#63d5f8]">@{items[selectedItem - 1].company}</span>
                    </h3>
                    <span className="text-white-100 text-sm">{items[selectedItem - 1].duration}</span>
                </CardContent>
            </div>
        </div>
    );
};

export const Card = ({
    className,
    children
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-sm h-full w-full overflow-hidden border border-transparent relative z-10",
                className
            )}
        >
            <div className="relative z-50">
                <div className="py-1 px-2">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 text-sm font-normal tracking-wide", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardContent = ({
    className,
    functions,
    children,
}: {
    className?: string;
    functions?: string[];
    children: React.ReactNode;
}) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            {children}
            {
                functions?.map((func, idx) => (
                    <div key={idx} className="flex flex-row gap-2 items-center">
                        <FaCheck color="#63d5f8" />
                        <p className="text-white-100 text-sm">{func}</p>
                    </div>
                ))
            }
        </div>
    );
}
