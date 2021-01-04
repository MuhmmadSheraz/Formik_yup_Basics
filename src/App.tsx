import { useFormik } from "formik";
import "./App.css";
const App = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log("Submitted",values);
      // submit form
    },
    validate: (values) => {
      let error: any = {};

      if (!values.email) error.email = "Email is required";
      if (!values.password) error.password = "Password is required";
      return error;
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Enter User Email
          <input
            type='email'
            id="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {/* To show warning messages */}
          {formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : (
            ""
          )}
        </label>
        <br />
        <br />

        <label>
          Enter User Password
          <input
            type="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {/* To show warning messages */}
          {formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : (
            ""
          )}
        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default App;
