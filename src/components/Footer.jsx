import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HiEnvelope, HiPhone, HiHeart } from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/why-us', label: 'Why Us' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Website Development',
    'Mobile App Development',
    'Meta Ads',
    'WhatsApp Business API',
    'Admin Panels',
    'Domain & Hosting',
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaWhatsapp, href: 'https://wa.me/+919763723391?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details.', label: 'WhatsApp', external: true },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="gn-reveal">
              <div className="footer-logo">
                Got <span>Nexus</span>
              </div>
              <p className="footer-description">
                Your digital growth partner. We build websites, apps, and marketing systems that help businesses grow.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    aria-label={social.label}
                    target={social.external ? '_blank' : '_self'}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6 mb-4 mb-lg-0">
            <div className="gn-reveal" style={{ transitionDelay: '0.1s' }}>
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0">
            <div className="gn-reveal" style={{ transitionDelay: '0.2s' }}>
              <h5 className="footer-title">What We Do</h5>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link to="/services">{service}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6">
            <div className="gn-reveal" style={{ transitionDelay: '0.3s' }}>
              <h5 className="footer-title">Contact Us</h5>
              <ul className="footer-links footer-contact">
                <li>
                  <a href="mailto:got.nexuses@gmail.com">
                    <HiEnvelope />
                    <span>got.nexuses@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919763723391">
                    <HiPhone />
                    <span>+919763723391</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+919763723391?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details." target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                    <span>WhatsApp Us</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Got Nexus. All rights reserved.</p>
          <p className="footer-made-with">
            Made with <HiHeart className="heart-icon" /> for growing businesses
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
