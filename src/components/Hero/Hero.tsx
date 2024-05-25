type HeroProps = {
    title: string;
}
const Hero = ({title}: HeroProps) => {
    return (
        <div className={`bg-hero bg-center bg-cover py-20 relative`}>
            <div className={`absolute w-full h-full top-0 left-0 bg-overlay`}></div>
            <h1 className={`text-white relative text-[2.625rem] text-center`}>{title}</h1>
        </div>
    )
}

export default Hero;
