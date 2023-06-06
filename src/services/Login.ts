import axios from "axios"

export const login = async (data: Credential) => {
    return await axios.post(`${process.env.REACT_APP_API}/usuarios/login`, data)
        .then(response => { return response.data })
        .catch(error => { return error.response.data.error })
}