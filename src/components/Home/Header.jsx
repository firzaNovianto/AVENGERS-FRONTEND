import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {Link} from 'react-router-dom'




function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const isToggle = () => setIsOpen((prevState) => !prevState)

    return (
      <div className="container-fluid mx-auto">
            <Navbar  className="mx-auto" light expand="md">
                <Nav tag={Link} to="/" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none mx-auto">AVENGERS</Nav>    
                <Nav tag={Link} to="/task" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none mx-auto">TASK</Nav>
                <Nav tag={Link} to="/onduty" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none mx-auto">ONDUTY</Nav>
                <Nav tag={Link} to="/history" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none mx-auto">HISTORY</Nav>
                <Nav tag={Link} to="/rank" className=" text-dark ml-5 font-weight-bold h5 text-decoration-none mx-auto">PERFORM</Nav>
                     
            </Navbar>
        </div>
    )
}

export default Header
