import style from "./NavLink.module.scss";
import { NavLink as RouterNavLink } from "react-router-dom";
import type { NavLinkProps } from "../../assets/types/Sidebar";

function NavLink({ location, label, Icon }: NavLinkProps) {
    return (
        <li className={style.navItem}>
            <RouterNavLink to={location} className={style.link}>
                <Icon className={`${style.icon} navIcon`} />
                {label}
            </RouterNavLink>
        </li>
    );
}

export default NavLink;
