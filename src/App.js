import { useEffect, useState } from "react";
import Catalogo from "./components/Catalogo";
import Form from "./components/Form";
import Switch from "./components/Switch";
import "./css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [switchBtn, setWitchBtn] = useState(true);
  useEffect(() => {
    document.body.className = "bg-light";
  }, []);

 
  return (
    <div className="App">
      <div className={switchBtn ? " p-2 " : "p-2  text-white "}>
        <div className="container">
          <Switch setWitchBtn={setWitchBtn} switchBtn={switchBtn} />
          <h1 className="my-4 fw-bold">Search your favorite anime.</h1>
          <Form
            switchBtn={switchBtn}
            setData={setData}
            setLoading={setLoading}
            loading={loading}
            setMensaje={setMensaje}
          />
          <Catalogo
            data={data}
            loading={loading}
            mensaje={mensaje}
            switchBtn={switchBtn}
          />
        </div>
      </div>
    </div>
  );
}
