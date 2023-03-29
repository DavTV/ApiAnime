import { useForm } from "../hook/useForm";

const Form = ({ setData, setLoading,loading, setMensaje, switchBtn }) => {
  const { handleSubmit, handleChange, nameInput } = useForm(
    setLoading,
    setData,
    setMensaje
  );

  return (
    <form className="p-2 " onSubmit={handleSubmit}>
      <div className="mb-3 btn-group w-100">
        <input
          className="form-control"
          value={nameInput}
          onChange={handleChange}
        />
        <button className={switchBtn ? "btn btn-primary" : "btn btn-success"} disabled={loading && "true"} >
          Go
        </button>
      </div>
    </form>
  );
};

export default Form;
