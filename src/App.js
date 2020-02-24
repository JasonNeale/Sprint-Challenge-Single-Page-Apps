import React from "react"

import Header from "./components/Header"
import WelcomePage from "./components/WelcomePage"


export default function App() {
    return (
        <div className="row main centered">
            <Header />
            <WelcomePage />
        </div>
    )
}
