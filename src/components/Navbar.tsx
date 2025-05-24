const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Lupus Together</div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#stories">Stories</a>
        </li>
        <li>
          <a href="#contact">Get in Touch</a>
        </li>
      </ul>
      <button className="navbar-cta">Let's Connect</button>
    </nav>
  );
};

export default Navbar;
