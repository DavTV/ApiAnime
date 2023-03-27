const Card = ({
  id,
  name,
  imagen,
  synopsis,
  switchBtn,
  trailerUrl,
  handleShowBtn
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 my-2">
      <div className={switchBtn ? "card" : "card  bg-info"}>
        <div className="p-2">
          <img src={imagen} alt={name} className="w-100" />
          <div className="p-2">
            <p className="fw-bold">{name}</p>
            {/* <details>
              <summary>Sinopsis</summary>
              <div className="sinopsis">
                <small>{synopsis || "No hay descripción disponible"}</small>
              </div>
            </details> */}
            <button
              className={
                switchBtn
                  ? "btn btn-danger my-2 w-100"
                  : " my-2 w-100 btn btn-success"
              }
              data-trailer={trailerUrl}
              data-name={name}
              data-synopsis={synopsis}
              data-id={id}
              onClick={handleShowBtn}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
