import { useSearchParams } from "react-router-dom";
import style from "./CRUDNotification.module.scss";
import Focus from "./Focus/Focus";
import DeleteConfirmation from "./Delete/DeleteConfirmation";
import CampaignForm from "../CampaignForm/CampaignForm";
import type { campaignDataType } from "../../assets/types/CRUDNotification";

import { campaignData } from "../../assets/data"; //This import is only for demonstration.

function CRUDNotification() {
    const [searchParams, setSearchParams] = useSearchParams();
    const actionType = searchParams.get("action")
        ? searchParams.get("action")
        : null;
    const id = searchParams.get("id") ? Number(searchParams.get("id")) : null;
    const actionForm = actionType === "add" || actionType === "edit";

    const handleClose = () => {
        searchParams.delete("action");
        searchParams.delete("id");
        setSearchParams(searchParams);
    };

    const handleEdit = () => {
        searchParams.set("action", "edit");
        setSearchParams(searchParams);
    };

    return (
        <>
            {actionType !== null && (
                <div className={style.container}>
                    {actionType === "focus" && (
                        <Focus
                            data={
                                campaignData.find(
                                    (prop) => prop.id === id
                                ) as campaignDataType
                            }
                            edit={handleEdit}
                            close={handleClose}
                        />
                    )}

                    {actionType === "delete" && (
                        <DeleteConfirmation id={id} cancel={handleClose} />
                    )}

                    {actionForm && <CampaignForm close={handleClose} />}
                </div>
            )}
        </>
    );
}

export default CRUDNotification;
