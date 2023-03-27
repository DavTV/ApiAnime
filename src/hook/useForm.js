import { useState } from "react";

export const useForm = (setLoading, setData, setMensaje) => {
  const [nameInput, setNameInput] = useState("");

  const fecthData = async (url) => {
    console.log(nameInput);
    if (nameInput === "") return;
    setLoading(true);
    try {
      const respose = await fetch(url);
      if (respose.ok) {
        const data = await respose.json();
        setData(data.data);
        setLoading(false);
        if (data.data.length < 1) setMensaje("Anime no encontrado.");
      }
    } catch (error) {
      console.log("No se pudo acceder a la solicitud");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fecthData(`https://api.jikan.moe/v4/anime?q=${nameInput}`);
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
