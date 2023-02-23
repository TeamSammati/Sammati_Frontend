import React, { useState } from 'react'
import Dashboard from './Dashboard'
import LoginPage from './LoginPage'

const Main = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const setLoginStatus = () => {
        setIsLoggedIn(1)
    }
    const resetLoginStatus = () => {
        setIsLoggedIn(null)
    }
    return (
        <div>
            {
                (isLoggedIn === null) && <LoginPage LoginStatus={setLoginStatus}/>
            }
            {
                (isLoggedIn !== null) && <Dashboard LoginStatus={resetLoginStatus}/>
            }
        </div>

    )
}

export default Main