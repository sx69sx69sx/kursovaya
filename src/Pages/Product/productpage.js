import React, { useState, useEffect } from 'react';
// import './ProductPage.css'; // Подключение стилей

const ProductPage = () => {
  // Состояния
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState(''); // Для выбора размера

  // Доступные размеры (можно настроить)
  const sizes = ['S', 'M', 'L', 'XL'];

  // Загрузка данных продукта из localStorage
  useEffect(() => {
    const productData = JSON.parse(localStorage.getItem('productData'));
    if (productData) {
      setProduct(productData);
      // Проверяем, есть ли товар в избранном
      const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setIsFavorite(favorites.some((item) => item.name === productData.name));
      // Проверяем, есть ли товар в корзине
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setIsInCart(cart.some((item) => item.name === productData.name));
    }
  }, []);

  // Добавление/удаление из избранного
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      favorites = favorites.filter((item) => item.name !== product.name);
      setIsFavorite(false);
    } else {
      favorites.push(product);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Добавление/удаление из корзины
// В ProductPage.js, внутри функции toggleCart
const toggleCart = () => {
  if (!selectedSize) {
    alert('Выберите размер, чтобы добавить товар в корзину.');
    return;
  }
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (isInCart) {
    cart = cart.filter((item) => item.name !== product.name);
    setIsInCart(false);
  } else {
    cart.push({ ...product, size: selectedSize });
    setIsInCart(true);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  // Отправляем событие для обновления хедера
  window.dispatchEvent(new Event('cartUpdated'));
};

  // Если продукт не загружен
  if (!product) {
    return <div className="loading">Загрузка продукта</div>;
  }

  return (
    <div className="product-page-container">
      {/* Левая колонка: описание */}
      <div className="product-description">
        <h2 className="product-designer">{product.designer}</h2>
        <h1 className="product-name">{product.name}</h1>
        <p className="product-details">
          Heavyweight 385 gsm organic cotton terrycloth bathrobe. Stripes throughout.
        </p>
        <ul className="product-features">
          <li>GOTS- and Oeko-Tex® Standard 100-certified</li>
          <li>Hood</li>
          <li>Front and detachable self-tie belt</li>
          <li>Patch pockets</li>
          <li>Logo tag at side seam</li>
          <li>Locker loop at inner collar</li>
        </ul>
        <p className="product-color">Supplier color: Kodak stripes</p>
        <p className="product-material">100% organic cotton.</p>
        <p className="product-origin">Made in Portugal.</p>
        <p className="product-code">251482M219010</p>
      </div>

      {/* Центральная колонка: изображение */}
      <div className="product-image-section">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>

      {/* Правая колонка: действия */}
      <div className="product-actions">
        <p className="product-price">{product.price} EUR</p>
        <p className="tax-info">Taxes & duties included.</p>

        {/* Выбор размера */}
        <div className="size-selector">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="">SELECT A SIZE</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Кнопки */}
        <div className="action-buttons">
          <button className="add-to-bag" onClick={toggleCart}>
            {isInCart ? 'REMOVE FROM BAG' : 'ADD TO BAG'}
          </button>
          <button className="add-to-wishlist" onClick={toggleFavorite}>
            {isFavorite ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
          </button>
        </div>

        {/* Промокод */}
        <p className="promo-code">GET 15% OFF WITH CODE SS2025.</p>

        {/* Информация о модели */}
        <p className="model-info">
          Model is 6'3" ft and wears size M. <a href="#">SIZE GUIDE</a>
        </p>

        {/* Live Assistance */}
        <p className="live-assistance">
          <a href="#">LIVE ASSISTANCE</a>
        </p>
      </div>
    </div>
  );
};

export default ProductPage;