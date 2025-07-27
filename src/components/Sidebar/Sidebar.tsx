import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.scss";

import {
    CampaignIcon,
    PersonIcon,
    TownIcon,
    KeyIcon,
} from "../../assets/SidebarIcons";

function Sidebar() {
    return (
        <aside className={style.container}>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    <li className={style.navItem}>
                        <NavLink to="/" className={style.link}>
                            <CampaignIcon className={style.icon} />
                            Campaign
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to="/members" className={style.link}>
                            <PersonIcon className={style.icon} />
                            Members
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to="/towns" className={style.link}>
                            <TownIcon className={style.icon} />
                            Towns
                        </NavLink>
                    </li>
                    <li className={style.navItem}>
                        <NavLink to="/keywords" className={style.link}>
                            <KeyIcon className={style.icon} />
                            Keywords
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
