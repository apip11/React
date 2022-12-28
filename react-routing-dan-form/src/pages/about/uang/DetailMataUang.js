import { useParams, Link } from "react-router-dom";

export default function DetailMataUang () {
    let params = useParams()
    return<>
    <p>
        Detail Mata Uang
    </p>
    <p>
        {params.listmatauang}
    </p>
    <hr/>
    <Link to='/about/tabung/mata-uang'> Kembali Ke List Mata Uang</Link>
    </>
}