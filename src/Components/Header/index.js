import React, { useState, useEffect } from 'react';


const Header = () => {
  // Состояние для количества товаров в корзине
  const [cartCount, setCartCount] = useState(0);

  // Функция для обновления счетчика корзины
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length); // Количество товаров в корзине
  };

  // Загрузка данных при монтировании и установка слушателя
  useEffect(() => {
    // Первоначальная загрузка
    updateCartCount();

    // Слушаем изменения в localStorage
    const handleStorageChange = () => {
      updateCartCount();
    };

    // Добавляем слушатель события storage (для изменений в других вкладках)
    window.addEventListener('storage', handleStorageChange);

    // Создаем кастомное событие для обновления корзины (для изменений в текущей вкладке)
    window.addEventListener('cartUpdated', handleStorageChange);

    // Очистка слушателя при размонтировании
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-container">
          <a className="main-text-header" href="/menswear">Мужское</a>
          <a className="main-text-header" href="/womenswear">Женское</a>
          <a className="main-text-header">Скидки</a>
          <a className="main-text-header">Поиск</a>
        </div>
        <div className="header-container">
          <a className="text-accent-header" href="/">Шелковый путь</a>
        </div>
        <div className="header-container">
          <a className="main-text-header" href="/signup">Войти</a>
          <a className="main-text-header" href="/wishlist">Избранное</a>
          <a className="main-text-header" href="/cart">
            Корзина ({cartCount})
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;