import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Finsweet</h1>
      <nav>
        <Link to="/">Home</Link> | {' '}
        <Link to="/about">About</Link> | {' '}
        <Link to="/features">Features</Link> | {' '}
        <Link to="/pricing">Pricing</Link> | {' '}
        <Link to="/work">Work</Link> | {' '}
        <Link to="/case-studies">Case Studies</Link> | {' '}
        <Link to="/faq">FAQ</Link> | {' '}
        <Link to="/blog">Blog</Link> | {' '}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
