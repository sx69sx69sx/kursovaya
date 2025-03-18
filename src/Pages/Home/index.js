import { Navigate } from "react-router-dom";
const Home = () => {
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
            <div className="blue-line">

            </div>
            <div className="category-container">
                <img src="/img/blocktwoo.png" alt="Wings with Rider" />
                <div className="circle-text left-circle"><a href="/menswear" style={{ textDecoration: 'none', color: 'inherit' }}>МУЖСКОЕ</a></div>
                <div className="circle-text right-circle"><a href="/womenswear" style={{ textDecoration: 'none', color: 'inherit' }}>ЖЕНСКОЕ</a></div>
            </div>
            <div className="blue-line-two">
            <a className="text-accent-archive">Архив</a>
            </div>
            <div className="archive-homepage">
                
                <img src="/img/emga1.png"/>
                <img src="/img/emga2.png"/>
                <img src="/img/emga3.png"/>
            </div>
        </>
    )

}
export default Home;