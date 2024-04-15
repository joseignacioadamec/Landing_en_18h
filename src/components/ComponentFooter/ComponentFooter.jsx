import React from "react";
import "./componentFooter.css";
import { Col, Row } from "react-bootstrap";
import facebook from "/Facebook.svg";
import iconX from "/X.svg";
import linkedIn from "/LinkedIn.svg";
import instagram from "/Instagram.svg";
import youTube from "/Youtube.svg";

export const ComponentFooter = () => {
  return (
    <>
      <div className="generic-div-footer">
        <Row className="m-0 custom-row-footer">
          <Col className="p-0 custom-col-footer custom-col-left">
            <div className="custom-container-footer">
              <p className="custom-title-footer">Fountainebleau</p>
              <p className="custom-text-footer">Cummerata Trail, 33</p>
              <p className="custom-text-footer">08012 Marianfor</p>
              <p className="custom-text-footer">(+34) 123 456 789</p>
              <p className="custom-text-footer custom-email-footer">
                info@colillas.com
              </p>
            </div>
          </Col>
          <Col className="p-0 custom-col-footer custom-col-right">
            <div className="custom-container-footer">
              <p className="custom-title-footer">Daly City</p>
              <p className="custom-text-footer">N Front Street, 85</p>
              <p className="custom-text-footer">8895 Daly City</p>
              <p className="custom-text-footer">(+34) 123 456 789</p>
              <p className="custom-text-footer custom-email-footer">
                hello@colillas.com
              </p>
            </div>
          </Col>
        </Row>
        <Row className="m-0 custom-row-images-rrss">
          <Col>
            <div className="custom-generic-div-images">
              <div className="images-rrss-footer">
                <img src={facebook} alt="" className="image-rrss-footer" />
              </div>
              <div className="images-rrss-footer">
                <img src={iconX} alt="" className="image-rrss-footer" />
              </div>
              <div className="images-rrss-footer">
                <img
                  src={linkedIn}
                  alt="Icono de Linkedin"
                  className="image-rrss-footer"
                />
              </div>
              <div className="images-rrss-footer">
                <img
                  src={instagram}
                  alt="Icono de Instagram"
                  className="image-rrss-footer"
                />
              </div>
              <div className="images-rrss-footer">
                <img
                  src={youTube}
                  alt="Icono de Instagram"
                  className="image-rrss-footer"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="m-0 custom-row-reserved-footer">
          <Col sm={12} md={6} className="p-0">
            <div className="custom-container-left">
              <span>&copy; 2024 All rights reserved.</span>
              <span className="custom-padding-text custom-text-right">
                Privacy Policy
              </span>
            </div>
          </Col>
          <Col sm={12} md={6} className="">
            <div className="custom-container-right">
              <span>Terms of Service</span>
              <span className="custom-padding-text">Cookies Settings</span>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
