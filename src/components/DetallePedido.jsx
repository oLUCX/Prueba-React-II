import React from 'react'
import { Container, Stack } from "react-bootstrap"
import { MyContext } from "../context/MyContext"
import ItemCarrito from '../components/ItemCarrito'
import { Link } from "react-router-dom"

const DetallePedido = () => {
    const { carrito, listPizza, formatter } = React.useContext(MyContext)

    return (
        <Container className="pt-2" style={{ width: '100%' }}>
            <h1>Detalle de pedido:</h1>
            {
                carrito.length === 0
                    ? (<h2> No hay items en el carro</h2>)
                    : <Stack gap={3} style={{ width: '100%' }}>
                        {carrito.map(item => (
                            <ItemCarrito key={item.id} id={item.id} cantidad={item.cantidad} />
                        ))}
                    </Stack>
            }
            <div style={{fontWeight: 600, fontSize:'2em', marginTop:'10px'}}>
                Total{' '}
                {
                   formatter.format(carrito.reduce((total, itemCarrito) =>{
                    const item = listPizza.find(i => i.id === itemCarrito.id)
                    return total + (item?.price || 0 ) * itemCarrito.cantidad
                   }, 0))
                }
            </div>
            <Link to="/">
                <button className="btn btn-info" style={{ margin: '15px 0px 0px 0px' }}>
                    Volver a Home
                </button> 
            </Link>
                <button className="btn btn-success" style={{ margin: '15px 0px 0px 0px' }}>
                    Pagar
                </button> 
        </Container>
    )
}

export default DetallePedido