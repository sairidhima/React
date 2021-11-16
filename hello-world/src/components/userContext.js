import React from "react";

const UserContext = React.createContext('Hello employee')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider,UserConsumer}