export type campaignDataType = {
    id: number;
    name: string;
    keywords: string[];
    bidAmount: number;
    fund: number;
    isActive: boolean;
    town: string;
    radius: number;
};

export type FocusProps = {
    data: campaignDataType;
    edit: () => void;
    close: () => void;
};

export type FocusFieldProps = {
    label: string;
    text: string | number | string[];
    type: string;
};
