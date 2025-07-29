import { useSearchParams } from "react-router-dom";
import style from "./CampaignList.module.scss";
import { EditIcon, DeleteIcon } from "../../assets/ComponentIcons";

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
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (action: string, id: number) => {
        searchParams.set("action", action);

        searchParams.set("id", id.toString());
        setSearchParams(searchParams);
    };

    return (
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
                    <tr
                        className={style.rowContainer}
                        key={prop.id}
                        onClick={() => handleClick("focus", prop.id)}
                    >
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
                        <td
                            className={style.field}
                            style={
                                prop.isActive
                                    ? { color: "green" }
                                    : { color: "red" }
                            }
                        >
                            {prop.isActive ? "Active" : "Inactive"}
                        </td>
                        <td className={style.field}>
                            <button
                                className={style.button}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick("edit", prop.id);
                                }}
                            >
                                <EditIcon className={style.icon} />
                            </button>
                            <button
                                className={style.button}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleClick("delete", prop.id);
                                }}
                            >
                                <DeleteIcon className={style.icon} />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CampaignList;
