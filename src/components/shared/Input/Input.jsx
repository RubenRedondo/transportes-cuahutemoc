import {Group, StyledButton} from './Input.styled';
import icon from "../../../assets/icons/ico_ojo.svg";
import filterIcon from "/src/assets/icons/ico_filter.svg";

import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-regular-svg-icons/faEye";
import {faFilter} from "@fortawesome/free-solid-svg-icons/faFilter";

const Input = ({
                   name,
                   label,
                   onChange,
                   value,
                   error,
                   onKeyDown,
                   type,
                   placeholder,
                   isValid,
                   maxLength,
                   isFilter,
                   handleFilter
               }) => {
    
    const [showPassword, setShowPassword] = useState(false);
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };
    
    
    return (
        <Group className="Input">
            
            <label htmlFor={name} className="label" htmlFor="">
                {label}
            </label>
            
            {type === "password" && (
                <StyledButton type="button" onClick={handleTogglePassword} className="toggle-button"
                              active={showPassword.toString()}>
                    <FontAwesomeIcon icon={faEye} className={'icon'}/>
                </StyledButton>
            )}
            
            {
                isFilter && (
                    <StyledButton type="button" onClick={handleFilter}>
                        <FontAwesomeIcon icon={faFilter} className="filterIcon"/>
                    </StyledButton>
                )
            }
            
            {
                type === 'number' ? (
                    <input
                        type={type}
                        min="1"
                        id={name}
                        name={name}
                        required
                        value={value}
                        onPaste={onChange}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className="input"
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />
                ) : type === 'password' ? (
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id={name}
                        name={name}
                        required
                        value={value}
                        onPaste={onChange}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className="input"
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />
                ) : (
                    <input
                        type={type}
                        id={name}
                        name={name}
                        required
                        value={value}
                        onPaste={onChange}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        className="input"
                        placeholder={placeholder}
                        maxLength={maxLength}
                    />
                )
            }
            {error && <span className="span">{error}</span>}
        </Group>
    );
};

export default Input;
