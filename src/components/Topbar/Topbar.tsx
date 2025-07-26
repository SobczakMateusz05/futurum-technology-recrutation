import style from "./Topbar.module.scss";
import ReactIcon from "../../assets/react.svg";
import Balance from "./Balance";
import Account from "./Account";

function Topbar() {
    return (
        <header className={style.container}>
            <img src={ReactIcon} alt="React Icon" className={style.icon} />
            {/* It's for demonstration in real app this logo will be changed with real app logo */}
            <div className={style.rightSideContainer}>
                <Balance />
                <div className={style.breakLine} />
                <Account />
            </div>
        </header>
    );
}

export default Topbar;
