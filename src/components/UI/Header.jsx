import { useSelector } from "react-redux";
import { selectUserExists } from "../../stores/authSlice";
import { Link } from "react-router-dom";

export default function Header() {
    const userExists = useSelector(selectUserExists);

    return (
        <>
            {
                userExists ? (
                    <header>
                        <Link to={"/"}>Panel</Link>
                        <Link to={"/profile"}>Profile</Link>
                    </header>
                ) : (
                    <header>
                        <p>Log in</p>
                    </header>
                )
            }
        </>
    )
}