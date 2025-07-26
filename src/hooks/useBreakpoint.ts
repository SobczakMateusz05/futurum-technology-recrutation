"use client";

import { useEffect, useState } from "react";

type BreakpointsType = "mobile" | "tablet" | "desktop";

const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
};

export default function useBreakpoint(): BreakpointsType {
    const [breakpoint, setBreakpoint] = useState<BreakpointsType>("desktop");

    const getBreakpoint = (width: number): BreakpointsType => {
        if (width < BREAKPOINTS.mobile) return "mobile";
        if (width < BREAKPOINTS.tablet) return "tablet";
        return "desktop";
    };

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return breakpoint;
}
