import { Button, Card } from '@mui/material'
import { Bitacoras } from "../../models/Bitacoras"
import style from './Users.module.css'
import { useNavigate } from 'react-router-dom'

interface Props {
    params: Bitacoras
}

export default function ResumeCard({ params }: Props) {

    const navigate = useNavigate()

    const bitacoraDetails = () => {
        navigate('/order', { replace: true, state: { id: Number(params.id) } })
    }

    return (
        <Card className={style.card}>
            <h3 className={style.label_card}>
                {params.ingreso_carro}
            </h3>
            <h4 className={style.label_card}>
                {params.fecha_ingreso_carro.toString()
                    .replace('T', ' ')
                    .replace('Z', ' ')
                    .replace(':00.000', '')
                }
            </h4>
            <Button className={style.card_button} variant='contained' onClick={bitacoraDetails}>Detalles</Button>
        </Card>
    )
}