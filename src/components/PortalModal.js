import { useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/bootstrap.min.css";

const PortalModal = ({ dataModal, isOpen, handleShowBtn }) => {
 
  return ReactDOM.createPortal(
    <div className={isOpen ? "modal-portal toggle-modal" : "modal-portal"}>
      <div className="bg-light w-75 rounded shadow p-4 scroll">
        <div className="d-flex justify-content-between ">
          <h2 className="m-0">{dataModal.title}</h2>
          <button
            className="btn btn-close bg-primary"
            onClick={handleShowBtn}
          ></button>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Sinopsis</h2>
            <div className="sinopsis my-4">
              <p>{dataModal.synopsis || "No hay descripción disponible"}</p>
            </div>
            <div className="row">
              <div className="list-group col-6">
                <button
                  type="button"
                  className="list-group-item list-group-item-action active"
                  aria-current="true"
                >
                  Categorías
                </button>

                {dataModal.category ?
                  dataModal.category.map((ge,index) => {
                    return (
                      <button key={index+ge}
                        type="button"
                        className="list-group-item list-group-item-action"
                      >
                     
                      {ge.name}
                      </button>
                    );
                  }):
                  <button
                  type="button"
                  className="list-group-item list-group-item-action"
                >No hay categorías disponibles</button>
                  
                  }

                <p className="my-3"><span className="fw-bold">Duración por eposodio:</span> {dataModal.duration}</p>
                <p className="my-3"><a href={dataModal.linkweb}><span className="fw-bold">Link a web</span></a> </p>
              </div>
              <div className="col-6">
                <img
                  src={dataModal.image || ""}
                  alt="Imagen de anime"
                  className="w-100 img-modal"
                />
                {/* <p>{dataModal.images || ""}</p> */}
                {/* este es el error- 27/3/23 */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-6">
        </div> */}
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default PortalModal;
