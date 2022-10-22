import { Container } from "react-bootstrap";
import '../styles/Banner.css'

const Banner = () => {
    return (
        <div className="containerBanner">
            <div className="containerTitulo">
                <h1>¡Pizzería Mamma Mia!</h1>
                <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
                <hr className="hr-banner"/>
            </div>
        </div>
    )
}

export default Banner