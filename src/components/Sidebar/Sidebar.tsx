import style from "./Sidebar.module.scss";
import NavLink from "./NavLink";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useSearchParams } from "react-router-dom";
import { CrossIcon } from "../../assets/ComponentIcons";

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

    const [searchParams, setSearchParams] = useSearchParams();
    const isOpen = searchParams.get("menu") ? true : false;
    const isMobile = useBreakpoint() === "mobile";

    const handleClick = () => {
        searchParams.delete("menu");
        setSearchParams();
    };

    return (
        <aside className={`${style.container} ${isOpen ? style.open : null}`}>
            {isMobile && (
                <button className={style.closeButton} onClick={handleClick}>
                    <CrossIcon className={style.crossIcon} />
                </button>
            )}
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
