import { useState } from "react";
import style from "./CampaignList.module.scss";
import { EditIcon, DeleteIcon } from "../../assets/ComponentIcons";
import DeleteConfirmation from "./DeleteConfirmation";

import { campaignData } from "../../assets/data"; //This import is only for demonstration.

function CampaignList() {
    const headers = [
        "name",
        "keywords",
        "bid amount",
        "campaign fund",
        "town",
        "radius",
        "status",
        "manage",
    ];
    const [toDelete, setToDelete] = useState<number | null>(null);

    return (
        <>
            {toDelete !== null && (
                <DeleteConfirmation
                    id={toDelete}
                    cancel={() => setToDelete(null)}
                />
            )}
            <table className={style.container}>
                <thead>
                    <tr className={style.headerContainer}>
                        {headers.map((title) => (
                            <th className={style.header} key={title}>
                                {title.toUpperCase()}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={style.contentContainer}>
                    {campaignData.map((prop) => (
                        <tr className={style.rowContainer} key={prop.id}>
                            <td className={style.field}>{prop.name}</td>
                            <td className={style.field}>
                                {prop.keywords.map((keyword, i) =>
                                    i < 3 ? (
                                        <p className={style.keyword} key={i}>
                                            {keyword}
                                            {i < 2 ? ", " : ""}
                                        </p>
                                    ) : i === 3 ? (
                                        <p className={style.keyword} key={i}>
                                            , ...
                                        </p>
                                    ) : null
                                )}
                            </td>
                            <td className={style.field}>
                                {prop.bidAmount.toLocaleString("pl-PL", {
                                    style: "currency",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    currency: "PLN",
                                })}
                            </td>
                            <td className={style.field}>
                                {prop.fund.toLocaleString("pl-PL", {
                                    style: "currency",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    currency: "PLN",
                                })}
                            </td>
                            <td className={style.field}> {prop.town} </td>
                            <td className={style.field}>
                                {prop.radius.toLocaleString("pl-PL", {
                                    style: "unit",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    unit: "kilometer",
                                })}
                            </td>
                            <td className={style.field}>
                                {prop.isActive ? "Active" : "Inactive"}
                            </td>
                            <td className={style.field}>
                                <button className={style.button}>
                                    <EditIcon className={style.icon} />
                                </button>
                                <button
                                    className={style.button}
                                    onClick={() => setToDelete(prop.id)}
                                >
                                    <DeleteIcon className={style.icon} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default CampaignList;
