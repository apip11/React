import { Link } from 'react-router-dom';

export default function Nasabah () {
    return <>
        <p>Ini Halaman Nasabah</p>

        <hr/>

        <Link to='/about/nasabah/input-nasabah'>
            Input Dari Handeling
        </Link>
    </>
}