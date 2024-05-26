import Container from "@/components/Container/Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <footer className={`bg-red`}>
            <div className={`container`}>
                <div className={`py-10 flex justify-center`}>
                    <div className={`grid grid-cols-2 gap-12`}>
                        <div>
                            <h3 className={`text-white text-xl text-center mb-4`}>Partner</h3>
                            <Link href={`https://www.servier.cz/`}>
                                <Image src={`/images/footer/servier.svg`} alt={``} width={150} height={42}/>
                            </Link>
                        </div>
                        <div>
                            <h3 className={`text-white text-xl text-center mb-4`}>Garant</h3>
                            <Link href={`https://www.cisweb.cz/`}>
                                <Image src={`/images/footer/cis.svg`} alt={``} width={150} height={52}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
}
