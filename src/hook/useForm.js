import { useState } from "react";

export const useForm = (setLoading, setData, setMensaje) => {
  const [nameInput, setNameInput] = useState("");

  const fecthData = async (url) => {
    console.log(nameInput);
    if (nameInput === "") return;
    setLoading(true);
    try {
      const respose = await fetch(url);

      if (respose.status == 200) {
        const data = await respose.json();
        setData(data.data);
        setLoading(false);
        if (data.data.length < 1) setMensaje("Anime no encontrado.");
      }
      
      throw({status:respose.status, statusText:"Error del servidor, intentelo más tarde."})
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMensaje(error.statusText)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fecthData(`https://api.jikan.moe/v4/anime?q=${nameInput}`);
    // cortar el flujo d ela api cuando demora
  };
  const handleChange = (e) => {
    setNameInput(e.target.value);
  };
  return {
    handleSubmit,
    handleChange,
    nameInput
  };
};
