import Link from "next/link";

const Navbar = () => (
  <nav className="nav">
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/test">
      <a>Test</a>
    </Link>
    <style jsx>{`
      .nav {
        display: flex;
        justify-content: center;
      }
    `}</style>
  </nav>
);

export default Navbar;
