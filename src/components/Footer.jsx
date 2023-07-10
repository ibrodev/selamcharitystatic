
const Footer = () => {
  return (
    <footer className="flex bg-slate-950 w-full">

    <div className="container mx-auto px-4 z-10 h-full flex flex-col py-24 items-center gap-4">
    <a href="/" className="text-white flex items-center flex-col w-max gap-1 ">
                <span className="text-4xl font-semibold">Selam</span>
                <span className="w-52 text-center leading-snug text-sm">Charity & Development Association</span>
            </a>

        <h1 className="flex-1 flex text-white items-center justify-center text-xl text-center w-3/4  mx-auto leading-none">
        “The best among you are those who bring greatest benefits to many others”
        </h1>
    </div>

    </footer>
  )
}

export default Footer