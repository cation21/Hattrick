import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ open, onClose }) => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-xl font-bold">&times;</button>
      </div>
      <div className="p-4 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx} className="mb-2 border-b pb-2">
                <div className="font-semibold">{item.title}</div>
                <div>₹{item.price}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-4 border-t">
        <button
          className="w-full bg-green-600 text-white py-2 rounded font-bold"
          onClick={() => {
            onClose();
            navigate("/payment");
          }}
          disabled={cartItems.length === 0}
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;