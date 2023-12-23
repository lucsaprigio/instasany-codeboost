import Image from "next/image";
import GridContainer from "./Grid";

import IconFile from '/public/icon-file.svg';

export function SectionHero() {
    return (
        <section className="w-full h-section-hero bg-green-primary border-t border-t-green-border">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-text-hero text-center">
                    <h3 className="text-xl font-medium text-green-actived mb-4">Novo curso focado em instagram</h3>
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
                    <button className="py-4 px-5 bg-greenbtn rounded-full bg-green-btn">
                        Começar agora
                    </button>
                </div>
            </GridContainer>
        </section>
    )
}