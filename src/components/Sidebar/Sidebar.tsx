import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";

import {
    CampaignIcon,
    PersonIcon,
    TownIcon,
    KeyIcon,
} from "../../assets/ComponentIcons";

function Sidebar() {
    const Links = [
        {
            location: "/",
            label: "Campaign",
            Icon: CampaignIcon,
        },
        {
            location: "/members",
            label: "Members",
            Icon: PersonIcon,
        },
        {
            location: "/towns",
            label: "Towns",
            Icon: TownIcon,
        },
        {
            location: "/keywords",
            label: "Keywords",
            Icon: KeyIcon,
        },
    ];

    return (
        <aside className={style.container}>
            <nav className={style.nav}>
                <ul className={style.navList}>
                    {Links.map((link) => (
                        <NavLink
                            key={link.location}
                            location={link.location}
                            label={link.label}
                            Icon={link.Icon}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
