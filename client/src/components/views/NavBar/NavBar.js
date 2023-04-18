import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';

const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 d-flex justify-content-between">
            <NavbarBrand className="justify-content-start px-3">ShutterHero</NavbarBrand>
            <Nav className="flex-sm-column flex-md-row px-3">
                <ul className={styles.nav_links}>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined
                            }
                            to="/login"
                        >
                            Sign in
                        </NavLink>

                    </li>
                    <li>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined
                            }
                            to="/register"
                        >
                            Register
                        </NavLink>

                    </li>
                    <li>

                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.linkActive : undefined
                            }
                            to="/logout"
                        >
                            Logout
                        </NavLink>

                    </li>
                </ul>
            </Nav>
        </Navbar>
    );
}

export default NavBar;


