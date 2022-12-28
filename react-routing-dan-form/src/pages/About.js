import React from "react"
import {Link, Routes, Route, Outlet} from 'react-router-dom'

export default function About () {
    return <>
    <p>
        Ini Halaman About
    </p>
    <Outlet />
    <br/>
    <Link to="/">
			Kembali ke halaman home
		</Link>
    </>
}