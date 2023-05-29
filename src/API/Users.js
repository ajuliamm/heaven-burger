const API_URL = "https://heaven-burger-api-mock.vercel.app";

export const postLogin = (typedEmail, typedPassword) => {
    return fetch(`${API_URL}/login`, {
    // Tipo da requisicao
        method: "POST",
        //o headers indicar que estamos enviando dados no formato JSON.
        //o content type serve para indicar o tipo de dado que estamos enviando.
        headers: {
            "Content-Type": "application/json",
        },
        // Dados a serem enviados na requisicao
        body: JSON.stringify({
            email: typedEmail,
            password: typedPassword
        })
})
}

export const postRegister = (typedEmail, typedPassword, role) => {

    return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        email: typedEmail,
        password: typedPassword,
        role: role
    }),
})
.then(response => response.json()) // Converter a resposta em json
.then(json => console.log(json))
.catch(error => {
    console.log(error)
    throw error
});
}
