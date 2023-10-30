import React, { Children, createContext, useContext, useState } from 'react'


const initContext = createContext()

export const Context = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalLoginOpen, setLoginModal] = useState(false)


    return (
        <>
            <initContext.Provider value={{ modalOpen, setModalOpen, modalLoginOpen, setLoginModal }}>
                {children}
            </initContext.Provider>
        </>
    )

}

export const GetContext = () => {
    return useContext(initContext)
}
