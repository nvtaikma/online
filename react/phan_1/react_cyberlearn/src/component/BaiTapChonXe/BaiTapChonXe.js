import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              src={"./CarBasic/products/black-car.jpg"}
              style={{ width: "100%" }}
              alt="blackcar"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div className="row border border-link pt-2 pb-2 mb-1">
                  <img
                    className="col-2"
                    src="./Carbasic/icons/icon-black.jpg"
                    alt=""
                  />
                  <div className="col-10">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1">
                  <img
                    className="col-2"
                    src="./Carbasic/icons/icon-red.jpg"
                    alt=""
                  />
                  <div className="col-10">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1">
                  <img
                    className="col-2"
                    src="./Carbasic/icons/icon-silver.jpg"
                    alt=""
                  />
                  <div className="col-10">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mb-1">
                  <img
                    className="col-2"
                    src="./Carbasic/icons/icon-steel.jpg"
                    alt=""
                  />
                  <div className="col-10">
                    <h3>Crytals Black</h3>
                    <p>Peal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
