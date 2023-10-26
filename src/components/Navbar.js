import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Nav, Navbar, Image, Dropdown, Container} from '@themesberg/react-bootstrap';
import {useNavigate} from 'react-router-dom'

import logo from '../logo.svg';


export default () => {
  const navigate = useNavigate();

  function logOut(){
    navigate("/login");
    window.location.reload(false);
  }
  
  return (
      <Navbar variant="dark" expanded bg="dark" className="ps-0 pe-2 pb-0">
        <Container fluid className="px-0">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex align-items-center">
              <Navbar.Brand href="home" className="me-lg-3">
                <Image src={logo}/>
              </Navbar.Brand>
            </div>
            <Nav className="align-items-center">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                  <div className="media d-flex align-items-center">
                    <div className="media-body ms-2 text-white align-items-center d-none d-lg-block">
                      <span className="mb-0 font-small fw-bold ">Bienvenido</span>
                    </div>
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item className="fw-bold" onClick={()=>logOut()}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2"/> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </Container>
      </Navbar>
  )
};
