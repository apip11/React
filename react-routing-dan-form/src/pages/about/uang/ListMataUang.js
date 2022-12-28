import { Link } from "react-router-dom";

export default function ListMataUang () {
    return<>
    <p>
        List Mata Uang :
    </p>
    <ul>
        <li>
            Dollar | <Link to='/about/tabung/mata-uang/dollar'> Dollar </Link>
        </li>
        <hr/>
        <li>
            Yen | <Link to='/about/tabung/mata-uang/yen'> Yen </Link>
        </li>
        <hr/>
        <li>
            Rupiah | <Link to='/about/tabung/mata-uang/rupiah'> Rupiah </Link>
        </li>
        <hr/>
        <li>
            Euro | <Link to='/about/tabung/mata-uang/euro'> Euro </Link>
        </li>
    </ul>
    </>
}