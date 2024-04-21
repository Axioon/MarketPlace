import React from 'react';

function Cart() {
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-bold mb-4">Tu Carrito de Compras</h1>
            
            {/* Lista de productos en el carrito */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Producto 1 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Producto 1</h2>
                    <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-gray-700 mb-2">Precio: $25.00</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Eliminar</button>
                </div>
                
                {/* Producto 2 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Producto 2</h2>
                    <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-gray-700 mb-2">Precio: $30.00</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Eliminar</button>
                </div>
                
                {/* Producto 3 */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Producto 3</h2>
                    <p className="text-gray-700 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="text-gray-700 mb-2">Precio: $20.00</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Eliminar</button>
                </div>
            </div>

            {/* Total del carrito */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Total: $75.00</h2>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">Comprar Ahora</button>
            </div>
        </div>
    );
}

export default Cart;
