import style from "./Topbar.module.scss";
import { useSearchParams } from "react-router-dom";
import ReactIcon from "../../assets/icons/react.svg";
import Balance from "./Balance";
import Account from "./Account";

import useBreakpoint from "../../hooks/useBreakpoint";

function Topbar() {
    const isMobile = useBreakpoint() === "mobile";
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = () => {
        searchParams.set("menu", "open");
        setSearchParams(searchParams);
    };

    return (
        <header className={style.container}>
            <div className={style.leftSideContainer}>
                <img src={ReactIcon} alt="React Icon" className={style.icon} />
                {isMobile && (
                    <button className={style.menuButton} onClick={handleClick}>
                        Menu
                    </button>
                )}
            </div>

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
