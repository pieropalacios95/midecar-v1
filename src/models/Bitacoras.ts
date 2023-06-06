export type Bitacoras = {
    id: number,
    ingreso_carro: string,
    fecha_ingreso_carro: Date,
    ingreso_bodega: string,
    fecha_ingreso_bodega: Date,
    salida_bodega: string,
    fecha_salida_bodega: Date,
    estado?: boolean,
    id_usuario: number
}