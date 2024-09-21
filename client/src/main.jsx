import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
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

const isAuthenticated = false;
const user = {
  role: "shop",
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/auth",
        element: (
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
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
    <RouterProvider router={router} />
  </Provider>
);
