import React from "react"
import { Card, Step, StepContent, StepLabel, Stepper } from "@mui/material"
import { Bitacoras } from "../../models/Bitacoras"
import { getBitacora } from "../../services/Bitacoras"
import { useLocation } from "react-router-dom"
import style from "./Users.module.css"
import logo from "../../assets/LogoMidecar.png"


export default function Detailedorder() {

    const [order, setOrder] = React.useState<Bitacoras>()
    const location = useLocation()

    React.useEffect(() => {
        getBitacora(location.state.id).then((res: any) => {
            console.log('DETAILED ORDER',res[0])
            setOrder(res[0])})
    }, [location.state.id])

    return (
        <div className={style.stepper_container}>
            <Card className={style.stepper_card}>
                <Stepper className={style.stepper} activeStep={Number(order?.estado) - 1} orientation="vertical">
                    <Step>
                        <StepLabel><b>{order?.ingreso_carro}</b></StepLabel>
                        <StepContent>
                            {order?.fecha_ingreso_carro.toString()
                                .replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '')}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel><b>{order?.ingreso_bodega}</b></StepLabel>
                        <StepContent>
                            {order?.fecha_ingreso_bodega.toString().replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '')}
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel><b>{order?.salida_bodega}</b></StepLabel>
                        <StepContent>
                            {order?.fecha_salida_bodega.toString().replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '')}
                        </StepContent>
                    </Step>
                </Stepper>
                <img className={style.logo_stepper} src={logo} alt=""/>
            </Card>
        </div>
    )
}