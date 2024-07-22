'use client'
import { DevInfo } from "@/app/lib/definitions";
import { createContext, useContext } from "react";
import { FaGithub } from "react-icons/fa";

const defaultDev: DevInfo = {
    name: "Pablo Hernández",
    icon: FaGithub,
    link: "https://github.com/pablohernandezm"
}

const DevContext = createContext([defaultDev]);

export const DevContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <DevContext.Provider value={[defaultDev]}>
            {children}
        </DevContext.Provider>
    );
}

export const useDevContext = () => {
    return useContext(DevContext);
}