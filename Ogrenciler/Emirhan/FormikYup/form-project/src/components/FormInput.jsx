import { ErrorMessage, Field } from "formik";

function FormInput({ field, type, label }) {
  return (
    <div key={field} className="mb-3">
      <label htmlFor={field} className="text-start d-block fs-5">{`${label}:`}</label>
      <Field className="form-control" name={field} placeholder={`${label} Giriniz...`} type={type} />
      <ErrorMessage name={field} component="div" className="error" />
    </div>
  );
}

export default FormInput;
