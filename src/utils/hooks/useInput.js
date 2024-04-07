import {useState} from "react";

const useInput = (name, label, placeholder = "", initialValue = "", type = "text", validators, maxLength, config = {
    isFilter: false
}) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(null);
    const [isValid, setIsValid] = useState(false);

    const handleChange = (event) => {
        const value = event.target.value;
        if(value.length < 1) {
            setValue(value)
            setIsValid(false)
        } else {
            setValue(value);
            validate(value);
        }
    };

    const handleFileChange = (value) => {
        if(value.length < 1) {
            setValue(`${value}`)
            setIsValid(false)
        } else {
            setValue(`${value}`);
            setIsValid(true);
        }
    }

    const handleKeyDown = (event) => {
        if (type === "number" && !isNumberKey(event)) {
            event.preventDefault();
        }
    };

    const clear = () => {
        setValue(initialValue);
        setError(null);
        setIsValid(false);
    }

    const validate = (value) => {
        if(value.length === 0) {
            setIsValid(false);
        } else {
            const validationResults = validators.map((validator) => validator(value));
            const hasError = validationResults.some((result) => result !== true);
            setIsValid(!hasError);
        }
    };

    const isNumberKey = (event) => {
        const numberRegex = /^\d+$/;
        const isArrowKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key);
        const isBackspace = event.key === 'Backspace';
        const isDelete = event.key === 'Delete';
        const isHomeKey = event.key === 'Home';
        const isEndKey = event.key === 'End';
        const isTabKey = event.key === 'Tab';
        const isPaste = (event.ctrlKey || event.metaKey) && event.key === 'v';

        return (
            numberRegex.test(event.key) ||
            isArrowKey ||
            isBackspace ||
            isDelete ||
            isHomeKey ||
            isEndKey ||
            isTabKey ||
            isPaste
        );
    };


    return {
        name,
        label,
        value,
        error,
        setError,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        handleFileChange,
        clear,
        type,
        placeholder,
        setValue,
        isValid,
        maxLength,
        isFilter: config.isFilter
    };
};

export default useInput;
