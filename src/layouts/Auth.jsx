
export function Auth({authFunc}) {
    return (
        <button onClick={authFunc} className="button">
            Authenticate with Google
            <img className="w-5 h-5 ml-3" src={process.env.PUBLIC_URL + "icons/google-icon.svg"} alt="icon of Google" />
        </button>
    )
}