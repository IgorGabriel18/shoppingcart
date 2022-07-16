import { addToCart } from "../../store/acions";
import { useDispatch } from "react-redux";
import "./styles.scss";

export function Product(props) {
    const dispatch = useDispatch();

    return (
        <div className="product-container">
            <img src={props.image} alt={props.name} className="image" />

            <div className="product-details">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <span>$ {props.price}</span>
            </div>

            <div className="product-controls">
                <button
                    type="button"
                    onClick={() => dispatch(addToCart(props.id))}
                >
                    <span>Add ao carrinho</span>
                </button>
            </div>
        </div>
    );
}
