import React, { useState, useEffect } from 'react';
// import './CartPage.css'; // Подключение стилей

const CartPage = () => {
  // Состояние для корзины
  const [cartItems, setCartItems] = useState([]);

  // Рекомендованные товары (для секции "Add These Popular Items")
  const popularItems = [
    {
      name: 'Beige Isabella Sling Backpack',
      designer: 'The North Face',
      price: 65,
      image: 'https://img.ssensemedia.com/images/222451M131008_1/gucci-undefined.jpg',
    },
    {
      name: 'Black & Silver 3D Orb Keychain',
      designer: 'Vivienne Westwood',
      price: 105,
      image: 'https://img.ssensemedia.com/images/222270M131027_1/salvatore-ferragamo-undefined.jpg',
    },
    {
      name: 'Beige Paneled Pouch',
      designer: 'PS by Paul Smith',
      price: 111,
      image: 'https://img.ssensemedia.com/images/221789M133042_1/dita-undefined.jpg',
    },
    {
      name: 'Green & Black Dandi Cushion',
      designer: 'Mush Studios',
      price: 180,
      image: 'https://img.ssensemedia.com/images/221232M150009_1/rick-owens-undefined.jpg',
    },
    {
      name: 'Silver Clutch Hoop Earrings',
      designer: 'Laura Lombardi',
      price: 65,
      image: 'https://img.ssensemedia.com/images/222807M237052_1/valentino-garavani-undefined.jpg',
    },
    {
      name: 'Nero Noir Signature Botanicals Hand Wash, 500 mL',
      designer: 'Sangre de Fruta',
      price: 55,
      image: 'https://img.ssensemedia.com/images/222451M131008_1/gucci-undefined.jpg',
    },
    {
      name: 'Silver & Black Kazimir Keychain',
      designer: 'C2H4',
      price: 80,
      image: 'https://img.ssensemedia.com/images/222270M131027_1/salvatore-ferragamo-undefined.jpg',
    },
  ];

  // Загрузка данных из localStorage
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  // Удаление товара из корзины
// В CartPage.js
const removeFromCart = (itemName) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    // Отправляем событие для обновления хедера
    window.dispatchEvent(new Event('cartUpdated'));
  };
  
  const moveToWishlist = (item) => {
    // Удаляем из корзины
    removeFromCart(item.name);
    // Добавляем в избранное
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.some((fav) => fav.name === item.name)) {
      favorites.push(item);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    // Отправляем событие для обновления хедера
    window.dispatchEvent(new Event('cartUpdated'));
  };

  // Подсчет итоговой суммы
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // Оформление заказа (заглушка)
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Proceeding to checkout...');
    // Здесь можно добавить логику для оформления заказа
  };

  return (
    <div className="cart-page-container">
      {/* Левая часть: товары и итог */}
      <div className="cart-items-section">
        <h1 className="cart-title">Shopping Bag</h1>

        {/* Список товаров */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.name} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h2 className="cart-item-designer">{item.designer}</h2>
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-color">Color: {item.color}</p>
                  <p className="cart-item-size">Size: {item.size} • Only 2 remaining</p>
                  <div className="cart-item-actions">
                    <button onClick={() => moveToWishlist(item)}>Move to Wishlist</button>
                    <button onClick={() => removeFromCart(item.name)}>Remove</button>
                  </div>
                </div>
                <div className="cart-item-price">
                  <p>€{item.price}.00</p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Итоговая сумма */}
        {cartItems.length > 0 && (
          <div className="cart-summary">
            <div className="summary-row">
              <span>Total</span>
              <span>€{calculateTotal()}.00</span>
            </div>
            <div className="summary-row">
              <span>Shipping estimate</span>
              <span>Calculated at Checkout</span>
            </div>
            <div className="summary-row">
              <span>Duties and taxes</span>
              <span>Included</span>
            </div>
            <div className="summary-row total">
              <span>Order Total</span>
              <span>€{calculateTotal()}.00</span>
            </div>
          </div>
        )}

        {/* Рекомендованные товары */}
        <div className="popular-items">
          <h2>Add These Popular Items</h2>
          <div className="popular-items-grid">
            {popularItems.map((item) => (
              <div key={item.name} className="popular-item">
                <img src={item.image} alt={item.name} />
                <p className="popular-item-designer">{item.designer}</p>
                <p className="popular-item-name">{item.name}</p>
                <p className="popular-item-price">€{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Иконка безопасной оплаты */}
        <div className="secure-payment">
          <span>🔒 Secure Payment</span>
          <div className="payment-icons">
            <img src="https://via.placeholder.com/30x20?text=Visa" alt="Visa" />
            <img src="https://via.placeholder.com/30x20?text=MasterCard" alt="MasterCard" />
            <img src="https://via.placeholder.com/30x20?text=ApplePay" alt="ApplePay" />
            <img src="https://via.placeholder.com/30x20?text=PayPal" alt="PayPal" />
          </div>
        </div>
      </div>

      {/* Правая часть: оформление заказа */}
      <div className="checkout-section">
        <h1 className="checkout-title">Checkout</h1>
        <p className="checkout-info">
          Enter your email to login or continue to checkout as a guest.
        </p>
        <div className="email-input">
          <label>Email address</label>
          <input type="email" placeholder="Email address" />
        </div>
        <button className="proceed-to-checkout" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;