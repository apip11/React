import store from "./store"

export default function ComponentD() {
    return <>

        Saya Komponen D
        <br />
        Alamat : {store.getState().orang.alamat}
    </>
}