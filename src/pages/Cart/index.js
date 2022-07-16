import { useSelector } from "react-redux";
import { CartItem } from "../../components/CartItem";
import "./styles.scss";

export function Cart() {
    const cart = useSelector((state) => state.shop.cart);

    return (
        <section className="products-container">
            <ul className="list">
                {cart.map((item) => (
                    <li key={item.id}>
                        <CartItem
                            id={item.id}
                            image={item.image}
                            name={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}
