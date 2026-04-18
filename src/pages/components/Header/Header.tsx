export default function Header() {
    return (
        <header className='flex flex-col justify-center items-center w-full'>
            <div className="titulos flex flex-col justify-center items-start w-full">
                <h1>Peso</h1>
                <h2>Ideal</h2>
            </div>
            <div className="subtitulo flex flex-col justify-center items-start w-full">
                <p>kba<span>digital</span></p>
            </div>
            <div className="barra"></div>
        </header>
    )
}