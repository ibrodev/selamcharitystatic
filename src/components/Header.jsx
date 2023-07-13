
const Header = () => {
  return (
    <header className="relative flex bg-banner-img bg-cover bg-center h-screen w-full">
        <div className="absolute top-0 left-0 w-full h-full bg-zinc-950/70 z-0"></div>

    <div className="container mx-auto px-4 z-10 h-full flex flex-col">
        <nav className="py-6 flex justify-between items-center">
            <a href="https://ibrodev.github.io/selamcharitystatic/" className="text-white flex items-center flex-col w-max gap-1">
                <span className="text-4xl font-semibold">Selam</span>
                <span className="w-52 text-center leading-snug text-sm">Charity & Development Association</span>
            </a>

            <ul className="text-base text-slate-400 gap-4 flex items-center">
                <li><a href="https://ibrodev.github.io/selamcharitystatic/" className="hover:text-white text-white">Home</a></li>
                <li><a href="#who-we-are" className="hover:text-white">Who We Are</a></li>
                <li><a href="#causes" className="hover:text-white">Causes</a></li>
                <li><a href="#photo-gallery" className="hover:text-white">Photo Gallery</a></li>
                <li><a href="#contact-us" className="hover:text-white">Contact Us</a></li>
                {/* <button className="px-4 py-1 bg-sky-600 text-white rounded-sm hover:bg-sky-700">Donate</button> */}
            </ul>
        </nav>

        <h1 className="flex-1 flex text-white items-center justify-center text-[4rem] text-center w-3/4 max-w-xl mx-auto font-semibold leading-none">
        A man’s true wealth is the good he dose in this world
        </h1>
        {/* <button className="px-6 py-3 bg-sky-600 text-white rounded hover:bg-sky-700 w-max mx-auto mb-28">Make a Donation</button> */}
    </div>

    </header>
  )
}

export default Header