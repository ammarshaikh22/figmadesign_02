import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Image from "next/image"

const data = [
    {
        para: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
        img: '/Avater1.png',
        imgDes: 'Head of Talent Acquisition, North America',
        imgTitle: 'Oberon Shaw, MCH',
        color: 'text-[#053874]',
        bg: 'bg-white',
        Quote: '/Quote.png',
        textColor: 'text-black'
    },
    {
        para: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
        img: '/Avater2.png',
        imgDes: 'Head of Talent Acquisition, North America',
        imgTitle: 'Oberon Shaw, MCH',
        color: 'text-white',
        bg: 'bg-[#4F9CF9]',
        Quote: '/Quote2.png',
        textColor: 'text-white'
    },
    {
        para: 'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',
        img: '/Avater3.png',
        imgDes: 'Head of Talent Acquisition, North America',
        imgTitle: 'Oberon Shaw, MCH',
        color: 'text-white',
        bg: 'bg-[#4F9CF9]',
        Quote: '/Quote2.png',
        textColor: 'text-white'
    },
]
export function CarouselDemo() {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {data.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 " >
                        <div className="p-1 rounded-md relative">
                            <Card>
                                <CardContent className={`${item.bg} ${item.textColor} flex aspect-square px-6 py-8 min-h-[300px] max-h-[400px] w-full` }>
                                    <div className="flex flex-col gap-4 text-start">
                                        <Image src={item.Quote} alt="img" className={` ${item.color}`} width={60} height={60} />
                                        <p className="mt-2 text-base mb-6 ">{item.para}</p>
                                        <hr className={`${item.textColor}`} />
                                        <div className="flex gap-4 items-center mt-2">
                                            <Image src={item.img} alt="img" width={70} height={60} />
                                            <div>
                                                <h4 className="text-base mb-1 text-black">{item.imgTitle}</h4>
                                                <p className="text-sm">{item.imgDes}</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
