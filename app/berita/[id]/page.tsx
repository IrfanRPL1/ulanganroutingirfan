import Card from "@/components/card";
import SidebarPage from "@/components/sidebar";
import { BeritaItems } from "@/data/berita";
import Image from 'next/image'

type Props = Promise<{
    id: string
}>
const DetailBerita = async ({ params }: { params: Props }) => {
    const { id } = await params;
    const beritaId = BeritaItems.find((i) => i.id === Number(id))
    if (!beritaId) return <h1 className="text-2xl">
        Data tidak ada</h1>
    return (
        <SidebarPage title="Detail berita">
            <Card className="border-2 border-blue-200">
                <Image src={beritaId.image} alt={beritaId.judul} width={200}
                    height={200} className="w-full px-40" />
                <h1 className="text-3xl text-center">{beritaId.judul}</h1>
                <p>{beritaId.isi}</p>
            </Card>
        </SidebarPage>
    );
}
export default DetailBerita;