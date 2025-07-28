export type FilterType = "all" | "active" | "inactive";

export type DropdownProps<T extends string> = {
    types: T[];
    activeType: T;
    onClick: (value: T) => void;
    subLabel: string | null;
};

export type DropdownOptionProps = {
    label: string;
    onClick: () => void;
    subLabel: string | null;
};
