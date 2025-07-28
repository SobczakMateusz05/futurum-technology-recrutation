import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Filter.module.scss";
import type { FilterType } from "../../assets/types/SearchFilters";
import Dropdown from "./Dropdown";
import useClickOutside from "../../hooks/useClickOutside";

import { FilterIcon, ArrowIcon } from "../../assets/ComponentIcons";

function Filter() {
    const [searchParams, setSearchParams] = useSearchParams();
    const filterTypes: FilterType[] = ["all", "active", "inactive"];
    const activeFilterType = searchParams.get("filter")
        ? (searchParams.get("filter") as FilterType)
        : filterTypes[0];
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleFilter = (type: FilterType) => {
        if (type !== "all") {
            searchParams.set("filter", type);
        } else {
            searchParams.delete("filter");
        }

        setSearchParams(searchParams);
        setIsOpen(false);
    };

    useClickOutside(containerRef, () => {
        setIsOpen(false);
    });

    return (
        <div ref={containerRef} className={style.container}>
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
                <Dropdown
                    types={filterTypes}
                    activeType={activeFilterType}
                    onClick={handleFilter}
                    subLabel="Campaign"
                />
            )}
        </div>
    );
}

export default Filter;
