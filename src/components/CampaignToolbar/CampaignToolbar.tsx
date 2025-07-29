import style from "./CampaignToolbar.module.scss";
import Sort from "./Sort";
import PlusIcon from "../../assets/icons/plus.svg";
import { useSearchParams } from "react-router-dom";

import { campaignData } from "../../assets/data"; //This import is only for demonstration.

function CampaignToolbar() {
    const campaignAmount = campaignData.length;
    const [searchParams, setSearchParams] = useSearchParams();

    const handleAddButtonClick = () => {
        searchParams.set("action", "add");
        setSearchParams(searchParams);
    };

    return (
        <div className={style.container}>
            <div className={style.left}>
                <p className={style.amount}>{campaignAmount} Campaigns</p>
                <Sort />
            </div>
            <button className={style.button} onClick={handleAddButtonClick}>
                <img src={PlusIcon} alt="Plus icon" className={style.icon} />
            </button>
        </div>
    );
}

export default CampaignToolbar;
