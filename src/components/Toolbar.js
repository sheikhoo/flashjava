import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Toolbar({ isDarkMode, toggleTheme }) {
    return (
        <Navbar bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"}>
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/flash-cards.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                FlashJava
            </Navbar.Brand>
            <div onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? (
                    <FaSun size={24} color="yellow" />
                ) : (
                    <FaMoon size={24} color="gray" />
                )}
            </div>
            </Container>
        </Navbar>
    )
}
