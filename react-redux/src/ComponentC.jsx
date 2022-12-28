import store from "./store"

export default function ComponentC() {
    return <>

        Saya Komponen C
        <br />
        Nama : {store.getState().orang.nama}
    </>
}