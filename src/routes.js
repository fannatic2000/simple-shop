import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    
    {
        path: '/cart',
        exact: false,
        main: () => <CartPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    },
];

export default routes;