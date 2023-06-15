import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '../../components/Header/Header';



export function Root() {
    return (
        <>

            {/* <Header></Header> */}
            <main>
                <Outlet />
            </main>

        </>
    )
};