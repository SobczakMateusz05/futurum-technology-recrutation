import style from "./DeleteConfirmation.module.scss";
import type { DeleteConfirmationProps } from "../../../assets/types/CampaignList";
import { DeleteIcon, CrossIcon } from "../../../assets/ComponentIcons";

function DeleteConfirmation({ id, cancel }: DeleteConfirmationProps) {
    const handleDelete = (id: number | null) => {
        // Backed logic to handle delete
        alert(`Deleted campaign with id: ${id}`); // Only for demonstration
        cancel();
    };

    return (
        <div className={style.container}>
            <p className={style.text}>
                Are you sure you want to delete this campaign?
            </p>
            <div className={style.buttonContainer}>
                <button
                    className={style.deleteButton}
                    onClick={() => handleDelete(id)}
                >
                    <DeleteIcon className={style.icon} />
                    Confirm
                </button>
                <button className={style.cancelButton} onClick={cancel}>
                    <CrossIcon className={style.icon} />
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default DeleteConfirmation;
