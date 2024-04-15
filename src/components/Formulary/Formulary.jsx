import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AlertComponent } from "../AlertComponent/AlertComponent";
import arrow from "../../assets/images/arrow.svg";
import "./formulary.css";
import "../AlertComponent/alertComponent.css";

const initialValue = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  accept: false,
};

export default function Formulary() {
  const [formData, setFormData] = useState(initialValue);
  const [validationMessage, setValidationMessage] = useState(null);

  useEffect(() => {
    if (
      formData.name &&
      formData.company &&
      formData.email &&
      formData.phone &&
      formData.message
    ) {
      setValidationMessage(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    if (e.target.type !== "checkbox") {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    } else {
      console.log(e.target.checked);
      setFormData({ ...formData, accept: e.target.checked });
    }
  };

  const onSubmit = () => {
    setValidationMessage(false);
  };

  console.log(formData);
  console.log(validationMessage, "validationMessage");
  return (
    <>
      {validationMessage === false && <AlertComponent />}
      <Row className="custom-row-form m-0">
        <Col xs={12} sm={6} className="p-0">
          <div>
            <p className="text-title-form">
              FIGMA IPSUM COMPONENT VARIANT MAIN LAYER
            </p>
            <p className="description-form">
              Figma ipsum component variant main layer. Asset connetction.
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} className="p-0 custom-col-form">
          <Form className="custom-generic-form">
            <div className="name-company">
              <Form.Group
                className="custom-form-name"
                controlId="formBasicEmail"
              >
                <Form.Label className="custom -label-form">Nombre</Form.Label>
                <Form.Control
                  className="custom-name-form"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="custom-form-company"
                controlId="formBasicPassword"
              >
                <Form.Label>Empresa</Form.Label>
                <Form.Control
                  className="custom-name-form"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>
            <div className="name-company">
              <Form.Group
                className="custom-form-email"
                controlId="formBasicEmail"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="custom-name-form"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="custom-form-phone"
                controlId="formBasicPassword"
              >
                <Form.Label>Teléfono de contacto</Form.Label>
                <Form.Control
                  className="custom-name-form"
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </div>
            <Form.Group
              className="custom-container-textarea-from"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                className="custom-textarea-form"
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group
              className="custom-checkbox-form"
              controlId="formBasicCheckbox"
            >
              <div className="checkbox-container">
                <Form.Check
                  className="custom-text-checkbox"
                  type="checkbox"
                  checked={formData.accept}
                  onChange={handleChange}
                  disabled={!validationMessage}
                />
                <span className="custom-span">
                  I accept the <span className="underline">Terms</span>
                </span>
              </div>
            </Form.Group>
            <Button
              className="custom-button-form"
              type="button"
              onClick={onSubmit}
              disabled={!formData.accept}
            >
              Enviar
              <img
                src={`.${arrow}`}
                alt="Imagen flecha hacia la derecha"
                className="image-button-form"
              />
            </Button>
          </Form>
          <div className="custom-form">
            <p className="text-title-form"></p>
            <p className="description-form"></p>
          </div>
        </Col>
      </Row>
    </>
  );
}
