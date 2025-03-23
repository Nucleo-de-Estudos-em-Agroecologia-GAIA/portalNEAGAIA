"use client"; // adição extra video 
import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white" >
            <div className="container mx-auto flex justify-between items-center">
                {/*logo */}
                <Link href ="/">
                    <h1 className="text-4xl font-semibold">
                        NEA<span className="text-accent">.Gaia</span>
                    </h1>
                </Link> 




                {/* desktop now */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="https://www.instagram.com/gaia.uergs/">
                        <Button>Siga-me</Button>
                    </Link>
                </div>
                {/* mobile now */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
    

}
export default Header