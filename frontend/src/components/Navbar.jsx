import React, { useContext, Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { Modal } from '../components/Modal.jsx';

const navigation = {
  categories: [
    {
      id: 'categorias',
      name: 'Categorias',
      featured: [],
      sections: [
        {
          id: 'hardware',
          name: 'Hardware',
          to: '/hardware',
        },
        {
          id: 'accesorios',
          name: 'Accesorios',
          to: '/accesorios',
        },
        {
          id: 'desarrollo',
          name: 'Desarrollo de Software',
          to: '/desarrollo',
        },
      ],
    },
  ],
  pages: [
    { name: 'Acerca de Nosotros', to: '/acerca-de-nosotros' },
    { name: 'Contacto', to: '/contacto' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { authUser, setAuthUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthUser(null);  // Limpiar el estado de autenticación
    localStorage.removeItem('jwtToken');  // Remover el token de la local storage
    navigate('/');  // Redirige al inicio o a la página que consideres
  };

  return (
    <header className="relative bg-white">
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to="/">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="src\assets\axion2.png"
                />
              </Link>
            </div>

            {/* Mobile Menu */}
            <Transition.Root show={open} as={Fragment}>
              <Dialog as="div" className="fixed inset-0 z-40 lg:hidden" onClose={setOpen}>
                <Transition.Child
                  as={Fragment}
                  enter="transition-opacity ease-linear duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="transform -translate-x-full"
                  enterTo="transform translate-x-0"
                  leave="transition ease-in duration-300"
                  leaveFrom="transform translate-x-0"
                  leaveTo="transform -translate-x-full"
                >
                  <div className="relative flex flex-col h-full w-64 bg-white shadow-xl">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                      <div>
                        <Link to="/">
                          <img
                            className="h-8 w-auto"
                            src="src\assets\axion2.png"
                            alt="Logo"
                          />
                        </Link>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover
                          text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          <span className="sr-only">Close menu</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-6">
                        {navigation.categories.map((category) => (
                          <div key={category.name}>
                            <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
                            <div className="mt-2 grid grid-cols-1 gap-y-4">
                              {category.sections.map((section) => (
                                <Link
                                  key={section.name}
                                  to={section.to}
                                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                >
                                  {section.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <div>
                          <h3 className="text-lg font-medium text-gray-900">Pages</h3>
                          <div className="mt-2 grid grid-cols-1 gap-y-4">
                            {navigation.pages.map((page) => (
                              <Link
                                key={page.name}
                                to={page.to}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                              >
                                {page.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </Dialog>
            </Transition.Root>

            {/* Desktop Menu */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-4">
                {navigation.categories.map((category) => (
                  <Popover key={category.name} className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                            )}
                          >
                            {category.name}
                          </Popover.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {/* Featured items if any */}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <Link to={section.to} className="font-medium text-gray-900">
                                          {section.name}
                                        </Link>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ))}

                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.to}
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="ml-auto flex items-center">
              {authUser ? (
                <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-800">
                  Cerrar sesión
                </button>
              ) : (
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="/create-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </Link>
                  <Modal className="mr-5" />
                </div>
              )}

              {/* Search */}
              <div className="flex lg:ml-6">
                <Link to="/search" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                </Link>
              </div>

              {/* Cart */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
