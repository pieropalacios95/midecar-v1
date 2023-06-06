export type User = {
    token: string,
    id: number,
    nombre: string,
    roles: string
}

export type UserContextType = {
    users: User,
    setUsers: (param: User) => void
}

export const userDefault = {
    token: "",
    id: 0,
    nombre: "",
    roles: ""
}