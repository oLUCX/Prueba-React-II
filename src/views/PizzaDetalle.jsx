import React from 'react'
import { useParams, Link } from "react-router-dom"
import { MyContext } from "../context/MyContext"
import '../styles/PizzaDetalle.css'
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


const PizzaDetalle = () => {
    const { id } = useParams()
    const { listPizza, cantidadDePizzas, incrementarCantidadCarrito, decrementarCantidadCarrito, removerDelCarro, formatter } = React.useContext(MyContext)
    const found = listPizza.find(element => element.id === id)


    return (
        <Container className="pt-5">
            <div className="card mb-3">
                <div className="row">
                    <div className="col-4" style={{ background: `url(${found.img})`, backgroundSize: 'cover' }}></div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {found.name}
                            </h5>
                            <hr />
                            <p className="card-text">
                                {found.desc}
                            </p>
                            <Container>
                                <h5>Ingredientes: </h5>
                                <ul>
                                    {found.ingredients.map((ingrediente) => (
                                        <li key={Math.random()}>🍕{ingrediente}</li>
                                    ))}
                                </ul>
                            </Container>
                            <div className="d-flex justify-content-between">
                                <p className="fs-2">
                                    Precio: {formatter.format(found.price)}
                                </p>
                                {
                                    cantidadDePizzas(found.id) === 0
                                        ? (<div><Button variant="danger" value={found.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)} >Añadir 🛒</Button></div>)
                                        :
                                        <div className='d-flex align-items-center flex-column' style={{ gap: '0.5rem' }}>
                                            <div className='d-flex flex-row' style={{ gap: '15px' }}>
                                                <button type="button" className="btn btn-danger" value={found.id} onClick={({ target }) => decrementarCantidadCarrito(target.value)} >-</button>
                                                <button type="button" className="btn btn-success" value={found.id} onClick={({ target }) => incrementarCantidadCarrito(target.value)} >+</button>
                                            </div>
                                            <div>
                                                <span className='fs-2'>{cantidadDePizzas(found.id)}</span> En el carro
                                            </div>
                                            <div className='d-flex alig-items-center justify-content-center' style={{ gap: '0.5rem' }}>
                                                <button type="button" className="btn btn-danger" value={found.id} onClick={({ target }) => removerDelCarro(target.value)} >Remover</button>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <Button className="mx-2 text-white" variant="info">
                    Volver a Home
                </Button>
            </Link>
        </Container>
    )
}

export default PizzaDetalle 