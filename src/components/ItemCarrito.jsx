import React from 'react'
import { MyContext } from "../context/MyContext"
import { Stack } from "react-bootstrap"

const ItemCarrito = (props) => {
    let id = props.id
    let cantidad = props.cantidad
    const { listPizza, decrementarCantidadCarrito, incrementarCantidadCarrito, cantidadDePizzas, removerDelCarro, formatter} = React.useContext(MyContext)

    const item = listPizza.find(i => i.id === id)
    if (item == null) return null


    return (
        <Stack direction='horizontal' gap={2} style={{width: '100%'}}>
            <div>
                <img src={item.img} style={{ width: '125px', height: '75px', objectFit: 'cover' }} alt="" />
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h3>{item.name}</h3>
            <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <span style={{paddingRight:'15px', fontWeight:'700'}}>{formatter.format(item.price)}</span>
            {cantidadDePizzas(item.id) === 0
                ? 
                (
                
                <div className='d-flex alig-items-center justify-content-center' style={{ gap: '0.5rem' }}>
                    <button type="button" className="btn btn-success" value={item.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)}> Volver a Agregar 🛒</button>
                                        <button type="button" className="btn btn-danger" value={item.id} onClick={({ target }) => removerDelCarro(target.value)} >Remover</button>
                                    </div>
                )
                : <div className='d-flex flex-row justify-content-center align-items-center' style={{ gap: '15px' }}>
                    <button size="sm" type="button" className="btn btn-danger" value={item.id} onClick={({ target }) => decrementarCantidadCarrito(target.value)} >-</button>
                    <span>{cantidad}</span>
                    <button size="sm" type="button" className="btn btn-success" value={item.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)} >+</button>
                </div>
            }
            </div>
            </div>
        </Stack>
    )
}

export default ItemCarrito