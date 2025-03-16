import Link from "next/link";
import ThemeToggle from "./Darkmode";


export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white p-4 shadow-lg z-10">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-extrabold tracking-tight">Bhai ki Guidance</h1>
                <div className="space-x-6">
                    <Link href='/' className="hover:text-blue-300 transition duration-300 ease-in-out">Home</Link>
                    <Link href='/about' className="hover:text-blue-300 transition duration-300 ease-in-out">About</Link>
                    <ThemeToggle/>
                </div>
            </div>
        </nav>
    )
}