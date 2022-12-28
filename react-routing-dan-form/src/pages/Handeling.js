import { useState } from "react";

export default function Handeling (){
    let [name, setName] = useState()
    let [negara, setNegara] =useState()

    function handelingName(eventName) {
        setName(eventName.target.value)
    }
    function handelingNegara(eventNegara) {
        setNegara(eventNegara.target.value)
    }
    function handelingSubmit() {
        let payload = {
            Name: name,
            Negara: negara
        }
        console.log(payload)
    }
    return <>
    <label>
        Asal Negara : <br></br>
        <input type='text' onChange={handelingName}/>
    </label>
    <br/>
    <br/>
    <label>
    Masukkan Nama Mata Uang : <br />
        <select onChange={(event) => setNegara(event.target.value)} value={negara}>
          <option value="yen">Yen</option>
          <option value="rupiah">Rupiah</option>
          <option value="euro">Euro</option>
          <option value="dollar">Dollar</option>
        </select>
      </label>
      <br/>
      <br/>
      <button onClick={handelingSubmit}>submit</button>
    </>
}