import axios from "axios"
import { useEffect, useState } from "react"

export default function CrudApiTask () {
    
    const originalForm = {
        provinsi:'',
        kota:'',
        kecamatan:''
    }
    const [wilayah, setWilayah] = useState([])
    const [formInput, setFormInput] = useState({...originalForm})

    function getListWilayah () {
        axios.get('http://localhost:3001/wilayah')
        .then((res) => {
            setWilayah(res.data)
        })
        // .catch(error => {
        //     console.log(error) 
        //     alert ('Proses Data Bermasalah')
        // })
    }

    function tambahWilayah () {
        axios.post('http://localhost:3001/wilayah', formInput)
        .then(() => {
            getListWilayah()
        })
        // .catch(error => {
        //     console.log(error) 
        //     alert ('Proses Data Bermasalah')
        // })
    }
    
    function updateWilayah () {
        axios.put('http://localhost:3001/wilayah/' + formInput.id, formInput)
        .then(() => {
            getListWilayah()
        })
        // .catch(error => {
        //     console.log(error) 
        //     alert ('Proses Data Bermasalah')
        // })
    }

    function deleteWilayah (wilayahId) {
        axios.delete('http://localhost:3001/wilayah/' + wilayahId)
        .then(() => {
            getListWilayah()
        })
        // .catch(error => {
        //     console.log(error) 
        //     alert (error.message)
        // })
    }

    function handleSubmit (event) {
        event.preventDefault()
        if( formInput.id) {

            updateWilayah()

        } else {

            tambahWilayah()

        }
    
        setFormInput({...originalForm})
    }

    function handleInput (event, propName){
        const currentFormInput = {...formInput}
        currentFormInput[propName] = event.target.value
        setFormInput(currentFormInput)
        
    }

    function prepareUpdate (wilayah) {
         setFormInput({...wilayah})
    }
    
    useEffect(() => {
        getListWilayah()
    }, [])

    return<>

    <form onSubmit={event => handleSubmit(event)}>
    <h2> Form Wilayah </h2>
    <label>
        Provinsi :
        <input type="text"
        value={formInput.provinsi} 
        onChange={event => handleInput(event, 'provinsi')}
        />
    </label>
    <br/>
    <br/>
    <label>
        Kota :
        <input type="text"
        value={formInput.kota} 
        onChange={event => handleInput(event, 'kota')}
        />
    </label>
    <br/>
    <br/>
    <label>
        Kecamatan :
        <input type="text"
        value={formInput.kecamatan} 
        onChange={event => handleInput(event, 'kecamatan')}
        />
    </label>
    <br/>
    <br/>
    <button>
        submit
    </button>
    </form>
    <br/><hr/><br/>
    
    <h2>
        Daftar Wilayah :
    </h2>
    <ul>
        {wilayah.map (wilayah => 
        <li key={wilayah.id}>
            Provinsi : {wilayah.provinsi} | Kota : {wilayah.kota} | Kecamatan : {wilayah.kecamatan}

            &nbsp;&nbsp;
            <button onClick={() => prepareUpdate(wilayah)}>
                Update
            </button>

            &nbsp;&nbsp;
            <button onClick={() => deleteWilayah(wilayah.id)}>
                Delete
            </button>
        </li>
        )}
    </ul>
    </>
}