import { useState } from "react"

export function SetData(key: any) {
    const [storedValue, setStoredValue] = useState()

    const setValue = (value: any) => {
        try {
            console.log(value)
            setStoredValue(value)
            window.sessionStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.error(error)
        }
    }

    return {storedValue, setValue}
}

export function ObtainData(key: string) {
    try {
        const item = window.sessionStorage.getItem(key)
        return item ? JSON.parse(item) : ''
    } catch (error) {
        return error
    }
}

export function Logout() {
    return window.sessionStorage.clear()
}