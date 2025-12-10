import React from 'react';
import {
  FaWhatsapp,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  const contacts = [
    { id: 1, icon: <FaWhatsapp />, href: 'https://wa.me/+260976782165', label: 'WhatsAPP' },
    { id: 2, icon: <FaTiktok />, href: 'https://vm.tiktok.com/ZMH378Fvd9P5T-1bKUz/', label: 'Tiktok' },
    { id: 3, icon: <FaInstagram />, href: 'https://www.instagram.com/lulu_le_muse', label: 'Instagram' },
    { id: 4, icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/lupupa-mubanga-a9a7a1253', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-grid">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-label">{contact.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
