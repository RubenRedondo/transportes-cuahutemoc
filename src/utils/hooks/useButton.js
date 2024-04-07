import {useState} from "react";
import {themes} from "../../styles/colors.js";

const useButton = (text, theme = themes.grayTransparent, size = "contained", isDisabled = false, type = "button") => {

    const [disabled, setDisabled] = useState(isDisabled);

    const allow = () => {
        setDisabled(false);
    }

    const disallow = () => {
        setDisabled(true);
    }

    return {
        text,
        disabled,
        theme,
        type,
        size,
        allow,
        disallow
    }

};

export default useButton;
