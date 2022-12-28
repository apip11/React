import { createStore, combineReducers } from "redux"

export const initialState = {
    jurusan: 'tekom',
    matkul: 'KCSD',
}

export const initialState2 = {
    nama: 'apip',
    alamat: 'panjaitan',
}

export function jurusanReducer(state = initialState, action) {
    if (action.type === 'ubahJurusan') {
        return {
            ...state, jurusan: action.value
        }
    }

    if (action.type === 'ubahMatkul') {
        return {
            ...state, matkul: action.value
        }
    }

    return state
}

export function orangReducer(state = initialState2, action) {
    if (action.type === 'ubahNama') {
        return {
            ...state, nama: action.value
        }
    }

    if (action.type === 'ubahAlamat') {
        return {
            ...state, alamat: action.value
        }
    }

    return state
}

const rootReducer = combineReducers({
    jurusan: jurusanReducer,
    orang: orangReducer
})

const store = createStore(rootReducer)

export default store