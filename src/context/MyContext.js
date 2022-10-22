import React from 'react'
import axios from 'axios'
export const MyContext = React.createContext({});

const ApiProvider = (props) => {
    const [listPizza, setListPizza] = React.useState([])
    const [carrito, setCarrito] = React.useState([])

    React.useEffect(() => {
        const getPizzas = async () => {
            try {
                const endPoint = "./pizzas.json"
                const res = await axios.get(endPoint)
                setListPizza(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPizzas()
    }, [])

    const cantidadDePizzas = (id) => { return carrito.find(item => item.id === id)?.cantidad || 0 }

    const incrementarCantidadCarrito = (id) => {
        setCarrito(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, cantidad: 1 }]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }


    const decrementarCantidadCarrito = (id) => {
        setCarrito(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, cantidad: item.cantidad - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removerDelCarro = (id) => {
        setCarrito(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
    })

    const total = formatter.format(carrito.reduce((total, itemCarrito) => {
        const item = listPizza.find(i => i.id === itemCarrito.id)
        return total + (item?.price || 0) * itemCarrito.cantidad
    }, 0))


    return (
        <MyContext.Provider
            value={{ listPizza, setListPizza, carrito, setCarrito, cantidadDePizzas, incrementarCantidadCarrito, decrementarCantidadCarrito, removerDelCarro, formatter, total }}
        >
            {props.children}
        </MyContext.Provider>
    )

}

export default ApiProvider