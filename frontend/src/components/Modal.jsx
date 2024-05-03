import { useId } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import '../assets/CSS/styleCarrito.css'

export function Modal() {
  let modalCheckboxId = useId();
  return (
    <>
      <label className="Modal-button mt-3  mr-60" htmlFor={modalCheckboxId}>
        <ShoppingBagIcon/>
      </label>

      <input id={modalCheckboxId} type="checkbox" hidden />

      <aside className="Modal">
        <ul>
          <li>
         <img src = 'https://cnnespanol.cnn.com/wp-content/uploads/2022/01/iphone-apple-mejores-fotos-cnn-underscored-espanol.jpg?quality=100&strip=info' alt= 'iphone'/>

            <footer> 
                <small>
                    qtl:1
                </small>
                <button>+</button>
            </footer>
          </li>
        </ul>
        <button>Limpiar</button>
      </aside>
    </>
  );
}
