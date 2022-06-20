import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentMode, setCurrentMode] = useState('Light')
    const [currentColor, setCurrentColor] = useState('#03c9d7')
    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = event => {
        setCurrentMode(event.target.value)
        localStorage.setItem('themeMode', event.target.value)
        setThemeSettings(false)
    }

    const setColor = color => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true })
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                isClicked, setIsClicked,
                screenSize, setScreenSize,
                handleClick,
                currentColor, setColor,
                currentMode, setMode,
                themeSettings, setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)