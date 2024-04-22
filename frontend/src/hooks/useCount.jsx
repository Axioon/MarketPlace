import { useContext } from 'react';
import { CountContext } from '../context/CountProvider.jsx';

export function useCount() {
    const { formData, setFormData } = useContext(CountContext);

    // Función para manejar cambios en los inputs del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Aquí puedes agregar la lógica para enviar el formulario de contacto al backend
    };

    // Retornar el estado del formulario y las funciones para manejarlo
    return { formData, handleChange, handleSubmit,setFormData };
}

export default useCount;
