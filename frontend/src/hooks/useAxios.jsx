import { useContext } from "react";
import { AxiosContext } from "../context/AxiosProvider.jsx";

const useAxios = () => {
    const { apiCall } = useContext(AxiosContext);
    return { apiCall };
}

export default useAxios;