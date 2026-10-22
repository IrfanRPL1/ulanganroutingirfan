import SidebarPage from "@/components/sidebar";

const ProfilPage = () => {
    return (
        <SidebarPage title="Profil Saya">
            <p>Ini adalah halaman profil saya</p>
            <table className="table-auto 
            border-collapse border border-gray-400">
                <thead>
                    <tr>
                        <th className="border p-2">Nama</th>
                        <th className="border p-2">Umur</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">Irfan</td>
                        <td className="border p-2">17</td>
                    </tr>
                </tbody>
            </table>
        </SidebarPage>
    );
}
export default ProfilPage;