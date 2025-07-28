import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import type { SortType } from "../../assets/types/CampaignToolbar";
import style from "./Sort.module.scss";
import Dropdown from "../SearchFilters/Dropdown";
import ArrowIcon from "../../assets/icons/arrow.svg";

function Sort() {
    const sortType: SortType[] = ["date", "town", "radius"]; // only for demonstation purpose would be more

    const [searchParams, setSearchParams] = useSearchParams();
    const activeSortWay = searchParams.get("sort")
        ? (searchParams.get("sort") as SortType)
        : sortType[0];
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useClickOutside(containerRef, () => {
        setIsOpen(false);
    });

    const handleSort = (type: SortType) => {
        if (type !== "date") {
            searchParams.set("sort", type);
        } else {
            searchParams.delete("sort");
        }

        setSearchParams(searchParams);
        setIsOpen(false);
    };

    useClickOutside(containerRef, () => {
        setIsOpen(false);
    });

    return (
        <div className={style.container}>
            <p className={style.text}>Sort by</p>
            <div ref={containerRef} className={style.dropdownContainer}>
                <button
                    className={style.sortWay}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {activeSortWay.charAt(0).toUpperCase() +
                        activeSortWay.slice(1)}
                    <img src={ArrowIcon} alt="Arrow bottom" />
                </button>

                {isOpen && (
                    <Dropdown
                        types={sortType}
                        activeType={activeSortWay}
                        onClick={handleSort}
                        subLabel={null}
                    />
                )}
            </div>
        </div>
    );
}

export default Sort;
