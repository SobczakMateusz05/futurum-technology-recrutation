import style from "./FocusField.module.scss";
import type { FocusFieldProps } from "../../../assets/types/CampaignList";

function Focus({ label, text, type }: FocusFieldProps) {
    const editedText = () => {
        switch (type) {
            case "money":
                return text.toLocaleString("pl-PL", {
                    style: "currency",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    currency: "PLN",
                });
            case "distance":
                return text.toLocaleString("pl-PL", {
                    style: "unit",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    unit: "kilometer",
                });
            case "tab":
                if (typeof text === "object") {
                    return text.map((item, i) =>
                        i !== text.length - 1 ? item + ", " : item
                    );
                }
                return text;

            default:
                return text;
        }
    };

    const booleanStyle =
        type === "boolean"
            ? text === "Active"
                ? { color: "green" }
                : { color: "red" }
            : undefined;

    return (
        <div className={style.container}>
            <p className={style.label}> {label.toUpperCase()}</p>
            <p className={style.text} style={booleanStyle}>
                {editedText()}
            </p>
        </div>
    );
}

export default Focus;
