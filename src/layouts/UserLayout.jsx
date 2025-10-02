import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CartProvider } from "../contexts/CartContext";

function UserLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CartProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default UserLayout;
