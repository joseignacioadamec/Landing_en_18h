import React from "react";
import { Col, Row } from "react-bootstrap";
import star from "../../assets/images/star.svg";
import CompanyLogo from "../../assets/images/CompanyLogo.svg";
import CompanyLogo1 from "../../assets/images/CompanyLogo1.svg";
import CompanyLogo2 from "../../assets/images/CompanyLogo2.svg";
import CompanyLogo3 from "../../assets/images/CompanyLogo3.svg";
import CompanyLogo4 from "../../assets/images/CompanyLogo4.svg";
import "./componentOptions.css";

export const ComponentOptions = () => {
  return (
    <>
      <Row className="custom-row-options m-0">
        <Col className="p-0">
          <div className="custom-div-options">
            <p className="principal-text-options">
              Figma ipsu, compoment variant main layer
            </p>
            <div className="custom-div-stars">
              <div className="images-stars-options">
                <img
                  src={star}
                  alt="Estrellas de valoración"
                  className="stars options"
                />
              </div>
              <div className="images-stars-options">
                <img
                  src={star}
                  alt="Estrellas de valoración"
                  className="stars options"
                />
              </div>
              <div className="images-stars-options">
                <img
                  src={star}
                  alt="Estrellas de valoración"
                  className="stars options"
                />
              </div>
              <div className="images-stars-options">
                <img
                  src={star}
                  alt="Estrellas de valoración"
                  className="stars options"
                />
              </div>
              <div className="images-stars-options">
                <img
                  src={star}
                  alt="Estrellas de valoración"
                  className="stars options"
                />
              </div>
            </div>
            <div className="custom-div-text-center-options">
              <p className="text-center-options">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                maxime blanditiis, possimus placeat non necessitatibus
                reprehenderit, illo consequuntur dignissimos animi doloribus
                iste atque eum hic quasi ullam fugiat ipsa? Ullam, laborum!
              </p>
            </div>
            <p className="text-name-options">Name Surname</p>
            <p className="text-position-options">Position, Company name</p>
          </div>
        </Col>
      </Row>
      <Row className="custom-row-images-options m-0">
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0">
          <div className="custom-div-image-options custom-image-1">
            <img src={CompanyLogo} alt="Icono de capas" />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0">
          <div className="custom-div-image-options custom-image-2">
            <img src={CompanyLogo1} alt="Icono de opciones" />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0">
          <div className="custom-div-image-options custom-image-3">
            <img src={CompanyLogo2} alt="Icono de opciones" />
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0">
          <div className="custom-div-image-options custom-image-4">
            <img src={CompanyLogo3} alt="Icono de catálogo" />
          </div>
        </Col>
        <Col xs={12} sm={12} md={4} lg={12} xl={2} className="p-0">
          <div className="custom-div-image-options custom-image-5">
            <img src={CompanyLogo4} alt="Icono de opciones" />
          </div>
        </Col>
      </Row>
    </>
  );
};
