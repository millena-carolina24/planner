import React from 'react'
import { Outlet } from "react-router-dom";



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