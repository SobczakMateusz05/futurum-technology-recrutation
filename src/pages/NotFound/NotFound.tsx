import style from "./NotFound.module.scss";
import ReactIcon from "../../assets/icons/react.svg";
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div className={style.container}>
            <h1 className={style.title}> 404</h1>
            <p className={style.message}> This page does not exist.</p>
            <Link to="/" className={style.link}>
                Go to main page
            </Link>
            <img src={ReactIcon} alt="React Icon" className={style.icon} />
            {/* It's for demonstration in real app this logo will be changed with real app logo */}
            {/* This br and p won't exist in a real app */}
            <br />
            <p className={style.message}>
                Some buttons are created more like placeholders to good looking
                of app.
            </p>
            <p className={style.message}>
                The would work normally in a real application with backend
                integration.
            </p>
        </div>
    );
}

export default NotFound;
