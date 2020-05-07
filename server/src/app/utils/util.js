export function validatePassword(password, confirmPassword) {
    if (password != confirmPassword) {
        return { error: true, msg: "Senhas não conferem" };
    } else if (!password.test(/^(([\@\!\@\#\$\%\&\*\(\)\[\]\/\-\+\.\,\?\:\;]+)|([a-zA-Z0-9]*)){6,}$/)){
        return { error: true, msg: "Senha não cumpre os requisitos mínimos" };
    }

    return { error: false, msg: '' };
}