import * as actionTypes from "../acions/types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            price: 15.0,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 2,
            title: "Large Coffee Cup",
            price: 20.0,
            image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            price: 150.0,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
        },
    ],
    cart: [],
    currentItem: null,
};

export default function shopReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                          item.id === action.payload.id
                              ? { ...item, qty: item.qty + 1 }
                              : item
                      )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
}
