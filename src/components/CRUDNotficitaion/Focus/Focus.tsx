import style from "./Focus.module.scss";
import FocusField from "./FocusField";
import type { FocusProps } from "../../../assets/types/CRUDNotification";
import { EditIcon, CrossIcon } from "../../../assets/ComponentIcons";

function Focus({ data, edit, close }: FocusProps) {
    return (
        <div className={style.container}>
            <button className={style.closeButton} onClick={close}>
                <CrossIcon className={style.icon} />
            </button>
            <FocusField label="name" text={data.name} type="string" />
            <FocusField label="keywords" text={data.keywords} type="tab" />
            <FocusField label="bid amount" text={data.bidAmount} type="money" />
            <FocusField label="campaign fund" text={data.fund} type="money" />
            <FocusField label="town" text={data.town} type="string" />
            <FocusField label="radius" text={data.radius} type="distance" />
            <FocusField
                label="status"
                text={data.isActive ? "Active" : "Inactive"}
                type={"boolean"}
            />
            <button className={style.editButton} onClick={edit}>
                <EditIcon className={style.icon} /> Edit
            </button>
        </div>
    );
}

export default Focus;
