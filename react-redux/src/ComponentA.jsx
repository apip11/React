import store from "./store"

export default function ComponentA() {
    return <>

        Saya Komponen A
        <br />
        Mata Kuliah : {store.getState().jurusan.matkul}
    </>
}