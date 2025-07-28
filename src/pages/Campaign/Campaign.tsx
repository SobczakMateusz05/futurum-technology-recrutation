import style from "./Campaign.module.scss";
import Filter from "../../components/SearchFilters/Filter";
import Search from "../../components/SearchFilters/Search";
import CampaignToolbar from "../../components/CampaignToolbar/CampaignToolbar";
import CampaignList from "../../components/CampaignList/CampaignList";
import useBreakpoint from "../../hooks/useBreakpoint";

function Campaign() {
    const styles: React.CSSProperties | undefined =
        useBreakpoint() === "mobile"
            ? {
                  flexDirection: "column-reverse",
                  alignItems: "flex-start",
              }
            : undefined;

    return (
        <div className={style.container}>
            <div className={style.topLine} style={styles}>
                <Filter />
                <Search />
            </div>
            <div className={style.content}>
                <CampaignToolbar />
                <CampaignList />
            </div>
        </div>
    );
}

export default Campaign;
