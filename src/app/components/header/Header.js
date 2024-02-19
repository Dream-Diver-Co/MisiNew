'use client'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image'
import logo from '@../../../public/images/logo.png'
import { Button, Row } from 'react-bootstrap';
import MainMenu from './MainMenu';
import Hero from '../hero/Hero';

function Header() {
  return (
    <header>
      <MainMenu/>
    </header>
  );
}

export default Header;