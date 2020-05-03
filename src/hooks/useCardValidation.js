import React, { useState, useEffect } from "react";

export const useCardValidation = (number, owner, date) => {
    const [input, setInput] = useState({ number, owner, date });

    const setCardInput = (event) => {
        switch (event.target.name) {
            case 'cardNumber':
                setInput({ ...input, number: event.target.value.replace(/\d{4}(?!$)/gi, '**** ') });
                break;
            case 'cardOwner':
                setInput({ ...input, owner: event.target.value });
                break;
            case 'cardDate':
                setInput({ ...input, date: event.target.value.replace(/(\d{2})\/?(\d{2}).*/, '$1/$2') });
                break;
        }
    }

    return [input, setCardInput];
}

