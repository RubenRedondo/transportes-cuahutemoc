export const errorReponnse = (reason, code) => {
    return {
        message: reason,
        code,
        success: false
    }
}
