import store from "./store"

export default function ComponentB() {
    return <>

        Saya Komponen B
        <br />
        Jurusan : {store.getState().jurusan.jurusan}
    </>
}