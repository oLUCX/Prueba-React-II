import React from 'react'
import { useNavigate } from "react-router-dom"
import { MyContext } from "../context/MyContext"
import Card from 'react-bootstrap/Card';
import '../styles/Productos.css'

const Productos = () => {
    const { listPizza, cantidadDePizzas, incrementarCantidadCarrito, decrementarCantidadCarrito, removerDelCarro, formatter } = React.useContext(MyContext)

    const navigate = useNavigate()
    const irAPizzaDetalle = (valor) => {
        navigate(`/pizza/${valor}`)
    }

    return (
        <>
            <div className="mt-5 d-flex align-items-center justify-content-center containerProductos">
                {listPizza.map((pizza) => (
                    <Card style={{ width: '18rem', margin: '0em 0em 2em 0em' }} key={pizza.id}>
                        <Card.Img variant="top" src={pizza.img} />
                        <Card.Body>
                            <Card.Title>{pizza.name}</Card.Title>
                            <hr className='hr-cards' />
                            <Card.Text>
                                Ingredientes:
                            </Card.Text>
                            <ul>
                                {pizza.ingredients.map((ingrediente) => (
                                    <li key={Math.random()}>🍕{ingrediente}</li>
                                ))}
                            </ul>
                        </Card.Body>
                        <hr className='hr-cards' />
                        <Card.Body className='d-flex align-items-center justify-content-center'>
                            <span className='priceCard'>{formatter.format(pizza.price)}</span>
                        </Card.Body>
                        <Card.Body className='d-flex justify-content-center containerBtnsCard'>
                            <button type="submit" className="btn btn-info" value={pizza.id} onClick={({ target }) => irAPizzaDetalle(target.value)}>👀 Ver Mas</button>
                            {cantidadDePizzas(pizza.id) === 0 ?
                                (<button type="button" className="btn btn-danger" value={pizza.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)}>Agregar 🛒</button>)
                                :
                                <div className='m-flex align-items-center flex-column' style={{ gap: '0.5rem' }}>
                                    <div className='d-flex flex-row' style={{ gap: '15px' }}>
                                        <button size="sm" type="button" className="btn btn-danger" value={pizza.id} onClick={({ target }) => decrementarCantidadCarrito(target.value)} >-</button>
                                        <button size="sm" type="button" className="btn btn-success" value={pizza.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)} >+</button>
                                    </div>
                                    <div>
                                        <span style={{fontSize: '2em'}}>{cantidadDePizzas(pizza.id)}</span> En el carro
                                    </div>
                                    <div className='d-flex alig-items-center justify-content-center' style={{ gap: '0.5rem' }}>
                                        <button type="button" className="btn btn-danger" value={pizza.id} onClick={({ target }) => removerDelCarro(target.value)} >Remover</button>
                                    </div>
                                </div>
                                }
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Productos