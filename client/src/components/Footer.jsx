import { Divider } from "antd";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="footerTop">
        <div className="footerAbout">
          <img src="logo.svg" alt="Logo" className="footerLogo" />
          <p>
            Uzman ekibimiz ve modern teknoloji ile diş sağlığınızı önemsiyoruz.
            Her hastamız için kişiselleştirilmiş tedavi planları sunuyoruz.
          </p>
        </div>
        <div className="footerContactSocial">
          <div className="footerContact">
            <h4>İletişim</h4>
            <p>Adres: Kartal Mahallesi, 123, İstanbul</p>
            <p>Tel: 0212 345 6789</p>
            <p>Email: info@mgm.com</p>
          </div>
          <div className="footerSocial">
            <h4>Sosyal Medya</h4>
            <div className="socialİcons">
              <a href="https://www.facebook.com/mgm.uzmanlik">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/mgm_uzmanlik/">
              <FaInstagram />
              </a>
              <a href="https://twitter.com/mgm_uzmanlik">
              <BsTwitterX />
              </a>
            </div>
            <p>
              Bizi sosyal medyada takip edin ve en güncel haberlerimizden
              haberdar olun.
            </p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="footerBottom">
        <div>
          <p>© 2020 Diş Kliniği. Tüm hakları saklıdır.</p>
        </div>
        <div className="footerPrivacyTerms">
          <p>
            <a href="privacyPolicy">Gizlilik Politikası</a>
          </p>
          <p>
            <a href="termsAndConditions">Şartlar ve Koşullar</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
