import {SESSION_STORAGE_USER_KEY} from "../utils/constants/index.js";
import {errorReponnse} from "../utils/formatters/error.formatters.js";
import {responseBuilder} from "../utils/formatters/response.formatters.js";


const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem(SESSION_STORAGE_USER_KEY))
}

const signIn = (user, password) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(responseBuilder('Sesión iniciada con éxito', 200))
        } catch (error) {
            reject(errorReponnse(error, 400))
        }
    })
}

export const auth = {
    getCurrentUser,
    signIn
};
