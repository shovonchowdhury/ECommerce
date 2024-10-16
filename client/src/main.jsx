import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Authlayout from "./layout/Authlayout.jsx";
import AdminLayout from "./layout/AdminLayout.jsx";
import AdminDashboard from "./pages/adminView/AdminDashboard.jsx";
import AdminProducts from "./pages/adminView/AdminProducts.jsx";
import AdminOrders from "./pages/adminView/AdminOrders.jsx";
import AdminFeatures from "./pages/adminView/AdminFeatures.jsx";
import ShoppingLayout from "./layout/ShoppingLayout.jsx";
import NotFound from "./pages/NotFound.jsx";
import ShoppingHome from "./pages/shoppingView/ShoppingHome.jsx";
import ShoppingListing from "./pages/shoppingView/ShoppingListing.jsx";
import ShoppingAccount from "./pages/shoppingView/ShoppingAccount.jsx";
import ShoppingCheckout from "./pages/shoppingView/ShoppingCheckout.jsx";
import CheckAuth from "./components/common/CheckAuth.jsx";
import UnAuthPage from "./pages/UnAuthPage.jsx";
import { PersistGate } from "redux-persist/integration/react";
import PaypalReturn from "./pages/shoppingView/PaypalReturn.jsx";
import PaymentSuccess from "./pages/shoppingView/PaymentSuccess.jsx";
import Search from "./pages/shoppingView/SearchProducts.jsx";
import SearchProducts from "./pages/shoppingView/SearchProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CheckAuth />,
      },
      {
        path: "/auth",
        element: (
          <CheckAuth>
            <Authlayout />
          </CheckAuth>
        ),
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ],
      },
      {
        path: "/admin",
        element: (
          <CheckAuth>
            <AdminLayout />
          </CheckAuth>
        ),
        children: [
          {
            path: "/admin/dashboard",
            element: <AdminDashboard />,
          },
          {
            path: "/admin/products",
            element: <AdminProducts />,
          },
          {
            path: "/admin/orders",
            element: <AdminOrders />,
          },
          {
            path: "/admin/features",
            element: <AdminFeatures />,
          },
        ],
      },
      {
        path: "/shop",
        element: (
          <CheckAuth>
            <ShoppingLayout />
          </CheckAuth>
        ),
        children: [
          {
            path: "/shop/home",
            element: <ShoppingHome />,
          },
          {
            path: "/shop/listing",
            element: <ShoppingListing />,
          },
          {
            path: "/shop/account",
            element: <ShoppingAccount />,
          },
          {
            path: "/shop/checkout",
            element: <ShoppingCheckout />,
          },
          {
            path: "/shop/paypal-return",
            element: <PaypalReturn />,
          },
          {
            path: "/shop/payment-success",
            element: <PaymentSuccess />,
          },
          {
            path: "/shop/search",
            element: <SearchProducts />,
          },
        ],
      },
      {
        path: "/unauth-page",
        element: <UnAuthPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
