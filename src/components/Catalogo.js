import { useState } from "react";
import Card from "./Card";
import PortalModal from "./PortalModal";
const Catalogo = ({ data, loading, mensaje, switchBtn }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [dataModal, setDataModal] = useState({});
  const handleShowBtn = (e) => {
    setIsOpen(!isOpen);

    let idCard = e.target.getAttribute("data-id");

    if (idCard) {
      let dataCard = data.find((el) => (el.mal_id == idCard));
      console.log(dataCard);  
      let newDataCard= {
        title: dataCard.title,
        synopsis: dataCard.synopsis,
        category: dataCard.genres,
        image: dataCard.images.webp.image_url,
        duration: dataCard.duration,
        linkweb:dataCard.url
      }
      
      setDataModal(newDataCard);
    }
   
  };
  return (
    <div className="row">
      {loading ? (
        <p>Cargando ...</p>
      ) : data.length > 0 ? (
        data.map((el) => {
          // console.log(el);
          return (
            <Card
              key={el.mal_id+"key"}
              id={el.mal_id}
              name={el.title}
              imagen={el.images.webp.image_url}
              synopsis={el.synopsis}
              switchBtn={switchBtn}
              trailerUrl={el.trailer.embed_url}
              handleShowBtn={handleShowBtn}
              // setDataModal={setDataModal}
              // setUrl={setUrl}
              // setNameAnime={setNameAnime}
            />
          );
        })
      ) : (
        <p>{mensaje}</p>
      )}
      <PortalModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        // url={url}
        handleShowBtn={handleShowBtn}
        // nameAnime={nameAnime}
        dataModal={dataModal}
        // setDataModal={setDataModal}
      />
    </div>
  );
};
export default Catalogo;
