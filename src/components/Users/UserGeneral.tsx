import React from "react"
import { ObtainData } from "../../hooks/useSessionStorage"
import { Bitacoras } from "../../models/Bitacoras"
import { User } from "../../models/Users"
import { getBitacorasByUser } from "../../services/Bitacoras"
import { USERS } from "../../utils/Constant"
import style from "./Users.module.css"
import ResumeCard from './ResumeCard'
import UserBar from "./UserBar"

export function UserGeneral() {

    const user: User = ObtainData(USERS)
    const [bitacoras, setBitacoras] = React.useState<Array<Bitacoras>>()

    React.useEffect(() => {
        getBitacorasByUser(user.id).then(res => { setBitacoras(res) })
    }, [user.id])

    return (
        <div className={style.container}>
            <UserBar name={user.nombre} />
            {
                bitacoras?.map(res => (
                    <ResumeCard params={res} key={res.id} />
                ))
            }
        </div>
    )
}