// src/components/Footer.jsx
function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-5">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="font-bold text-lg">Sobre Nosotros</h2>
                    <p className="mt-2">Información sobre la empresa, misión, visión, etc.</p>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Enlaces Rápidos</h2>
                    <ul className="mt-2">
                        <li><a href="#" className="hover:underline">Inicio</a></li>
                        <li><a href="#" className="hover:underline">Productos</a></li>
                        <li><a href="#" className="hover:underline">Servicios</a></li>
                        <li><a href="#" className="hover:underline">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold text-lg">Contáctanos</h2>
                    <p className="mt-2">Email: AxiosTecnology@empresa.com</p>
                    <p>Tel: +569 5555 5555</p>
                </div>
            </div>
            <div className="text-center mt-8 md:mt-0">
                <p>© 2024 Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
