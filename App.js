// App.js
import Header from './components/Header';
import Hero from './components/Hero';
import Body from './components/Body';
import React from 'react';
import Footer from './components/Footer';
import './App.css';
import logo from './media/logo pandawa.png'; 

function App() {
  const description = "Pantai Pandawa adalah salah satu pantai yang terkenal di Bali, Indonesia. Terletak di Desa Kutuh, Kecamatan Kuta Selatan, Kabupaten Badung, pantai ini menawarkan keindahan alam yang memukau dengan pasir putih bersih, air laut biru jernih, dan tebing kapur yang megah.";
  const navItems = [
  { label: "Home", link: "#" },
  { label: "About", link: "#"}
];
const features = [
  "Pasir putih yang bersih",
  "Air laut yang tenang",
  "Area parkir luas",
  "Tersedia restoran dan kios suvenir",
  "Spot foto menarik"
];
const testimonials = [
  { quote: "Pantai yang sangat indah dan tenang.", author: "Si A" },
  { quote: "Tempat yang sempurna untuk bersantai bersama keluarga.", author: "Si B" },
];
  const socialLinks = [
    { platform: 'Facebook', url: 'https://www.facebook.com/pantaipandawa' },
    { platform: 'Instagram', url: 'https://www.instagram.com/pantaipandawa' },
  ];

  return (
    <div className="App">
      <Header title="PANTAI PANDAWA" logo={logo} navItems={navItems} />
      <Hero image="hero-image.jpg" description="Selamat datang di tempat liburan Pantai Pandawa" />
       <Body description={description} features={features} testimonials={testimonials} />
      <Footer socialLinks={socialLinks} />
    </div>
  );
}

export default App;

