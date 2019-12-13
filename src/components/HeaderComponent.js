import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function HeaderComponent(props) {
    return (
        <div>
          <Navbar className="navbar bg-primary">
            <div className="col-lg-5"></div>
            <div className="col-lg-4">
            <Navbar.Brand>
              <div className="title pl-4">
                CAFE  UNICODE  
              </div>
            </Navbar.Brand>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-1">
              <div className="title mr-0">
                <Button variant="primary cart" href="#">Cart</Button>               
              </div>
            </div>
          </Navbar>
        </div>
  );
}

export default HeaderComponent;
