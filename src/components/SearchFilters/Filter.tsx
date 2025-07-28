import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Filter.module.scss";
import type { FilterType } from "../../assets/types/SearchFilters";
import DropdownOption from "./DropdownOption";

import { FilterIcon, ArrowIcon } from "../../assets/ComponentIcons";

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterTypes: FilterType[] = ["all", "active", "inactive"];
    const [activeFilterType, setActiveFilterType] = useState<FilterType>(
        searchParams.get("filter")
            ? (searchParams.get("filter") as FilterType)
            : filterTypes[0]
    );
    const [isOpen, setIsOpen] = useState(false);

    const handleFilter = (type: FilterType) => {
        if (type !== "all") {
            searchParams.set("filter", type);
        } else {
            searchParams.delete("filter");
        }

        setSearchParams(searchParams);
        setActiveFilterType(type);
        setIsOpen(false);
    };

    return (
        <div className={style.container}>
            <button className={style.button} onClick={() => setIsOpen(!isOpen)}>
                <FilterIcon className={style.filterIcon} />
                <p className={style.text}>
                    {activeFilterType.charAt(0).toUpperCase() +
                        activeFilterType.slice(1)}{" "}
                    Campaign
                </p>
                <ArrowIcon className={style.arrowIcon} />
            </button>
            {isOpen && (
                <div className={style.dropdown}>
                    {filterTypes.map((type) =>
                        type !== activeFilterType ? (
                            <DropdownOption
                                key={type}
                                label={type}
                                onClick={() => handleFilter(type)}
                            />
                        ) : null
                    )}
                </div>
            )}
        </div>
    );
}

export default Filter;
