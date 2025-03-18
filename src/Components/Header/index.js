const Header =()=>{
return(
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
    <a className="main-text-header">Войти</a>
    <a className="main-text-header" href="/wishlist">Избранное</a>
    <a className="main-text-header" href="/cart">Корзина (0)</a>
    </div>
</div>
</>
)

}
export default Header;