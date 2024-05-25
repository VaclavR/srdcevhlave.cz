import Hero from "@/components/Hero/Hero";
import Container from "@/components/Container/Container";

export default function AboutProject() {
    return (
        <main>
            <Hero title={`O projektu`}></Hero>
            <Container>
                <div className={`mt-5 mb-12 w-[50rem] max-w-full mx-auto`}>
                    <iframe title="vimeo-player" src="https://player.vimeo.com/video/350706963" width="800"
                            height="450"
                            allowFullScreen={true}></iframe>
                </div>
                <h2 className={`h2`}>Noste své srdce v hlavě</h2>
                <p className={`paragraph`}>Projekt „Srdce v hlavě“ vznikl ve spolupráci s předními odborníky z řad lékařů – internistů a
                    kardiologů. Jeho cílem je informovat veřejnost a především pacienty o rizicích kardiovaskulárních
                    onemocnění, prevenci a léčbě, která je pilířem ochrany proti kardiovaskulárním příhodám, i nutnosti
                    jejího dodržování (tzv. adherenci).</p>
                <p className={`paragraph`}>Česká republika se řadí mezi vysoce rizikové z hlediska onemocnění kardiovaskulárního systému a
                    dodržování léčby i režimových opatření je v poslední době velmi aktuálním tématem. Projekt „Srdce v
                    hlavě“ se snaží pacienty upozornit na to, aby na své srdce mysleli a nesli ve svých hlavách rizika,
                    která při nedodržování předepsané léčby mohou vést až k fatálním následkům.</p>
                <p className={`paragraph`}>Současně se pomocí tohoto projektu snažíme pacientům usnadnit cestu k informacím nejen o rizicích,
                    ale i možnostech léčby, režimových opatřeních i správné komunikaci s lékařem. Především tedy pomoci
                    pacientům na svoje srdce nezapomínat.</p>
            </Container>
        </main>
    )
}
