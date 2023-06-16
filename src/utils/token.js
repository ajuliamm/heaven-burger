const setItens = (token) => {
    localStorage.setItem("token", token)
}
const getItens = () => {
    return localStorage.getItem("token")
}
const clearLocalStorage = () => {
    localStorage.clear();
}
export {setItens, getItens, clearLocalStorage}
