import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./CampaignForm.module.scss";
import { ConfirmIcon, CrossIcon } from "../../assets/ComponentIcons";
import FormField from "./FormField";
import type {
    CampaignFormProps,
    OptionType,
} from "../../assets/types/CampaignForm";
import CreatableSelect from "react-select/creatable";
import type { MultiValue } from "react-select";

import { campaignData, keywordData } from "../../assets/data"; //This import is only for demonstration.

function CampaignForm({ close }: CampaignFormProps) {
    const [searchParams] = useSearchParams();
    const actionType = searchParams.get("action");
    const data = searchParams.get("id")
        ? campaignData.find(
              (prop) => prop.id === Number(searchParams.get("id"))
          )
        : null;
    const [formData, setFormData] = useState({
        name: data ? data.name : "",
        keywords: data ? data.keywords : [],
        bidAmount: data ? data.bidAmount : 0,
        campaignFund: data ? data.fund : 0,
        isActive: data ? data.isActive : true,
        town: data ? data.town : "",
        radius: data ? data.radius : 0,
    });
    const [isValidate, setIsValidate] = useState({
        name: true,
        keywords: true,
        bidAmount: true,
        campaignFund: true,
        town: true,
        radius: true,
    });
    const options: OptionType[] = keywordData.map((keyword) => ({
        label: keyword,
        value: keyword,
    }));

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        console.log(formData);
    };

    const handleTypeheadChange = (newValue: MultiValue<OptionType> | null) => {
        const stringArray = (newValue ?? []).map((option) => option.value);
        setFormData((prev) => ({
            ...prev,
            keywords: stringArray,
        }));
    };

    const handleCheck = () => {
        setFormData((prev) => ({ ...prev, isActive: !formData.isActive }));
    };

    const isValid = (
        value: string | number | string[] | boolean,
        type: string
    ): boolean => {
        switch (type) {
            case "text":
                return (
                    value !== "" && value !== null && value !== "Choose town..."
                );
            case "number":
                return value !== 0 && value !== null;
            case "tab":
                return Array.isArray(value) && value.length > 0;
            default:
                return true;
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Easy validation based on asked "mandatory" requirement

        const validationResults = {
            name: isValid(formData.name, "text"),
            keywords: isValid(formData.keywords, "tab"),
            bidAmount: isValid(formData.bidAmount, "number"),
            campaignFund: isValid(formData.campaignFund, "number"),
            town: isValid(formData.town, "text"),
            radius: isValid(formData.radius, "number"),
        };

        setIsValidate(validationResults);

        const allValid = Object.values(validationResults).every(
            (v) => v === true
        );

        if (!allValid) return;
        console.log(isValidate);

        if (!allValid) {
            return;
        }

        if (actionType === "add") {
            //backend logic for add new campaign

            alert("Sucesfully added");
        }
        if (actionType === "edit") {
            //backend logic for edit campaign

            alert("Sucesfully edited");
        }

        close();
    };

    return (
        <div className={style.container}>
            <button className={style.closeButton} onClick={close}>
                <CrossIcon className={style.icon} />
            </button>
            <form className={style.form}>
                <FormField
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isValidate={isValidate.name}
                />
                <div className={style.field}>
                    <label
                        className={style.label}
                        style={
                            !isValidate.keywords ? { color: "red" } : undefined
                        }
                    >
                        {" "}
                        KEYWORDS
                    </label>
                    <CreatableSelect<OptionType, true>
                        isMulti
                        options={options}
                        value={formData.keywords.map((k) => ({
                            label: k,
                            value: k,
                        }))}
                        onChange={(newValue) => {
                            handleTypeheadChange(newValue);
                        }}
                        classNamePrefix="react-select"
                    />
                </div>
                <FormField
                    type="number"
                    name="bidAmount"
                    value={formData.bidAmount}
                    onChange={handleChange}
                    isValidate={isValidate.bidAmount}
                />
                <FormField
                    type="number"
                    name="campaignFund"
                    value={formData.campaignFund}
                    onChange={handleChange}
                    isValidate={isValidate.campaignFund}
                />

                <FormField
                    type="select"
                    name="town"
                    value={formData.town}
                    onChange={handleChange}
                    isValidate={isValidate.town}
                />
                <FormField
                    type="number"
                    name="radius"
                    value={formData.radius}
                    onChange={handleChange}
                    isValidate={isValidate.radius}
                />
                <div className={style.checkboxContainer}>
                    <input
                        type="checkbox"
                        name="isActive"
                        id="isActive"
                        checked={formData.isActive}
                        onChange={handleCheck}
                        className={style.checkbox}
                    />
                    <label htmlFor="isActive" className={style.label}>
                        Active
                    </label>
                </div>
                <button
                    type="submit"
                    className={style.confirmButton}
                    onClick={handleSubmit}
                >
                    <ConfirmIcon className={style.icon} /> Confirm
                </button>
            </form>
        </div>
    );
}

export default CampaignForm;
