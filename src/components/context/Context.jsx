import React, { Children, createContext, useContext, useState } from 'react'


const initContext = createContext()

export const Context = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [modalLoginOpen, setLoginModal] = useState(false)
    const [modalReview, setModalReview] = useState(false)
    const [initialModal, setIntitalModal] = useState(false)

    const [user, setUser] = useState({
        email: "",
    })


    return (
        <>
            <initContext.Provider value={{
                modalOpen,
                setModalOpen,
                modalLoginOpen,
                setLoginModal,
                modalReview,
                setModalReview,
                initialModal,
                setIntitalModal,
                user,
                setUser
            }}>
                {children}
            </initContext.Provider>
        </>
    )

}

export const GetContext = () => {
    return useContext(initContext)
}
