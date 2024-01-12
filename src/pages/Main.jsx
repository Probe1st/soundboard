import { Main as MainLayout} from '../layouts/';

const sounds = [
    {
        name: "no",
        source: "https://firebasestorage.googleapis.com/v0/b/sounboard-89a7d.appspot.com/o/no.mp3?alt=media&token=c1dead04-bd6d-4a75-9eb3-f1c8d1a04219"
    },
    {
        name: "yes",
        source: "https://firebasestorage.googleapis.com/v0/b/sounboard-89a7d.appspot.com/o/yes.mp3?alt=media&token=0f3eab8e-ce1f-4581-a07d-fe0ca6b2f06e"
    }
]

export function Main() {
    return (
        <MainLayout sounds={sounds} />
    )
}