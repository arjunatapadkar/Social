import { createContext, useState } from "react";

export const DarkMode = createContext();

export default function ContextProvider({children}){

    const [dark, setDark] = useState(true);

    const value = {
        dark,
        setDark
    }

    return <DarkMode.Provider value={value}>{children}</DarkMode.Provider>

}