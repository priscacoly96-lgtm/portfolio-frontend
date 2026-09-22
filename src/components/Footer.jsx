function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">© {new Date().getFullYear()} ProDev — Tous droits réservés</p>
        
          <a href="https://github.com/priscacoly96-lgtm"
          target="_blank"
          rel="noreferrer"
          className="text-white text-decoration-none"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;