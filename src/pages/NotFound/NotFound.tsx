import ReactIcon from "../../assets/react.svg";
import style from "./NotFound.module.scss";

function NotFound() {
    return (
        <div className={style.container}>
            <h1 className={style.title}> 404</h1>
            <p className={style.message}> This page does not exist.</p>
            <a href="/" className={style.link}>
                Go to main page
            </a>
            <img src={ReactIcon} alt="React Icon" className={style.icon} />
            {/* It's for demonstration in real app this logo will be changed with real app logo */}
        </div>
    );
}

export default NotFound;
