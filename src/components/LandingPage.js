import Navigation from "./Navigation";
import FeaturedService from "./FeaturedServices";
import Testimonial from "./Testimonal";
import CTA from "./CTA";
import SocialMediaSharing from "./SocialMediaSharing";
import {Link} from 'react-router-dom';
const LandingPage = () => {
  return (
    <>
      <Navigation />
      <section className="hero">
        <h1 className="hero-title">Your Company Name</h1>
        <p className="hero-description">
          A brief description of your company and what you do.
        </p>
      </section>
      <FeaturedService />
      <Testimonial />
      <CTA />
      <SocialMediaSharing />
      <footer className="footer">
        <p>&copy; 2023 Your Company Name</p>
        <ul className="footer-links">
          <Link>
            <a href="/">About Us</a>
          </Link>
          <Link>
            <a href="/">Services</a>
          </Link>
          <Link>
            <a href="/">Contact Us</a>
          </Link>
          <Link>
            <a href="/">Privacy Policy</a>
          </Link>
          <Link>
            <a href="/">Terms of Use</a>
          </Link>
        </ul>
      </footer>
    </>
  );
};

export default LandingPage;
