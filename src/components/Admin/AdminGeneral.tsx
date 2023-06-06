import React from "react"
import { Navigate } from "react-router-dom"
import { Fab } from "@mui/material"
import { Add } from "@mui/icons-material"
import { ObtainData } from "../../hooks/useSessionStorage"
import { Bitacoras } from "../../models/Bitacoras"
import { User } from "../../models/Users"
import { getBitacoras } from "../../services/Bitacoras"
import { USERS } from "../../utils/Constant"
import UserBar from "../Users/UserBar"
import style from "./Admin.module.css"
import BitacorasTable from "./BitacorasTable"

export function AdminGeneral() {

    const [bitacoras, setBitacoras] = React.useState<Array<Bitacoras>>()
    const user: User = ObtainData(USERS)

    React.useEffect(() => {
        getBitacoras().then(res => setBitacoras(res))
    }, [])

    if (user.roles === 'lobby') {
        return <Navigate to={"/lobby"} />
    } else if (user.roles !== 'admin') {
        return <Navigate to={"/"} />
    }

    return (
        <div className={style.container}>
            <UserBar name={user.nombre} />
            {
                !!bitacoras && <BitacorasTable bitacoras={bitacoras} />
            }
            <Fab className={style.float} variant="extended">
                <Add />
                CREAR BITACORA
            </Fab>
        </div>
    )
}