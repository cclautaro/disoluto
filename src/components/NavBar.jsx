import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Disoluto</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link">Home</a>
                        <a class="nav-link">Productos</a>
                        <a class="nav-link">Contacto</a>
                        <a class="nav-link">Acerca de</a>
                    </div>
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link"><CartWidget/></a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar