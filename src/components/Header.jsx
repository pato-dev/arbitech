const Header = ({ title, image, children }) => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__container-bg">
                    <img src={image} alt="Header_Background-img" />
                </div>
                <div className="header__content">
                    <h1>{title}</h1>
                    <p>{children}</p>
                </div>
            </div>
        </header>
    )
}
export default Header