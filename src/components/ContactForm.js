import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Obligatorio"),
  email: Yup.string().email("Ingresa un correo válido").required("Obligatorio"),
  message: Yup.string().required("Obligatorio"),
});

const onSubmit = (values) => {
  console.log("valores ingresados por el usuario");
  console.log(values);
};

const ContactForm = () => {
  return (
    <div className="form__card">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <Field className="form-control" name="name" id="name" type="text" />
            <ErrorMessage name="name">
              {(msg) => <small className="form-text text-danger">{msg}</small>}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <Field
              className="form-control"
              name="email"
              id="email"
              type="email"
            />
            <ErrorMessage name="email">
              {(msg) => <small className="form-text text-danger">{msg}</small>}
            </ErrorMessage>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <Field
              as="textarea"
              className="form-control"
              name="message"
              id="message"
            />
            <ErrorMessage name="message">
              {(msg) => <small className="form-text text-danger">{msg}</small>}
            </ErrorMessage>
            <button type="submit" className="btn aarco__btni mt-4">
              Enviar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
