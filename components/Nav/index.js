import Link from "next/link";

const Navbar = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/test">
      <a>Test</a>
    </Link>
  </nav>
);

export default Navbar;
