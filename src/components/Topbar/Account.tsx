import style from "./Account.module.scss";
import PersonIcon from "../../assets/person.svg";
import SettingsIcon from "../../assets/settings.svg";
import LogoutIcon from "../../assets/logout.svg";

import { userData } from "../../assets/data"; //This import is only for demonstration.

function Account() {
    return (
        <div className={style.container}>
            <div className={style.iconContainer}>
                <img
                    src={PersonIcon}
                    alt="Person Icon"
                    className={style.icon}
                />
            </div>
            <div className={style.infoContainer}>
                <p className={style.userName}> {userData.name}</p>
                <p className={style.userType}>{userData.type}</p>
            </div>
            <div className={style.popUpContainer}>
                <a href="#" className={style.option}>
                    <img
                        src={SettingsIcon}
                        alt="Settings Icon"
                        className={style.optionIcon}
                    />
                    Settings
                    {/* It's just for demonstation purposes with backend it would work */}
                </a>
                <a href="#" className={style.option}>
                    <img
                        src={LogoutIcon}
                        alt="Logout Icon"
                        className={style.optionIcon}
                    />
                    Logout
                    {/* It's just for demonstation purposes with backend it would work */}
                </a>
            </div>
        </div>
    );
}

export default Account;
