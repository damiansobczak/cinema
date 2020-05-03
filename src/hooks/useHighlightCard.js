import React, { useState } from "react";

export const useHighlightCard = () => {
    const [highlight, setHighlight] = useState({ left: '16px', top: '60px' });

    const setHighlightPos = (element) => {
        switch (element.currentTarget.name) {
            case 'cardNumber':
                setHighlight({ left: '16px', top: '60px' });
                break;
            case 'cardOwner':
                setHighlight({ left: `16px`, top: `120px`, width: `150px` });
                break;
            case 'cardDate':
                setHighlight({ left: `178px`, top: `120px`, width: `70px` });
                break;
            default:
                setHighlight({ left: '16px', top: '60px' });
        }
    }

    return [highlight, setHighlightPos];
}
