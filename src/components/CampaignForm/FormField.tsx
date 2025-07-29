import style from "./FormField.module.scss";
import type { FormFieldProps } from "../../assets/types/CampaignForm";
import { townData } from "../../assets/data";

function FormField({ type, name, value, onChange }: FormFieldProps) {
    return (
        <div className={style.container}>
            <label
                htmlFor={type !== "typehead" ? name : undefined}
                className={style.label}
            >
                {name
                    .replace(/([A-Z])/g, " $1")
                    .trim()
                    .toUpperCase()}
            </label>

            {type !== "select" ? (
                <input
                    type={type}
                    id={name}
                    value={value as string | number}
                    name={name}
                    onChange={onChange}
                    className={style.input}
                />
            ) : (
                <select
                    id={name}
                    name={name}
                    value={value as string}
                    onChange={onChange}
                    className={style.select}
                >
                    <option>Choose town...</option>
                    {townData.map((town: string) => (
                        <option value={town} key={town}>
                            {town}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default FormField;
