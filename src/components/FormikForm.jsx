import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from 'yup';

export default function FormikForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password:''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "name must have at least 2 character").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "password must have at least 6 character").required()
        }),

        onsubmit: (values) => {
            console.log(values);
        }
    })

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newUser = {
    //         name,
    //         email,
    //         password
    //     }
    //     console.log(newUser);

    // }


    const renderNameError = formik.touched.name && formik.errors.name && (
      <span>{formik.errors.name}</span>
    );

  return (
    <div>
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              required
            />
            <br />
            {renderNameError}
          </div>

          <div>
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              required
            />
            <br />
            {formik.touched.email && formik.errors.email && (
              <span>{formik.errors.email}</span>
            )}
          </div>
          <div>
            <label htmlFor="name">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              required
            />
            <br />
            {formik.touched.password && formik.errors.password && (
              <span>{formik.errors.password}</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
