import { useEffect } from "react";

function useClickOutside(
    ref: React.RefObject<HTMLDivElement | null>,
    onClickOutside: () => void
) {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [ref, onClickOutside]);
}

export default useClickOutside;
