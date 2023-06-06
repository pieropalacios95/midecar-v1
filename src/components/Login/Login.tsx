import React from "react"
import { Button, Card, IconButton, InputLabel, TextField } from "@mui/material"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useForm } from "react-hook-form"
import style from "./Login.module.css"
import { Credentials } from "../../models/Login"
import { login } from "../../services/Login"
import { useNavigate } from "react-router-dom"
import { SetData } from "../../hooks/useSessionStorage"
import { USERS } from "../../utils/Constant"
import logo from "../../assets/LogoMidecar.png"

export default function Login() {
    const { handleSubmit, register } = useForm()

    const [hidden, setHidden] = React.useState(true)
    const [errorMessage, setErrorMessage] = React.useState('')

    const { setValue } = SetData(USERS)
    const navigate = useNavigate()

    const hiddenClickPassword = () => setHidden((hide) => !hide)

    const onClickLogin = (data: Credentials | any) => {
        login(data).then((res: any) => {
            if (res.nombre) {
                setValue(res)
                res.roles === 'admin' ? navigate('/dashboard', { replace: true }) : navigate('/lobby', { replace: true })
            } else {
                setErrorMessage(res)
            }
        })
    }

    return (<div className={style.container}>
        <div className={style.left}>
            <Card className={style.card}>
                <form className={style.weird} onSubmit={handleSubmit(onClickLogin)}>
                    <InputLabel className={style.label}>BIENVENIDO/A </InputLabel>
                    <TextField
                        className={style.input}
                        placeholder="Nombre de usuario"
                        type="text"
                        {...register("username")}
                    />
                    <TextField
                        className={style.input}
                        placeholder="Contraseña"
                        type={hidden ? "password" : "text"}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={hiddenClickPassword}>
                                    {hidden ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            )
                        }}
                        {...register("password")}
                    />
                    <Button
                        className={style.button}
                        variant="contained"
                        type="submit"
                    >
                        INICIAR SESION
                    </Button>
                </form>
            </Card>
        </div>
        <div className={style.right}>
            <img src={logo} width="500" alt="" />
        </div>
    </div>)
}