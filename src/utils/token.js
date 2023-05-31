const setItens = (token) => {
    localStorage.setItem("token", token)
}
const getItens = () => {
    return localStorage.getItem("token")
}
export {setItens, getItens}