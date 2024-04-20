
const Cards = () => {
  return (
    <div className="container mx-auto py-8">
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Producto 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 1</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$99.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 2</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$49.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 3</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$29.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>
        {/* Producto 4 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 3</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$29.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>
        {/* Producto 5 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 3</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$29.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>
        {/* Producto 6 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <img src="https://via.placeholder.com/300" alt="Product" className="mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Producto 3</h2>
          <p className="text-gray-600">Descripción del producto. Puedes agregar información relevante aquí.</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-semibold">$29.99</span>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;