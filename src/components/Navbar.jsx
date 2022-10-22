import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom" //Link
import '../styles/Navbar.css'
import React from 'react'
import { MyContext } from "../context/MyContext"


export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "normal")
  const { total } = React.useContext(MyContext)

  return (
    <>
      <Navbar bg="info" variant="dark" sticky="top">
        <Container className="flex-row-reverse">
          <Navbar.Brand className="justify-content-end">
            <NavLink to="/carrito" className={setActiveClass} end>
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/325/shopping-cart_1f6d2.png" alt="Carrito de compras" className="carritoCompras" /> {total}
            </NavLink>
          </Navbar.Brand>
          <div className="links">
            <NavLink to="/" className={setActiveClass} end>
              <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/pizza_1f355.png" alt="logoPizza" className="pizzaLogo" /> Pizzería Mamma Mia!
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
