import { useSelector } from "react-redux";
import { Product } from "../../components/Product";
import { CartItem } from "../../components/CartItem";
import "./styles.scss";

export function Home() {
    const products = useSelector((state) => state.shop.products);

    return (
        <section className="cart-container">
            <ul className="list">
                {products.map((item) => (
                    <li key={item.id}>
                        <Product
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
