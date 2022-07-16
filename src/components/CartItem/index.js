import { Trash } from "phosphor-react";
import { removeFromCart } from "../../store/acions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";

export function CartItem(props) {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className="cartitem-container">
            <img
                src={props.image}
                alt={props.name}
                className="cartitem-image"
            />

            <div className="cartitem-details">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <span>$ {props.price}</span>
            </div>

            <div className="cartitem-controls">
                <button
                    type="button"
                    onClick={() => dispatch(removeFromCart(props.id))}
                    className="trash"
                >
                    <Trash size={32} />
                </button>
                <div className="qtd">
                    <button type="button" onClick={() => setCount(count - 1)}>
                        -
                    </button>
                    <span>{count}</span>
                    <button type="button" onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
