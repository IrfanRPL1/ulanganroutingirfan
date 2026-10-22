const HeaderPage = () =>{
    return (
        <div className="flex flex-row w-full h-50">
            <div className="w-1/2 h-full flex flex-col 
            justify-center items-start bg-gray-200 py-4 px-8">
                <h1 className="text-2xl font-bold">My App</h1>
                <p>selamat datang di website CERITAKU</p>
            </div>
            <div className="w-1/2 h-full bg-cover bg-center
            bg-[url('https://sm.ign.com/t/ign_za/feature/s/spider-man/spider-man-face-off-the-winner-revealed_sdam.1200.jpg')]"></div>
        </div>
    );
}
export default HeaderPage;