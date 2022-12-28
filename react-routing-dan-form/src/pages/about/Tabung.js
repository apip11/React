import React from "react"
import {Link, Routes, Route, Outlet} from 'react-router-dom'

export default function Tabung() {
    return<>
    <p>
        Ini Halaman Menabung
    </p>

    <hr/>

    <Link to='/about/tabung/mata-uang'>
        Mata Uang
    </Link>
    </>
}