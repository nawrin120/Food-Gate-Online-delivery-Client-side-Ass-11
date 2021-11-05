import React from 'react';
import './Header.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Navbar className="heading" sticky="top" collapseOnSelect expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='logo'><img className='nav-logo' src="images/lg.png" alt="" /> 
                    <span className="main-name p-2 m-2">
                    FoodGaTe
                    </span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="me-5 justify-content-end">
                        <Nav className="ms-auto ">
                            <Nav.Link as={HashLink} to="/home#home" className='nav-icon'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/items#items" className='nav-icon'>Items</Nav.Link>

                            <Nav.Link as={HashLink} to="/album" className='nav-icon'>Photo Albums</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact" className='nav-icon'>Contact Us</Nav.Link>

                            <NavDropdown title={<i className="fas fa-user"></i>} id="navbarScrollingDropdown" className='drop-container'>
                                <div className='drop-body'>
                                    <NavDropdown.Item as={HashLink} to="/itemaddition" className='nav-icon drop-item'>Add A New Service</NavDropdown.Item>
                                    <NavDropdown.Item as={HashLink} to="/order" className='nav-icon drop-item'>My Orders</NavDropdown.Item>

                                    <NavDropdown.Item as={HashLink} to="/manageallorder" className='nav-icon drop-item'>Manage All Orders</NavDropdown.Item>



                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='dropsdown'>

                                        {
                                            user?.email ?
                                                <Nav.Link as={Link} to="/login"> <button className='log-icon' onClick={logOut}><i className="fas fa-sign-in-alt"></i> Log Out
                                                </button><br />  <Navbar.Text className='signed-user fw-bolder text-success'>
                                                        {user?.displayName}
                                                    </Navbar.Text> </Nav.Link>
                                                :
                                                <Nav.Link as={HashLink} className='log-icon nav-log-btn' to="/login"><i className="fas fa-sign-in-alt"> Login</i></Nav.Link>

                                        }

                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>



                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;