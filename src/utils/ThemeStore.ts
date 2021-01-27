import  { useState, useEffect, Dispatch,  SetStateAction } from 'react'

type Response <T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export default function ThemeStore<T>(keyTheme: string, initialState: T): Response<T> {

    const [theme, setTheme] = useState(() => {
        const storageValue = localStorage.getItem(keyTheme)
        if (storageValue) {
            return JSON.parse(storageValue)
        } else {
            return initialState
        }
    })
    useEffect(() => {
        localStorage.setItem(keyTheme, JSON.stringify(theme))
    }, [theme, keyTheme])
    
    return [theme, setTheme]

}
