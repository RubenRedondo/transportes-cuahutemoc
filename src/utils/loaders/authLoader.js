import {SESSION_STORAGE_USER_KEY} from "../constants/index.js";

export const authLoader = () => {

    const storedUser = localStorage.getItem(SESSION_STORAGE_USER_KEY);

    return {
        user: storedUser ? JSON.parse(storedUser) : null,
    }

}
