import style from "./CampaignToolbar.module.scss";
import Sort from "./Sort";

import { campaignData } from "../../assets/data"; //This import is only for demonstration.

function CampaignToolbar() {
    const campaignAmount = campaignData.length;

    return (
        <div className={style.container}>
            <div className={style.left}>
                <p className={style.amount}>{campaignAmount} Campaigns</p>
                <Sort />
            </div>
        </div>
    );
}

export default CampaignToolbar;
