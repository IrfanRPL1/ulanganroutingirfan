import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title: string;
}
const SidebarPage = ({ children, title }: Props) => {
    return (
        <div className="flex flex-row w-full min-h-[calc(100vh-200px)]">
            <div className="w-64 bg-gray-100 flex flex-col">
                <Link href="/" className="p-4 
                hover:bg-gray-200">Home</Link>
                <Link href="/profil" className="p-4
                hover:bg-gray-200">Profil</Link>
                <Link href="/berita" className="p-4 
                hover:bg-gray-200">berita</Link>
            </div>
            <div className="w-full bg-white flex-1">
                <h1 className="text-2xl font-bold p-4">
                    {title}</h1>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
export default SidebarPage;