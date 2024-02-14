'use client'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image'
import logo from '@../../../public/images/logo.png'

function Header() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary fixed-top ">
      <Container>
        <Navbar.Brand href="/">
        <Image
          src={logo}
          alt="misi logo"
          width={100}
          height={100}
          // blurDataURL="data:..."
          // placeholder="blur"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light align-middle">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/therapy">therapy</NavDropdown.Item>
              <NavDropdown.Item href="/diagnostic">
              diagnostic research
              </NavDropdown.Item>
              <NavDropdown.Item href="/e-health">e-health</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/non-insured-care">
              insured and uninsured care
              </NavDropdown.Item>
              <NavDropdown.Item href="/decide-together">
              decide-together
              </NavDropdown.Item>
              <NavDropdown.Item href="/referrers">
              referrers
              </NavDropdown.Item>
              <NavDropdown.Item href="/waitings">
              waiting times
              </NavDropdown.Item>
              <NavDropdown.Item href="/toolslink">
              Tools videos and links
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/career">CAREER</Nav.Link>
            <Nav.Link href="/register">
            Register now
            </Nav.Link>
            <Nav.Link href="/contact">
            Contact us
            </Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
            <NavDropdown.Item href="/EN">
              EN
              </NavDropdown.Item>
            <NavDropdown.Item href="/EN">
              ln
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;