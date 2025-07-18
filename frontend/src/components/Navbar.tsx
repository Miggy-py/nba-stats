import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white text-gray-800 p-4 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Image
                        src="/favicon.webp"
                        alt="Logo"
                        width={40}
                        height={40}
                        priority
                        className="w-8 h-8 object-contain"
                    />
                    <Link href="/" className="text-2xl font-bold tracking-wide">
                        NBA Stats
                    </Link>
                </div>

                <div className="space-x-6 text-sm sm:text-base">
                    <Link href="/players" className="hover:text-red-400 transition">
                        Players
                    </Link>
                    <Link href="/teams" className="hover:text-red-400 transition">
                        Teams
                    </Link>
                    <Link href="/leaderboards" className="hover:text-red-400 transition">
                        Leaderboards
                    </Link>
                    <Link href="/about" className="hover:text-red-400 transition">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
