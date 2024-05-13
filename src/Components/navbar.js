const Navbar = () => {

    const handleClick = () => {
        let menu = document.querySelector('#mobile-menu');
        let navbarMenu = document.querySelector('.navbar__menu');

        menu.classList.toggle("is-active");
        navbarMenu.classList.toggle("active");
    }

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <a href="/" id="navbar__logo">The Dojo Blog</a>
                <div onClick={handleClick} className="navbar__toggle" id="mobile-menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__item">
                        <a href="/" className="navbar__links">Home</a>
                    </li>
                    <li className="navbar__btn">
                        <a href="/create" className="button">New Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;