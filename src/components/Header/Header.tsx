'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

const navLinks = [
    {title: 'Nezapomínejte na své srdce', slug: 'dodrzovani-lecby'},
    {title: 'Rizikové faktory', slug: 'rizikove-faktory'},
    {title: 'Možnosti léčby', slug: 'moznosti-lecby'},
    {title: 'Aktuality', slug: 'aktuality'},
    {title: 'O projektu', slug: 'o-projektu'}
]

export default function Header() {
    const pathname = usePathname()
    console.log('pathname', pathname)
    return (
        <header className={`fixed w-full bg-white z-10`}>
            <div className={`container flex justify-between items-center py-[1.34375rem]`}>
                <Link href={`/`}>
                    <Image src={'/images/logo.png'} alt={'Logo Srdce v hlavě'} width={250} height={57}/>
                </Link>
                <nav>
                    <ul className={`flex gap-5`}>
                        {navLinks.map((navLink) => {
                            return (
                                <li className={`nav-link ${pathname.includes(navLink.slug) ? 'nav-link-active': ''}`}
                                    key={navLink.slug}>
                                    <Link className={`text-inherit`} href={`/${navLink.slug}`}>{navLink.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>)
}
