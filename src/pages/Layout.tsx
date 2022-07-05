import React from 'react'
import { Outlet } from 'react-router-dom'
import FootContainer from "../components/footer/FootContainer";
import NavComp from "../components/nav/NavComp";

import '../styles/components/FootContainer.css'

export const Layout = () => {
    return (
        <div className="layout">
            <header>
                <NavComp />
            </header>
            <section>
                <main>
                    <Outlet />
                </main>
            </section>
            <footer>
                <FootContainer />
            </footer>
        </div>
    )
}
