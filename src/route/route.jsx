import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProfucts";
import Products from "../pages/Products";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import AllProducts from "../pages/admin/AllProducts";
import AddCategory from "../pages/admin/AddCategory";
import Categories from "../pages/admin/Categories";
import NotFound from "../components/NotFound";
import Orders from "../pages/admin/Orders";
import Inbox from "../pages/admin/Inbox";
import Coupons from "../pages/admin/Coupons";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    children: [
     {
        index: true, // default route when visiting "/"
        element: (
          <>
            <Hero />
            <FeaturedProducts />
          </>
        ),
      },
       {
        path:'/products',
        element:<Products/>
      },
      {
        path:'products/:id',
        element:<ProductDetail/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'checkout',
        element:<Checkout/>
      },
      {
        path:'about',
        element:<AboutUs/>
      },
      {
        path:'contact',
        element:<ContactUs/>
      }
      
    ]
  },
  {
    path:'/admin',
    element:<AdminLayout/>,
    
    children:[
      {
        index: true,
        element: <Dashboard/>
      },
      {
        path:'/admin/add-product',
        element:<AddProduct/>
      },
      {
        path:'/admin/all-products',
        element:<AllProducts/>
      },
      {
        path:'/admin/add-category',
        element:<AddCategory/>
      },
      {
        path:'/admin/categories',
        element:<Categories/>
      },
       {
        path:'/admin/orders',
        element:<Orders/>
      },
       {
        path:'/admin/inbox',
        element:<Inbox/>
      },
      {
        path:'/admin/coupons',
        element:<Coupons/>
      },
      
    ]
  }
]);