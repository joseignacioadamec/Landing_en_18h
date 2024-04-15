import React from "react";
import { Col, Row } from "react-bootstrap";
import rocket from "/rocket.svg";
import penTool from "/penTool.svg";
import award from "/award.svg";
import settings from "/settings.svg";
import "./componentSettings.css";

export const ComponentSettings = () => {
  return (
    <Row className="m-0 custom-row-setting">
      <Col lg={3} md={6} sm={12} className="m-0 p-0 custom-col-settings">
        <div className="custom-div-settings">
          <div className="image-settings">
            <img src={settings} alt="" />
          </div>
          <p className="title-setting">Pauline</p>
          <p className="text-description-settings">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            laborum, corporis ex incidunt culpa sequi. Tenetur, harum.
          </p>
        </div>
      </Col>
      <Col lg={3} md={6} sm={12} className="m-0 p-0 custom-col-settings">
        <div className="custom-div-settings">
          <div className="image-settings">
            <img src={award} alt="" />
          </div>
          <p className="title-setting">Bailee</p>
          <p className="text-description-settings">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            minus impedit temporibus, tempore veritatis amet voluptates
            blanditiis modi!
          </p>
        </div>
      </Col>
      <Col lg={3} md={6} sm={12} className="m-0 p-0 custom-col-settings">
        <div className="custom-div-settings">
          <div className="image-settings">
            <img src={rocket} alt="" />
          </div>
          <p className="title-setting">Henry</p>
          <p className="text-description-settings">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            quis, sint blanditiis modi totam consequatur assumenda beatae ea sit
            eveniet.
          </p>
        </div>
      </Col>
      <Col lg={3} md={6} sm={12} className="m-0 p-0 custom-col-settings">
        <div className="custom-div-settings">
          <div className="image-settings">
            <img src={penTool} alt="" />
          </div>
          <p className="title-setting">Laurence</p>
          <p className="text-description-settings">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id minima
            enim odit nam aspernatur quasi consectetur dolorum nisi.
          </p>
        </div>
      </Col>
    </Row>
  );
};
