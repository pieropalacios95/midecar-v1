import { Box, InputLabel, Modal, TextField } from '@mui/material'
import { Bitacoras } from '../../models/Bitacoras'
import style from "./Admin.module.css"

interface Props {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
    data: Bitacoras | undefined
}

export default function FormModal({ data, open, setOpen }: Props) {

    const handleClose = () => {
        setOpen(false)
        console.log(setOpen(false))
        console.log(open)
    }

    return (
        <div>
            <Modal open={open} onClose={handleClose}>
                <div className={style.containerModal}>
                    <Box>
                        <InputLabel>ID Bitacora</InputLabel>
                        <TextField value={data ? data.id : ''} />
                    </Box>
                    <Box>
                        <InputLabel>DESCRIPCION INGRESO</InputLabel>
                        <TextField value={data ? data.ingreso_carro : ''} />
                    </Box>
                    <Box>
                        <InputLabel>FECHA INGRESO</InputLabel>
                        <TextField value={data ? data.fecha_ingreso_carro.toString()
                                .replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '') : ''} />
                    </Box>
                    <Box>
                        <InputLabel>DESCRIPCION BODEGA</InputLabel>
                        <TextField value={data ? data.ingreso_bodega : ''} />
                    </Box>
                    <Box>
                        <InputLabel>FECHA BODEGA</InputLabel>
                        <TextField value={data ? data.fecha_ingreso_bodega.toString()
                                .replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '') : ''} />
                    </Box>
                    <Box>
                        <InputLabel>DESCRIPCION SALIDA</InputLabel>
                        <TextField value={data ? data.salida_bodega : ''} />
                    </Box>
                    <Box>
                        <InputLabel>FECHA SALIDA</InputLabel>
                        <TextField value={data ? data.fecha_salida_bodega.toString()
                                .replace('T', ' ')
                                .replace('Z', ' ')
                                .replace(':00.000', '') : ''} />
                    </Box>
                    <Box>
                        <InputLabel>ESTADO</InputLabel>
                        <TextField value={data ? data.estado : ''} />
                    </Box>
                    <Box>
                        <InputLabel>USUARIO</InputLabel>
                        <TextField value={data ? data.id_usuario : ''} />
                    </Box>
                </div>
            </Modal>
        </div>
    )
}