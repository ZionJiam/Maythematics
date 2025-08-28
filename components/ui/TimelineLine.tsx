// components/ui/CTAButton.tsx
"use client";

import React from "react";
import styles from "./TimelineDot.module.scss";

interface TimelineDotProp {
    styleColor: string;
    extendLine: string;

}

const TimelineDot: React.FC<TimelineDotProp> = ({ styleColor, extendLine }) => {

    // if(styleColor == 'red'){

    // }

    return (
        <div className={`${styles.line} ${styles[styleColor]} ${styles[extendLine]}`}>
        </div >
    );
};

export default TimelineDot;
