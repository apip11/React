import React, { Component }from 'react'
import {Link, Routes, Route} from 'react-router-dom'

export default class Home extends Component {
    render () {
        return <>
        <p>
            Ini Halaman Home
        </p>
            <Link to = "/about">
                Pindah Ke Halaman About
            </Link>
        </>
    }
}