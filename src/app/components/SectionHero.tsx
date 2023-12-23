'use client'

import Image from "next/image";
import GridContainer from "./Grid";

import IconFile from '/public/icon-file.svg';
import IconHand from '/public/icon-hand.svg'
import IconHand02 from '/public/icon-hand-02.svg'
import IconMockup from '/public/mockup.svg'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function SectionHero() {
    // Referencias dos elementos - retorna o .current
    const textHeroRef = useRef(null);
    const mockupLeftRef = useRef(null);
    const mockupRightRef = useRef(null);

    useEffect(() => {
        const textHero = textHeroRef.current;
        const mLeft = mockupLeftRef.current;
        const mRight = mockupRightRef.current;

        // Elemento - { Início - fim da animação}
        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20 //px - de baixo para cima
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out'
        });

        gsap.fromTo(mLeft, {
            rotate: 0,
            duration: 1
        }, {
            rotate: -10
        });

        gsap.fromTo(mRight, {
            rotate: 0,
            duration: 1
        }, {
            rotate: 10
        });
    }, []);

    return (
        <section className="relative w-full h-section-hero bg-green-primary border-t border-t-green-border">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-xl font-medium text-green-actived my-4">Novo curso focado em instagram</h3>
                    <h1 className="text-white text-7xl font-semibold mb-2">Destrave suas habilidades</h1>
                </div>
                <div className="flex items-center justify-center gap-10">
                    <button className="flex items-center gap-2">
                        <Image
                            src={IconFile}
                            alt="Icon File"
                        />
                        <span className="text-white font-medium">Assinar lista de espera</span>
                    </button>
                    <button className="flex items-center py-4 px-5 bg-greenbtn rounded-full bg-green-btn text-green-primary font-bold hover:brightness-95 transition-all duration-75">
                        Começar agora
                    </button>
                </div>
                <div className="relative w-full h-28 max-w-area-icons mt-4">
                    <Image
                        src={IconHand}
                        alt="Icon Hand"
                        className="absolute left-0 bottom-0"
                    />
                    <Image
                        src={IconHand02}
                        alt="Icon Hand"
                        className="absolute top-0 right-0"
                    />
                </div>
                <div className="absolute -bottom-40 w-full max-w-area-mockups flex justify-between">
                    <Image
                        src={IconMockup}
                        alt="Icon Mockup"
                        className="relative top-[1.1rem] left-[3.3rem]"
                        ref={mockupLeftRef}
                    />
                    <Image
                        src={IconMockup}
                        alt="Icon Mockup"
                        className="relative top-[1.1rem] right-[3.3rem]"
                        ref={mockupRightRef}
                    />
                </div>
            </GridContainer>
        </section>
    )
}