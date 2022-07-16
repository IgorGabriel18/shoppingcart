import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import "./App.scss";

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
