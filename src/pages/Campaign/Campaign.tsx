import style from "./Campaign.module.scss";
import Filter from "../../components/SearchFilters/Filter";
import Search from "../../components/SearchFilters/Search";
import CampaignToolbar from "../../components/CampaignToolbar/CampaignToolbar";

function Campaign() {
    return (
        <div className={style.container}>
            <div className={style.topLine}>
                <Filter />
                <Search />
            </div>
            <div className={style.content}>
                <CampaignToolbar />
            </div>
        </div>
    );
}

export default Campaign;
