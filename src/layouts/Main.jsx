
function SoundButton({ name, source }) {
    return (
        <div className="space-y-2 px-3 py-2 max-w-min max-h-min border border-gray-900 rounded-xl">
            <p className="uppercase text-xl font-semibold text-center">{name}</p>
            <audio preload controls src={source}>
                <source type="audio/mpeg" src={source} />
                не поддерживается браузером
            </audio>
        </div>
    )
}

function SoundButtons({ sounds }) {
    return sounds.map(audio => {
        return <SoundButton name={audio.name} source={audio.source} />
    })
}

export function Main({ sounds }) {
    return (
        <main className="flex flex-wrap justify-evenly items-start flex-grow bg-gray-600 w-full mb-7 rounded-2xl py-3 px-5">
            <SoundButtons sounds={sounds} />
        </main>
    )
}

