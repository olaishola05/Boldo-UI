import React from 'react';
import ImgSuit from '../../images/suit.png';
import MaleImg from '../../images/male.png';
import FemaleImg from '../../images/female.png';
import Check from '../../images/check.png';

const Services = () => {
  const blobs = 'Our Services';
  return (
    <div>
      <p>{blobs}</p>
      <div>
        <h2>Handshake infographic mass market crowdfunding iteration.</h2>

        <div>
          <div>
            <img src={ImgSuit} alt="suit" />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
          </div>

          <div>
            <img src={ImgSuit} alt="suit" />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
          </div>

          <div>
            <img src={ImgSuit} alt="suit" />
            <div>
              <h3>Cool feature title</h3>
              <p>Learning curve network effects return on investment.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={MaleImg} alt="Male infographic" />
        <div>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <div>
            <img src={Check} alt="tick" />
            <p>We connect our customers with the best.</p>
          </div>

          <div>
            <img src={Check} alt="tick" />
            <p>Advisor success customer launch party.</p>
          </div>

          <div>
            <img src={Check} alt="tick" />
            <p>Business-to-consumer long tail.</p>
          </div>
          <button type="button">Start now</button>
        </div>
      </div>

      <div>
        <img src={FemaleImg} alt="Female infographic" />
        <div>
          <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
          <p>We connect our customers with the best.</p>
          <p>Advisor success customer launch party.</p>
          <p>Business-to-consumer long tail.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
