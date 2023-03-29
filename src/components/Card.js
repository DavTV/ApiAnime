const Card = ({
  id,
  name,
  imagen,
  switchBtn,
  handleShowBtn
}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 my-2">
      <div className={switchBtn ? "card" : "card  bg-info"}>
        <div className="p-2">
          <img src={imagen} alt={name} className="w-100" />
          <div className="p-2">
            <p className="fw-bold">{name}</p>
          
            <button
              className={
                switchBtn
                  ? "btn btn-danger my-2 w-100"
                  : " my-2 w-100 btn btn-success"
              }
        
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
