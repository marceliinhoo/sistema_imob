import React from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'

import Home from "./pages/Home"
import Financeiro from "./pages/Financeiro"
import Gestao from "./pages/Gestao"
import Integracao from "./pages/Integracao"
import Politica from "./pages/Politica"
import Contato from "./pages/Contato"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Home />}
                />
                <Route
                    exact
                    path="/integracao"
                    element={<Integracao />}
                />
                <Route
                    exact
                    path="/gestao"
                    element={<Gestao />}
                />
                <Route
                    exact
                    path="/financeiro"
                    element={<Financeiro />}
                />
                 <Route
                    exact
                    path="/politica"
                    element={<Politica />}
                />
                    <Route
                    exact
                    path="/contato"
                    element={<Contato />}
                />
                 

                
            </Routes>
        </BrowserRouter>
    )
}

export default Router