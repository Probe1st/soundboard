import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { logIn, selectAuth } from "../../../stores/authSlice";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function validateCredential(credential) {
    const {email, password} = credential;

    if (!(email && password) ) return false;
    if (!email.includes("@")) return false;

    return true;
}

export function Page() {
    const [dataForm, setDataForm] = useState({
        email: "",
        password: ""
    });
    const auth = useSelector(selectAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function signIn(auth, credential) {
        if(!validateCredential(credential)) {
            return;
        }

        const {email, password} = credential;
        await signInWithEmailAndPassword(auth, email, password).then(user => {
            if (user.user) {
                dispatch(logIn());
                navigate("/")
            }
        })
        .catch(err => {
            if (err.code === "auth/invalid-credential") {
                createUserWithEmailAndPassword(auth, email, password)
                .then(user => {
                    if (user.user) {
                        dispatch(logIn());
                        navigate("/")
                    }
                });
            }
        })
    }

    return (
        <div className="authwithemail">

            {/* Поле с вводом почты */}
            <div>
                <p className="text-slate-300">Введите почту</p>
                <input type="email" placeholder="example@mail.ru" onChange={e => setDataForm({ ...dataForm, email:e.currentTarget.value })} value={dataForm.email}/>
            </div>

            {/* Поле с вводом пароля */}
            <div>
                <p className="text-slate-300">Введите пароль</p>
                <input type="text" placeholder="P@s$w0rd" onChange={e => setDataForm({ ...dataForm, password: e.currentTarget.value })} value={dataForm.password} />
            </div>

            <div className="!mt-16">
                <button type="button" onClick={() => signIn(auth, dataForm)} className="bg-slate-700 rounded-2xl px-5 py-2 mx-auto w-2/3">
                    Войти
                </button>
            </div>
        </div>
    )
}