import { Container } from "react-bootstrap"
import React from 'react'
import DetallePedido from '../components/DetallePedido'

const Carrito = () => {

  return (
    <Container className="pt-5">
      <DetallePedido></DetallePedido>
    </Container>
  );
};

export default Carrito