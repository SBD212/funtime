import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import styles from "./header.module.css";

const Header = () => {
  const { data: session } = useSession();
  return (
    <Navbar bg="light" variant="light" expand="sm">
      <Container>
        <Navbar.Brand className={styles.logo}>
          <Image src="/logo.png" alt="site-logo" width="80" height="70" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {session ? (
            <div className={styles.greeting}>
              {" "}
              <div>
                <Image
                  src={session.user.image}
                  alt="user-image"
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h5> Hi, {session.user.name} </h5>{" "}
            </div>
          ) : null}
          <Nav className={styles.nav}>
            <Link href="/">
              <a className={styles.link}>Home</a>
            </Link>
            {session ? (
              <a className={styles.link} onClick={() => signOut()}>
                Sign out
              </a>
            ) : (
              <Link href="/auth/signin">
                <a className={styles.link}>Sign in</a>
              </Link>
            )}

            <Link href="/about">
              <a className={styles.link}>About</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
