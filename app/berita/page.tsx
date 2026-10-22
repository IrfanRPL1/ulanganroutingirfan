import SidebarPage from "@/components/sidebar";
import Card from "@/components/card";
import Image from "next/image";
import { BeritaItems } from "@/data/berita";
import Link from "next/link";
const BeritaPage = () => {
    return (
        <SidebarPage title="Berita terkini">
            <p>Ini adalah halaman berita.</p>
            <div className="grid grid-cols-3 gap-4">
                {BeritaItems && BeritaItems.length > 0 ? (
                    BeritaItems.map((berita) => (
                        <Card key={berita.id} className="border-2 border-green-500">
                            <Image src={berita.image}
                                alt={berita.judul} width={300} className="w-full"
                                height={200} />
                            <h1 className="text-xl font-bold mt-2">{berita.judul}</h1>
                            <p>{berita.isi.slice(0, 50)} ...</p>
                            <div className="text-right">
                            <Link href={`/berita/${berita.id}`}>Read More</Link></div>
                        </Card>
                    ))
                ) : (
                    <div>
                        <h1 className="text-2xl text-center">Data tidak ditemukan</h1>
                    </div>
                )}
            </div>
        </SidebarPage>
    );
}
export default BeritaPage;