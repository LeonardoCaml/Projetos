import React from "react"
import GlobalStyle from "./style/global"
import Header from "./components/Header"
import Resume from "./components/Resume"
import Form from "./components/Form"

const App = () => {
    return(
        <div> 
            <Header />
            <Resume />
            <Form />

            <GlobalStyle />
        </div> 
    )
}

export default App