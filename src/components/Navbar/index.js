import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./styles.scss";

export function Navbar() {
    const cart = useSelector((state) => state.shop.cart);

    return (
        <header>
            <div>
                <Link to="/" className="home-link">
                    <h1>Shopping Cart</h1>
                </Link>
                <Link to="/cart" className="cart-link">
                    <ShoppingCart size={32} className="icon" />
                    <span className="items">{cart.length}</span>
                </Link>
            </div>
        </header>
    );
}
