"use client"
import React, { FC } from "react"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

interface StoreProviderProps {
    children: React.ReactNode
}

export const StoreProvider: FC<StoreProviderProps> = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}