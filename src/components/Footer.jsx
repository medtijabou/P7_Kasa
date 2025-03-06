import logoKasa from '../assets/images/logo_kasa_b&n.png';

function Footer() {
  return (
    <div className="footer_container">
      <div className="logo_footer">
        <img src={logoKasa} alt="logo Kasa" />
      </div>
      <span className="footer__close">©2020 Kasa, All rights reserved</span>
    </div>
  );
}

export default Footer;
