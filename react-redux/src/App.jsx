import store from "./store";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentD from "./ComponentD";

export default function App() {
  function tampilkanStore() {
    console.log(store.getState())
  }

  function handleUbahMatkul() {
    store.dispatch({
      type: 'ubahMatkul',
      value: 'Mikrokontroler',
    })
  }

  function handleUbahJurusan() {
    store.dispatch({
      type: 'ubahJurusan',
      value: 'TI',
    })
  }

  function handleUbahNama() {
    store.dispatch({
      type: 'ubahNama',
      value: 'pip',
    })
  }

  function handleUbahAlamat() {
    store.dispatch({
      type: 'ubahAlamat',
      value: 'tuban',
    })
  }

  return <>
    <button onClick={tampilkanStore}> tampilkan isi store </button>
    <br />
    <button onClick={handleUbahMatkul}> ubah Matkul </button>
    <br />
    <button onClick={handleUbahJurusan}> ubah Jurusan </button>
    <br />
    <button onClick={handleUbahNama}> ubah Nama </button>
    <br />
    <button onClick={handleUbahAlamat}> ubah Alamat </button>

    <br /><hr /><br />

    <ComponentA />

    <br /><hr /><br />

    <ComponentB />

    <br /><hr /><br />

    <ComponentC />

    <br /><hr /><br />

    <ComponentD />

    <br /><hr /><br />

  </>
}