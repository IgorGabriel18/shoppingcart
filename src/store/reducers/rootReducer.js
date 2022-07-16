import { combineReducers } from "redux";

import shoppingReducer from "./index";

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;
