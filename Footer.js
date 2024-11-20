import React from 'react';
import PropTypes from 'prop-types';

function Footer({ kontak, tautanSosial, lokasi }) {
  return (
    <footer>
      <p>{kontak}</p>
      <ul>
        {tautanSosial.map((tautan, index) => (
          <li key={index}>
            <a href={tautan.url} target="_blank" rel="noopener noreferrer">
              {tautan.platform}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <h3>Lokasi</h3>
        <p>{lokasi}</p>
        <iframe
          width="100%"
          height="300"
          src={`https://www.google.com/maps?q=Pantai+Pandawa&ll=-8.8136,115.1628&z=14&output=embed`}
          frameBorder="0"
          allowFullScreen
          title="Peta Lokasi"
        ></iframe>
      </div>
       <p>Muhammad Miftakhul Huda - STIKOM PGRI Banyuwangi.</p>
    </footer>
  );
}

Footer.defaultProps = {
  kontak: 'Kontak: 0838335761033',
  tautanSosial: [ { platform: 'Facebook', url: 'https://www.facebook.com/pantaipandawa' },
                  { platform: 'Instagram', url: 'https://www.instagram.com/pantaipandawa' },],
  lokasi: 'Pantai Pandawa, Bali, Indonesia', 
};

Footer.propTypes = {
  kontak: PropTypes.string,
  tautanSosial: PropTypes.arrayOf(
    PropTypes.shape({
      platform: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
  lokasi: PropTypes.string,
};

export default Footer;
