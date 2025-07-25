import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full bg-white text-black py-4 border-b border-slate-200 drop-shadow-lg">
            <div className="flex justify-center lg:justify-between container mx-auto">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">Receitas deliciosas</Link>
                <nav className="hidden lg:flex lg:gap-6">
                    <Link className="hover:text-blue-500 transition-colors" href="/">
                    Início
                    </Link>
                
                    <Link className="hover:text-blue-500 transition-colors" href="/receitas">
                    Receitas
                    </Link>
                </nav>
            </div>
        </header>
    )
}