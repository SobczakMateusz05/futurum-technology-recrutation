import style from "./Dropdown.module.scss";
import type { DropdownProps } from "../../assets/types/SearchFilters";
import DropdownOption from "./DropdownOption";

function Dropdown<T extends string>({
    types,
    activeType,
    onClick,
    subLabel,
}: DropdownProps<T>) {
    return (
        <div className={style.dropdown}>
            {types.map((type) =>
                type !== activeType ? (
                    <DropdownOption
                        key={type}
                        label={type}
                        onClick={() => onClick(type)}
                        subLabel={subLabel}
                    />
                ) : null
            )}
        </div>
    );
}

export default Dropdown;
