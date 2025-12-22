function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer className="footer">
      © {annee} - Bouchaib.Namir, Tous droits réservés.
    </footer>
  );
}

export default Footer;
