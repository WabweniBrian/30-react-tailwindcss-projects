import { formData } from "./formData";

const Form = ({ values, handleSubmit, handleChange }) => {
  const handleFocus = (e) => {
    e.target.attributes.focused.value = true;
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((formElm) => {
        formData[3].inputAttributes.pattern = values.password;
        const { inputAttributes, id, label, errorMessage } = formElm;
        return (
          <div className="form-input py-1" key={id}>
            <p htmlFor={inputAttributes.id} className="capitalize">
              {label}
            </p>
            <input
              {...inputAttributes}
              className="input-control form-control"
              value={values[formElm.name]}
              onChange={handleChange}
              onBlur={handleFocus}
              focused="false"
            />
            <span className="text-red-500 text-sm hidden">{errorMessage}</span>
          </div>
        );
      })}
      <div className="flex-center-center">
        <button className="px-6 py-1 bg-orange-600 hover:bg-orange-700 transition-a text-white rounded-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
