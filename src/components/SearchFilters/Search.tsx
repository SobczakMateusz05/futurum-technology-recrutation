import { useState, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./Search.module.scss";
import SearchIcon from "../../assets/icons/search.svg";

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = useState<string>(
        searchParams.get("search") ? (searchParams.get("search") as string) : ""
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newSearch = e.target.value;
        if (newSearch !== "") {
            searchParams.set("search", newSearch);
        } else {
            searchParams.delete("search");
        }
        setSearchParams(searchParams);
        setSearchValue(newSearch);
    };

    return (
        <div className={style.container}>
            <label htmlFor="search">
                <img src={SearchIcon} alt="Peel icon" className={style.icon} />
            </label>
            <input
                type="text"
                id="search"
                className={style.input}
                value={searchValue}
                placeholder="Search in the list..."
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;
