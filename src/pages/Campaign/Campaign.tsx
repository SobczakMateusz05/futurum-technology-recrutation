import style from "./Campaign.module.scss";
import Filter from "../../components/SearchFilters/Filter";
import Search from "../../components/SearchFilters/Search";

function Campaign() {
    return (
        <div className={style.container}>
            <div className={style.topLine}>
                <Filter />
                <Search />
            </div>
            <div className={style.content}>Content</div>
        </div>
    );
}

export default Campaign;
