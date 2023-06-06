import React from "react"
import { IconButton } from "@mui/material"
import { DataGrid, esES, GridColDef, GridToolbar } from "@mui/x-data-grid"
import { ViewTimeline, Edit } from "@mui/icons-material"
import { Bitacoras } from "../../models/Bitacoras"
import { getBitacora } from "../../services/Bitacoras"
import FormModal from "./FormModal"

interface Props {
    bitacoras: Array<Bitacoras> | undefined
}

export default function BitacorasTable({ bitacoras }: Props) {

    
    const [openModal, setOpenModal] = React.useState<boolean>(false)
    const [data, setData] = React.useState()

    const columns: GridColDef[] = [{
        field: "estado",
        headerName: "ESTADO"
    }, {
        field: "id_usuario",
        headerName: "USUARIO",
        flex: 1
    }, {
        field: "ingreso_carro",
        headerName: "DESCRIPCION INGRESO",
        flex: 1
    }, {
        field: "fecha_ingreso_carro",
        headerName: "FECHA DE INGRESO",
        flex: 1
    }, {
        field: "acciones",
        headerName: "ACCIONES",
        renderCell: (params: any) => {
            const viewDetails = (e: any) => {
                e.stopPropagation()
                setOpenModal(true)
                getBitacora(params.id).then(res=>(
                    setData(res)
                ))
            }

            return <div>
                <IconButton onClick={viewDetails}>
                    <ViewTimeline />
                    <FormModal data={data} setOpen={setOpenModal} open={openModal} />
                </IconButton>
                <IconButton>
                    <Edit />
                </IconButton>
            </div>
        }
    }]

    return (
        <>
            <DataGrid
                columns={columns}
                rows={bitacoras!}
                slots={{ toolbar: GridToolbar }}
                localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            />
        </>
    )
}