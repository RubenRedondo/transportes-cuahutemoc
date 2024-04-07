import {minLengthValidator, notEmptyValidator} from "../../utils/validators/form-validators.js";

export const UserValidator = [
    (value) => notEmptyValidator(value),
    (value) => minLengthValidator(value, 5),
]

export const PasswordValidator = [
    (value) => notEmptyValidator(value),
    (value) => minLengthValidator(value, 8),
]
