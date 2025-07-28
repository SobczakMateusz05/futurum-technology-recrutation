import style from "./Topbar.module.scss";
import ReactIcon from "../../assets/icons/react.svg";
import Balance from "./Balance";
import Account from "./Account";

import useBreakpoint from "../../hooks/useBreakpoint";

function Topbar() {
    const isMobile = useBreakpoint() === "mobile";

    return (
        <header className={style.container}>
            <img src={ReactIcon} alt="React Icon" className={style.icon} />
            {/* It's for demonstration in real app this logo will be changed with real app logo */}
            <div
                className={style.rightSideContainer}
                style={{
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "5px" : "20px",
                }}
            >
                <Balance />
                <div className={style.breakLine} />
                <Account />
            </div>
        </header>
    );
}

export default Topbar;
