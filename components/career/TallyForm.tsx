"use client";

import React, { useEffect } from "react";
import styles from "./TallyForm.module.scss";

interface TallyFormProps {
    formId: string; // e.g., "m6aKxY"
    layout?: "modal" | "drawer-left" | "drawer-right";
    width?: string;
}

const TallyForm: React.FC<TallyFormProps> = ({ formId, layout = "modal", width = "600" }) => {
    useEffect(() => {
        // Load Tally embed script if not already loaded
        if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
            const script = document.createElement("script");
            script.src = "https://tally.so/widgets/embed.js";
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // @ts-ignore
                if (window.Tally) window.Tally.loadEmbeds();
            };
        } else {
            // @ts-ignore
            if (window.Tally) window.Tally.loadEmbeds();
        }
    }, []);

    return (
        <div className={styles.tallyWrapper}>
            <button
                data-tally-open={formId}
                data-tally-layout={layout}
                data-tally-width={width}
                className={styles.tallyButton}
            >
                Open Form
            </button>
        </div>
    );
};

export default TallyForm;
