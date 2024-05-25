import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

export default function AboutProject() {
    return (
        <main>
            <Hero title={`O projektu`}></Hero>
            <Container>
                <div className={`mt-5 mb-12 w-[50rem] max-w-full mx-auto`}>
                    <iframe className={`max-w-full`} title="vimeo-player" src="https://player.vimeo.com/video/350706963" width="800"
                            height="450"
                            allowFullScreen={true}></iframe>
                </div>
                <h2 className={`h2`}>Noste své srdce v hlavě</h2>
                <p className={`paragraph`}>Projekt „Srdce v hlavě“ vznikl ve spolupráci s předními odborníky z řad
                    lékařů – internistů a
                    kardiologů. Jeho cílem je informovat veřejnost a především pacienty o rizicích kardiovaskulárních
                    onemocnění, prevenci a léčbě, která je pilířem ochrany proti kardiovaskulárním příhodám, i nutnosti
                    jejího dodržování (tzv. adherenci).</p>
                <p className={`paragraph`}>Česká republika se řadí mezi vysoce rizikové z hlediska onemocnění
                    kardiovaskulárního systému a
                    dodržování léčby i režimových opatření je v poslední době velmi aktuálním tématem. Projekt „Srdce v
                    hlavě“ se snaží pacienty upozornit na to, aby na své srdce mysleli a nesli ve svých hlavách rizika,
                    která při nedodržování předepsané léčby mohou vést až k fatálním následkům.</p>
                <p className={`paragraph`}>Současně se pomocí tohoto projektu snažíme pacientům usnadnit cestu k
                    informacím nejen o rizicích,
                    ale i možnostech léčby, režimových opatřeních i správné komunikaci s lékařem. Především tedy pomoci
                    pacientům na svoje srdce nezapomínat.</p>
            </Container>
            <div className={`bg-[#f4f5f6]`}>
                <Container>
                    <h2 className={`h2`}>Garant</h2>
                    <div className={`flex flex-col items-center mb-7`}>
                        <Image src={`/images/o-projektu/cis.svg`} width={300} height={102}
                               alt={`Česká internistická společnost ČLS JEP`}/>
                        <p className={`font-bold text-center mt-6 mb-4`}>Česká internistická společnost ČLS JEP</p>
                        <Link className={`block text-center underline hover:no-underline`} href={`https://www.cisweb.cz`}
                              target={`_blank`}>https://www.cisweb.cz</Link>
                    </div>
                </Container>
            </div>
        </main>
    )
}
