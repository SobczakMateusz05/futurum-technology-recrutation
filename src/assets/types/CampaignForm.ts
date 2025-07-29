import React from "react";

export type CampaignFormProps = {
    close: () => void;
};

export type OptionType = {
    label: string;
    value: string;
};

export type FormFieldProps = {
    type: string;
    name: string;
    value: string | number | OptionType[];
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    isValidate: boolean;
};
