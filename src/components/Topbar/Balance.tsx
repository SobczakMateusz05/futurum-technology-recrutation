import style from "./Balance.module.scss";
import EmeraldIcon from "../../assets/icons/emerald.svg";

import { balanceData } from "../../assets/data"; // This import is only for demonstration.

function Balance() {
    return (
        <div className={style.container}>
            <img src={EmeraldIcon} alt="Emerald Icon" className={style.icon} />
            <p className={style.balance}>
                {balanceData.toLocaleString("pl-PL", {
                    style: "currency",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    currency: "PLN",
                })}
            </p>
        </div>
    );
}

export default Balance;
