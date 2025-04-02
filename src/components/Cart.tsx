import React from "react";
import { ShoppingBag, X } from "lucide-react";
import { CartItem, Product, PRICING_TIERS, formatPrice } from "../types";
import { products } from "../data/products";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const calculateItemPrice = (basePrice: number, quantity: number) => {
    const tier = PRICING_TIERS.find((t) => quantity >= t.min && quantity <= t.max);
    return basePrice * (1 - (tier?.discount || 0));
  };

  const total = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId);
    if (!product) return sum;
    return sum + calculateItemPrice(product.basePrice, item.quantity) * item.quantity;
  }, 0);

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center animate-fadeIn">
        <ShoppingBag className="text-gray-400 mb-4" size={48} />
        <p className="text-gray-600 text-lg">Your cart is empty</p>
        <p className="text-gray-500 text-sm mt-1">Start adding items to see them here.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Shopping Cart</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {items.map((item) => {
          const product = products.find((p) => p.id === item.productId);
          if (!product) return null;

          const unitPrice = calculateItemPrice(product.basePrice, item.quantity);
          const itemTotal = unitPrice * item.quantity;
          const tier = PRICING_TIERS.find((t) => item.quantity >= t.min && item.quantity <= t.max);

          return (
            <div key={item.productId} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-16 h-16 object-cover rounded-lg shadow-md"
              />

              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                {tier && tier.discount > 0 && (
                  <p className="text-xs text-green-600 font-semibold">{tier.label}</p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-lg">
                  <button
                    onClick={() => onUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                    className="px-2 py-1 text-gray-600 bg-white border rounded-lg hover:bg-gray-200 transition"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    max={product.inventory}
                    value={item.quantity}
                    onChange={(e) => onUpdateQuantity(item.productId, parseInt(e.target.value) || 0)}
                    className="w-14 text-center px-2 py-1 border rounded-lg text-gray-900 bg-white"
                  />
                  <button
                    onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                    className="px-2 py-1 text-gray-600 bg-white border rounded-lg hover:bg-gray-200 transition"
                  >
                    +
                  </button>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-gray-900">{formatPrice(itemTotal)}</div>
                  <div className="text-sm text-gray-500">{formatPrice(unitPrice)} each</div>
                </div>

                <button
                  onClick={() => onRemoveItem(item.productId)}
                  className="text-gray-400 hover:text-red-500 transition"
                  title="Remove item"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-right border-t pt-4">
        <div className="text-xl font-semibold text-gray-900">
          Total: {formatPrice(total)}
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};
