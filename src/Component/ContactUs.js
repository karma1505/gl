import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const openInstagram = () => {
  window.open('https://www.instagram.com/shooliniuniversity/', '_blank');
};

const openTwitter = () => {
  window.open('https://twitter.com/ShooliniUniv', '_blank');
};

const openDiscord = () => {
    window.open('https://discord.gg/s5fDEaXFjx', '_blank');
};

const CustomSocials = () => {
  return (
    <div className="floating-icons-right">
      <div onClick={openInstagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div onClick={openTwitter}>
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div onClick={openDiscord}>
        <FontAwesomeIcon icon={faDiscord} />
      </div>
    </div>
  );
};

function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="contact_inner">
              <div className="row">
                <div className="col-md-10">
                  <div className="contact_form_inner">
                    <div className="contact_field">
                      <h3>Contact Us</h3>
                      <p>
                        Feel free to contact us any time. We won't leave you on read.
                      </p>
                      <CustomSocials />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Maps Section */}
      <section className="map_sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="map_inner">
                <h4>Find Us on Google Maps</h4>
                <div className="map_bind">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.796933768103!2d77.11584387558557!3d30.864359874521046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f839442ab0b5b%3A0x6d5230f107c2117a!2sShoolini%20University!5e0!3m2!1sen!2sin!4v1707056481078!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    title="Google Maps Of Shoolini"
                    style={{ border: '0' }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
