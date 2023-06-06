import axios from "axios"
import { ObtainData } from "../hooks/useSessionStorage"
import { User } from "../models/Users"
import { USERS } from "../utils/Constant"

const user: User = ObtainData(USERS)

const preflight = {
    'Authorization': `Bearer ${user.token}`
}

export const getBitacorasByUser = async (idCliente: number) => {
    return await axios.get(`${process.env.REACT_APP_API}/bitacoras/byUser`, { headers: preflight, params: { id: idCliente } })
        .then(response => { return response.data })
        .catch(error => { return error })
}

export const getBitacora = async (id: number) => {
    return await axios.get(`${process.env.REACT_APP_API}/bitacoras/${id}`, { headers: preflight })
        .then(response => { return response.data })
        .catch(error => { return error })
}

export const getBitacoras = async () => {
    return await axios.get(`${process.env.REACT_APP_API}/bitacoras`, { headers: preflight })
        .then(response => { return response.data })
        .catch(error => { return error })
}