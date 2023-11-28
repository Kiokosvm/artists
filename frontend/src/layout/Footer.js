import React from 'react';

const Footer = () => {
  const footerNavs = [
    {
      href: '#',
      name: 'About',
    },
    {
      href: '#',
      name: 'Blog',
    },
    {
      href: '#',
      name: '',
    },
    {
      href: '#',
      name: 'Team',
    },
    {
      href: '#',
      name: 'Careers',
    },
    {
      href: '#',
      name: 'Support',
    },
  ];

  const socialMediaLinks = [
    {
      icon: '/socials/facebook.svg',
      alt: 'Facebook',
      url: 'https://www.facebook.com/swahilipothub',
    },
    {
      icon: '/socials/instagram.svg',
      alt: 'Instagram',
      url: 'https://www.instagram.com/swahilipothub',
    },
    {
      icon: '/socials/twitterx.svg',
      alt: 'Twitter(X)',
      url: 'https://twitter.com/swahilipothub',
    },
    {
      icon: '/socials/youtube.svg',
      alt: 'Youtube',
      url: 'https://www.youtube.com/@swahilipothubfoundation',
    },
  ];

  return (
    <footer className="text-gray-500 bg-white px-4 py-3 max-w-screen-xl mx-auto md:px-8 text-center">
      <div className="container">
        <img src="/logo/logo.png" className="w-25 mx-auto mb-4 max-w-full" alt="Swahilipot Hub Logo" />
        <p className="lead">
          Elevating our artists through streamlined management and amplifying creativity with our
          artist-centric platform.
        </p>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center mt-4">
          {footerNavs.map((item, idx) => (
            <li key={idx} className="mr-3 mb-2" style={{ margin: '0 8px' }}>
              <a href={item.href || '#'} className="text-decoration-none hover:text-gray-800">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mt-4">
        <ul className="list-inline mb-0 d-flex justify-content-center">
          {socialMediaLinks.map((social, idx) => (
            <li key={idx} className="list-inline-item">
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.alt} className="w-6 h-6 text-blue-400" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mb-4">
          &copy; 2023 Swahilipot Hub Artists. All rights reserved.
        </div>
      </div>
    </footer>
  );
};



          
export default Footer;