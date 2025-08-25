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
        <div className={`${styles.dotContainer} ${styles[styleColor]} ${styles[extendLine]}`}>
            {/* <div className={`${styles.line}`}></div> */}
            <div className={`${styles.dot} ${styles.dot1}`}></div>
            <div className={`${styles.dot} ${styles.dot2}`}></div>
            <div className={`${styles.dot} ${styles.dot3}`}></div>
        </div >
    );
};

export default TimelineDot;
