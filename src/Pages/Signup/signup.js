import React, { useState } from 'react';
// import './Signup.css'; // Подключение стилей

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки данных на сервер
    console.log('Email:', email, 'Password:', password, 'Category:', category);
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <h2>СОЗДАТЬ АККАУНТ</h2>

        {/* Поле email */}
        <div className="input-group">
          <label>Электронная почта</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            required
          />
        </div>

        {/* Поле пароля */}
        <div className="input-group">
          <label>Пароль</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль"
              required
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </div>
        </div>

        {/* Чекбокс для выбора категории */}
        <div className="category-group">
          <label>Подписка на рассылки и персональные напоминания о покупках Wishlist и Shopping Bag</label>
          <div>
            <label>
              <input
                type="radio"
                name="category"
                value="Мужское"
                checked={category === 'Мужское'}
                onChange={() => setCategory('Мужское')}
              />
              Мужское
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Женское"
                checked={category === 'Женское'}
                onChange={() => setCategory('Женское')}
              />
              Женское
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Не сейчас"
                checked={category === 'Не сейчас'}
                onChange={() => setCategory('Не сейчас')}
              />
              Не сейчас
            </label>
          </div>
        </div>

        {/* Кнопка создания аккаунта */}
        <button type="submit" className="create-account-btn">
          СОЗДАТЬ АККАУНТ
        </button>

        {/* Ссылка назад */}
        <a href="/" className="back-link">Назад</a>
      </form>

      {/* Информационный текст */}
      <div className="info-text">
        <p>
          При создании аккаунта в "Шелковый путь" мы собираем ваш email и другие личные данные, чтобы улучшить ваш опыт покупок и, с вашего согласия, предоставлять вам обновления, акции и уведомления. Эти данные могут быть использованы для поиска сотрудников, платформ социальных сетей и других сторонних уведомлений.
        </p>
        <p>
          Вы можете отписаться в любое время. Чтобы узнать больше, пожалуйста, посетите нашу <a href="/privacy" className="privacy-link">Политику конфиденциальности</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;