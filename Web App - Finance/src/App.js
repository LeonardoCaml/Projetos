import React from "react"
import GlobalStyle from "./style/global"
import Header from "./components/Header"
import Resume from "./components/Resume"

const App = () => {
    return(
        <div> 
            <Header />
            <Resume />

            <GlobalStyle />
        </div> 
    )
}

export default App