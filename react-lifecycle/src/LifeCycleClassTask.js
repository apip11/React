import React from "react";

const listItem = [
    {
        nama: 'Keyboard',
        harga: 300000
    },
    {
        nama: 'Mouse',
        harga: 250000
    },
    {
        nama: 'Speaker',
        harga: 500000
    },
    {
        nama: 'Monitor',
        harga: 2300000
    },
    {
        nama: 'CPU',
        harga: 20000000
    },
]

export default class LifeCycleClassTask extends React.Component{
    constructor (){
        super()

        this.state = {
            products: [],
            carts: []
        }
    }

    componentDidMount () {
        this.setState({ products: listItem })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.carts.length !== this.state.carts.length) {

            let total = 0;

            for (const keranjang of this.state.carts) {
                total = total + keranjang.harga
            }

            this.setState({ totalHarga : total})
        }
    }

    tambahItem (item) {
		const keranjang = [...this.state.carts]
		keranjang.push(item)
		this.setState({ carts: keranjang })
	}

    delItem (item) {
        const keranjang = [...this.state.carts]
        const index = keranjang.indexOf(item)
        
        if (index !== -1) {
            keranjang.splice(index,1)
            this.setState({carts: keranjang})
        }
    }

    render () {
        return(
            <div>
                <p> Daftar Barang: </p>
                <ul>
                    {this.state.products.map((barang) => (
                        <li>
                            {barang.nama} |
                            Rp. {barang.harga} |
                            
                            <button onClick={()=> this.tambahItem(barang)}>
                                Keranjang 
                            </button>
                        </li>
                    ))}
                </ul>

                <p> Keranjang </p>

                <ul>
                    {this.state.carts.map((carts) =>
                    <li>
                        {carts.nama} |
                        Rp. {carts.harga} |

                        <button onClick={() => this.delItem(carts)}>
                            Delete
                        </button>
                    </li>
                    )}
                </ul>

                <p> Total: {this.state.totalHarga}</p>
            </div>
        )
    }
}