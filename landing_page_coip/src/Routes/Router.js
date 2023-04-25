import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../Components/Header/Header"
import { HomePage } from "../Pages/HomePage/HomePage"
import GlobalStyle from "../globalStyles"

export const Router = () => {

    return(
        
            <BrowserRouter>
            <GlobalStyle/>
            <Header/>
                <Routes>
                    <Route index element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
    )
}