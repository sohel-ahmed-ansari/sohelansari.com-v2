/* global ga */
import React from 'react';
import imgLocation from './images/location.svg';
import imgEmail from './images/email.svg';
import imgPhone from './images/phone.svg';
import imgLinkedin from './images/linkedin.svg';
import imgStackoverflow from './images/stackoverflow.svg';
import imgDownload from './images/download.svg';
import './style.less';

const Footer = () => {
  const onResumeDownloadClick = () => {
    ga('send', 'event', 'Download CV', 'click', 'Footer Link');
  };
  return (
    <footer className="footer">
      <section className="footer-section">
        <header>
          <h1>Personal info</h1>
        </header>
        <main>
          <section className="footer-sub-section">
            <header className="footer-sub-section-header">
              <img className="footer-sub-section-header__icon" src={imgLocation}></img>
              <div className="footer-sub-section-header__title">Location</div>
            </header>
            <main className="footer-sub-section-main">
              <p>Dubai</p>
              <p>United Arab Emirates</p>
            </main>
          </section>
          <section className="footer-sub-section">
            <header className="footer-sub-section-header">
              <img className="footer-sub-section-header__icon" src={imgEmail}></img>
              <div className="footer-sub-section-header__title">Email</div>
            </header>
            <main className="footer-sub-section-main">
              <p>sohel.ahmed.ansari@gmail.com</p>
            </main>
          </section>
          <section className="footer-sub-section">
            <header className="footer-sub-section-header">
              <img className="footer-sub-section-header__icon" src={imgPhone}></img>
              <div className="footer-sub-section-header__title">Phone</div>
            </header>
            <main className="footer-sub-section-main">
              <a href="tel:=971564710320">+971 564710320</a>
            </main>
          </section>
        </main>
      </section>
      <section className="footer-section">
        <header>
          <h1>Links</h1>
        </header>
        <main>
          <section className="footer-sub-section">
            <a
              className="footer-sub-section-header"
              href="https://in.linkedin.com/in/sohelansari"
              target="_blank"
            >
              <img className="footer-sub-section-header__icon" src={imgLinkedin}></img>
              <div className="footer-sub-section-header__title">LinkedIn</div>
            </a>
          </section>
          <section className="footer-sub-section">
            <a
              className="footer-sub-section-header"
              href="https://stackoverflow.com/users/2279116/shinob"
              target="_blank"
            >
              <img className="footer-sub-section-header__icon" src={imgStackoverflow}></img>
              <div className="footer-sub-section-header__title">stackoverflow</div>
            </a>
          </section>
        </main>
      </section>
      <section className="footer-section">
        <header>
          <h1>Resume</h1>
        </header>
        <main>
          <section className="footer-sub-section">
            <a
              className="footer-sub-section-header footer-sub-section-header--button"
              href="assets/Resume.pdf"
              download="Sohel-Resume.pdf"
              target="_blank"
              onClick={onResumeDownloadClick}
            >
              <img className="footer-sub-section-header__icon" src={imgDownload}></img>
              <div className="footer-sub-section-header__title">Download</div>
            </a>
          </section>
        </main>
      </section>
    </footer>
  );
};

export default Footer;