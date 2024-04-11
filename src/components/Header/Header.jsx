import React from "react";
import { Col, Row } from "react-bootstrap";
import logoColillas from "../../assets/images/logoColillas.svg";
import arrow from "../../assets/images/arrow.svg";
import "./header.css";

export const Header = () => {
  return (
    <Row className="m-0 container-generic-header">
      <Col className="p-0">
        <div className="container-branding">
          <div className="logo-colillas">
            <img
              src={`.${logoColillas}`}
              alt="Imagen Logo Colillas"
              className="logo-colillas-image"
            />
          </div>
          <h1 className="title">
            Lorem ipsum dolor sit amet consectetur. Elementum mauris tincidunt
            vitae ornae ultrices eget integer. Sagititis in ac frigilla sit.
          </h1>
          <div className="custom-container-header">
            <div>
              <p className="initial-text">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="custom-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis, numquam quia.
              </p>
              <div className="image-arrow">
                <img src={arrow} alt="Imagen flecha derecha" />
              </div>
            </div>
            <div className="custom-text custom-border">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                eius ipsa quaerat.
              </p>
              <div className="image-arrow">
                <img src={arrow} alt="Imagen flecha derecha" />
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
