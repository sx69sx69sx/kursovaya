import { Navigate } from "react-router-dom";

const Home = () => {
  const images = [
    '/img/emga1.png',
    '/img/emga2.png',
    '/img/emga3.png',
  ];

  return (
    <>
      <div className="yung-lean-container">
        <div className="number-container">
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
        </div>
        <div className="number-container">
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
        </div>
        <div className="number-container">
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
          <p className="numbers-yunglean">112519</p>
        </div>
      </div>
      <div className="blue-line"></div>
      <div className="category-container">
        <img src="/img/blocktwoo.png" alt="Wings with Rider" />
        <div className="circle-text left-circle">
          <a href="/menswear" style={{ textDecoration: 'none', color: 'inherit' }}>МУЖСКОЕ</a>
        </div>
        <div className="circle-text right-circle">
          <a href="/womenswear" style={{ textDecoration: 'none', color: 'inherit' }}>ЖЕНСКОЕ</a>
        </div>
      </div>
      <div className="blue-line-two">
        <a className="text-accent-archive">Архив</a>
      </div>

      {/* Карусель с тремя слотами внизу */}
      <div className="archive-homepage">
        <div className="slot-container">
          {/* Первый слот */}
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {images.map((src, index) => (
                <img key={`first-slot-${index}`} src={src} alt={`Image ${index + 1}`} />
              ))}
              {images.map((src, index) => (
                <img key={`second-slot-${index}`} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>

          {/* Второй слот */}
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {images.map((src, index) => (
                <img key={`first-slot-${index + 3}`} src={src} alt={`Image ${index + 1}`} />
              ))}
              {images.map((src, index) => (
                <img key={`second-slot-${index + 3}`} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>

          {/* Третий слот */}
          <div className="carousel-wrapper">
            <div className="carousel-track">
              {images.map((src, index) => (
                <img key={`first-slot-${index + 6}`} src={src} alt={`Image ${index + 1}`} />
              ))}
              {images.map((src, index) => (
                <img key={`second-slot-${index + 6}`} src={src} alt={`Image ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;