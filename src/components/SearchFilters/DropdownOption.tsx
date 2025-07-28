import style from "./DropdownOption.module.scss";
import type { DropdownOptionProps } from "../../assets/types/SearchFilters";

function DropdownOption({ label, onClick, subLabel }: DropdownOptionProps) {
    return (
        <button className={style.container} onClick={onClick}>
            {label.charAt(0).toUpperCase() + label.slice(1)} {subLabel}
        </button>
    );
}

export default DropdownOption;
