import { useFormik } from "formik";
import * as Yup from "yup";
const FormWithYup = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submitted", values);
      // submit form
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .min(5, "Password is Too Short")
        .max(10, "Pasword is Too Long")
        .required("Required"),
    //   email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Name</label>
      <br />
      <input placeholder="name" id="name" onChange={formik.handleChange} />
      <br />
      {formik.errors.name?<div>{formik.errors.name}</div>:""}
      <label>Password</label>
      <br />
      <input
      type="password"
        placeholder="password"
        id="password"
        onChange={formik.handleChange}
        />
        {formik.errors.password?<div>{formik.errors.password}</div>:""}
      <br />

      <button type={"submit"}>Submite </button>
    </form>
  );
};
export default FormWithYup;
