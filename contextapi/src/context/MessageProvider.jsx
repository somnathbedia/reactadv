import React from "react";
import { useState } from "react"
import { MessageContext } from "./MesssageContext"


export const MessageProvider = ({children}) => {
    const [message, setMessage] = useState("");
    return (
        <MessageContext.Provider value={{message, setMessage}}>
        {children}
    </MessageContext.Provider>
    )
    
}
