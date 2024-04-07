/*
    Example:


    const validators = [
        (value) => emailValidator(value),
    ];

    const inputSSO = useInput("SSO", "SSO", "Ingresa tu SSO", "", "email", validators);

 */

// SINGLE FUNCTIONS:

export const maxLengthValidator = (value, maxLength) => {
    return value.length <= maxLength;
}
export const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

export const emailValidator = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

export const notEmptyValidator = (value) => {
    return value.length > 0;
};

export const isEmptyValidator = (value) => {
    return value.length === 0;
};

export const numberValidator = (value) => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
};

export const moreThanWhitespaceValidator = (value) => {
    const whitespaceRegex = /^\s*$/;
    return !whitespaceRegex.test(value);
};

// ==================
// CATALOG
// ==================

export const emailValidators = [
    (value) => minLengthValidator(value, 1),
    (value) => emailValidator(value),
];

// ==================
// EVALUATE
// ==================

export const isTrue = (value) => {
    return value === 'true' || value === true;
}
