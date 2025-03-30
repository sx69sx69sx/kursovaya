import React, { useState } from 'react';

const Womenswear = () => {
  // Состояния
  const [saleOnly, setSaleOnly] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedDesigner, setSelectedDesigner] = useState(null);
  const [selectedSort, setSelectedSort] = useState('Последние поступления');
  const [selectedColor, setSelectedColor] = useState(null);

  // Данные продуктов
  const products = [
    {
      name: 'Кепка AAPE Now с логотипом Moonface',
      designer: 'AAPE by A Bathing Ape',
      price: 45,
      category: 'Аксессуары',
      subCategory: 'Головные уборы',
      color: 'Черный',
      image: 'https://img.ssensemedia.com/images/222451M131008_1/gucci-undefined.jpg',
      sale: false,
    },
    {
      name: 'Золотое кольцо Little Nut',
      designer: 'In Gold We Trust Paris',
      price: 130,
      category: 'Аксессуары',
      subCategory: 'Ювелирные изделия',
      color: 'Золотой',
      image: 'https://img.ssensemedia.com/images/222270M131027_1/salvatore-ferragamo-undefined.jpg',
      sale: false,
    },
    {
      name: 'Серебряная серьга Pyramid Single',
      designer: 'Rick Owens',
      price: 340,
      category: 'Аксессуары',
      subCategory: 'Ювелирные изделия',
      color: 'Серебряный',
      image: 'https://img.ssensemedia.com/images/221789M133042_1/dita-undefined.jpg',
      sale: true,
    },
    {
      name: 'Эксклюзивный золотой браслет SSENSE Cable Price Tag',
      designer: 'In Gold We Trust Paris',
      price: 260,
      category: 'Аксессуары',
      subCategory: 'Ювелирные изделия',
      color: 'Золотой',
      image: 'https://img.ssensemedia.com/images/221232M150009_1/rick-owens-undefined.jpg',
      sale: false,
    },
  ];

  // Категории и подкатегории (обновленные)
  const categories = {
    Аксессуары: [
      'Ремни и подтяжки',
      'Очки',
      'Маски для лица',
      'Перчатки',
      'Головные уборы',
      'Ювелирные изделия',
      'Брелоки',
      'Нагрудные платки и зажимы для галстуков',
      'Шарфы',
      'Носки',
      'Галстуки',
      'Полотенца',
      'Зонты',
      'Кошельки и визитницы',
    ],
    Сумки: [
      'Рюкзаки',
      'Портфели',
      'Сумки Duffle и с верхней ручкой',
      'Сумки-мессенджеры и сатchels',
      'Кошельки и держатели документов',
      'Сумки-тоты',
      'Путешественнические сумки',
    ],
    Одежда: [
      'Куртки и пальто',
      'Джинсы',
      'Брюки',
      'Рубашки',
      'Шорты',
      'Костюмы и пиджаки',
      'Свитера',
      'Плавки',
      'Топы',
      'Нижнее белье и домашняя одежда',
    ],
    Обувь: [
      'Ботинки и мокасины',
      'Сапоги',
      'Эспадрильи',
      'Шнурованные туфли и оксфорды',
      'Монастырские туфли',
      'Сандалии',
      'Тапочки и лоферы',
      'Кроссовки',
    ],
  };

  // Дизайнеры
  const designers = [
    '032c',
    '1017 ALYX 9SM',
    '11 by Boris Bidjan Saberi',
    '132 5. ISSEY MIYAKE',
    '16Arlington',
    '424',
    '44 Label Group',
    '4SDESIGNS',
    '99%IS-',
    'A BETTER FEELING',
    'A Cold Wall',
    'A.P.C.',
    'AAPE by A Bathing Ape',
    'AARON ESH',
    'Abra',
    'Achilles Ion Gabriel',
    'Acne Studios',
    'ACRONIMO',
    'ADER error',
    'adidas Originals',
    'Advisory Board Crystals',
    'ADYAR',
    'ænrmõus',
  ];

  // Цвета
  const colors = [
    'Черный',
    'Синий',
    'Коричневый',
    'Бордовый',
    'Серый',
    'Зеленый',
    'Темно-синий',
    'Оранжевый',
    'Розовый',
    'Фиолетовый',
    'Красный',
    'Бежевый',
    'Белый',
    'Желтый',
  ];

  // Функция фильтрации и сортировки
  const getFilteredAndSortedProducts = () => {
    let filtered = [...products];

    // Фильтр по "Только со скидкой"
    if (saleOnly) {
      filtered = filtered.filter((product) => product.sale);
    }

    // Фильтр по категории и подкатегории
    if (selectedSubCategory) {
      filtered = filtered.filter((product) => product.subCategory === selectedSubCategory);
    } else if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Фильтр по дизайнерам
    if (selectedDesigner) {
      filtered = filtered.filter((product) => product.designer === selectedDesigner);
    }

    // Фильтр по цвету
    if (selectedColor) {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    // Сортировка
    if (selectedSort === 'Цена: от низкой к высокой') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (selectedSort === 'Цена: от высокой к низкой') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (selectedSort === 'Популярное') {
      filtered = filtered.filter((product) => product.price >= 50 && product.price <= 400);
    }

    return filtered;
  };

  // Обработчики
  const handleSaleOnlyChange = () => {
    setSaleOnly((prev) => !prev);
  };

  const handleToggleCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setSelectedSubCategory(null); // Сбрасываем подкатегорию при смене категории
  };

  const handleSelectSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const handleDesignerClick = (designer) => {
    setSelectedDesigner(selectedDesigner === designer ? null : designer);
  };

  const handleSortClick = (sort) => {
    setSelectedSort(sort);
  };

  const handleColorClick = (color) => {
    setSelectedColor(selectedColor === color ? null : color);
  };

  // Переход на страницу продукта
  const goToProductPage = (product) => {
    localStorage.setItem('productData', JSON.stringify(product));
    window.location.href = '/product';
  };

  // Получаем отфильтрованные и отсортированные продукты
  const filteredProducts = getFilteredAndSortedProducts();

  return (
    <div className="menswear-container">
      {/* Левый сайдбар: сортировка по цене и цветам */}
      <aside className="sidebar left-sidebar">
        <div className="filter-section">
          <label className="filter-option">
            <input
              type="checkbox"
              checked={saleOnly}
              onChange={handleSaleOnlyChange}
            />
            Только со скидкой
          </label>
        </div>

        <div className="filter-section">
          <h2>Сортировка</h2>
          <div
            className={`filter-option ${selectedSort === 'Последние поступления' ? 'active' : ''}`}
            onClick={() => handleSortClick('Последние поступления')}
          >
            Последние поступления
          </div>
          <div
            className={`filter-option ${selectedSort === 'Популярное' ? 'active' : ''}`}
            onClick={() => handleSortClick('Популярное')}
          >
            Популярное
          </div>
          <div
            className={`filter-option ${selectedSort === 'Цена: от низкой к высокой' ? 'active' : ''}`}
            onClick={() => handleSortClick('Цена: от низкой к высокой')}
          >
            Цена: от низкой к высокой
          </div>
          <div
            className={`filter-option ${selectedSort === 'Цена: от высокой к низкой' ? 'active' : ''}`}
            onClick={() => handleSortClick('Цена: от высокой к низкой')}
          >
            Цена: от высокой к низкой
          </div>
        </div>

        <div className="filter-section">
          <h2>Все цвета</h2>
          {colors.map((color) => (
            <div
              key={color}
              className={`filter-option ${selectedColor === color ? 'active' : ''}`}
              onClick={() => handleColorClick(color)}
            >
              {color}
            </div>
          ))}
        </div>
      </aside>

      {/* Центральная часть: товары */}
      <main className="products-section">
        {filteredProducts.length === 0 ? (
          <div className="no-products">
            Товары при выбранной сортировке не найдены
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="product-card"
                onClick={() => goToProductPage(product)}
              >
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-details">
                  <p className="product-designer">{product.designer}</p>
                  <p className="product-name">{product.name}</p>
                  <p className="product-price">{product.price} €</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Помощь в чате */}
        <div className="live-assistance">
          <a href="#">Помощь в чате</a>
        </div>
      </main>

      {/* Правый сайдбар: категории и дизайнеры */}
      <aside className="sidebar right-sidebar">
        <div className="filter-section">
          <h2>Категории</h2>
          {Object.keys(categories).map((category) => (
            <div key={category}>
              <div
                className="category-title"
                onClick={() => handleToggleCategory(category)}
              >
                {category} {selectedCategory === category ? '▼' : '▶'}
              </div>
              {selectedCategory === category && (
                <div className="subcategory-list">
                  {categories[category].map((subCategory) => (
                    <div
                      key={subCategory}
                      className={`subcategory-item ${selectedSubCategory === subCategory ? 'active' : ''}`}
                      onClick={() => handleSelectSubCategory(subCategory)}
                    >
                      {subCategory}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="filter-section">
          <h2>Дизайнеры</h2>
          {designers.map((designer) => (
            <div
              key={designer}
              className={`filter-option ${selectedDesigner === designer ? 'active' : ''}`}
              onClick={() => handleDesignerClick(designer)}
            >
              {designer}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Womenswear;