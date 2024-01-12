

export function Profile({ authFunc }) {
    return (
        <main className="flex flex-row justify-center w-full">
            <button className="button" onClick={authFunc}>log out</button>
        </main>
    )
}