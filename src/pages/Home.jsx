import React, { memo, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiGlobeAlt, HiDevicePhoneMobile, HiArrowRight, 
  HiChatBubbleLeftRight, HiCodeBracket,
  HiCursorArrowRays
} from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaQuoteLeft, FaHandshake } from 'react-icons/fa';

// Optimized count-up hook with requestAnimationFrame
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof end !== 'number' || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return [count, ref];
};

// Memoized service card
const ServiceCard = memo(({ service, index }) => (
  <div className="col-lg-4 col-md-6">
    <div className="service-card gn-reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="service-icon"
style={{
  background: "linear-gradient(135deg, #38bdf8, #2563eb)"
}}
>
        <service.icon />
      </div>
      <h4>{service.title}</h4>
      <p>{service.description}</p>
    </div>
  </div>
));

ServiceCard.displayName = 'ServiceCard';

// Memoized stat item
const StatItem = memo(({ stat, index }) => {
  const numericValue = parseInt(stat.number);
  const isNumeric = !isNaN(numericValue);
  const [count, ref] = useCountUp(isNumeric ? numericValue : 0);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number gn-count">
        {isNumeric ? `${count}+` : stat.number}
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  );
});

StatItem.displayName = 'StatItem';

// Memoized project card
const ProjectCard = memo(({ project, index }) => (
  <div className="col-lg-4 col-md-6">
    <div className="project-card gn-reveal-scale" style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="project-content">
        <h4>{project.title}</h4>
        <p className="mb-0">{project.description}</p>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

function Home() {
  const services = [
    {
      icon: HiGlobeAlt,
      title: 'Website Development',
      description: 'Websites that work as hard as you do—built to attract, engage, and convert.',
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile App Development',
      description: 'Apps your customers will actually use—intuitive, fast, and built for results.',
    },
    {
      icon: FaFacebook,
      title: 'Meta Ads',
      description: 'Reach the right audience on Facebook & Instagram with campaigns that deliver ROI.',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Business API',
      description: 'Automate customer conversations and never miss a lead again.',
    },
    {
      icon: HiCodeBracket,
      title: 'Admin Panels',
      description: 'Dashboards that give you control—manage your business from anywhere.',
    },
    {
      icon: HiGlobeAlt,
      title: 'Domain & Hosting',
      description: 'Reliable infrastructure so your digital presence is always online.',
    },
  ];

  const stats = [
   { number: '20+', label: 'Projects Completed' },
{ number: '15+', label: 'Happy Clients' },
{ number: '2+', label: 'Years of Learning & Building' },
{ number: '100%', label: 'Focus on Client Satisfaction' },

  ];

  const projects = [
    {
      image: 'media/realestate.jpg',
      title: 'Real Estate Platform',
      description: 'Property listing website that increased lead generation by 3x for a local realtor.'
    },
    {
      image: 'media/hotel-booking.png',
      title: 'Hotel Booking System',
      description: 'Online booking platform that streamlined reservations and reduced manual work by 80%.'
    },
    {
      image: 'media/mobile-app.webp',
      title: 'Service Booking App',
      description: 'Mobile app that made scheduling seamless for a growing service business.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content gn-reveal">
                <span className="section-label">Your Digital Growth Partner</span>
                <h1 className="hero-title">
                  We Build Digital Solutions That <span className="highlight">Actually Work</span>
                </h1>
                <p className="hero-subtitle">
                  From websites and mobile apps to Meta Ads and WhatsApp automation—we handle the tech so you can focus on growing your business.
                </p>
                <div className="hero-buttons">
                  <Link to="/contact" className="btn-primary-custom">
                    Start Your Project
                    <HiArrowRight />
                  </Link>
                  <a 
                    href="https://wa.me/+919763723391?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>
                </div>
                <div className="stats-row">
                  {stats.map((stat, index) => (
                    <StatItem key={index} stat={stat} index={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image gn-reveal-right">
                <img 
                  src="media/home-showcase.png" 
                  alt="Got Nexus - Digital Solutions" 
                  style={{ width: '90%' }} 
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '40px' }}>
        <div className="container">
          <div className="quote-block gn-reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <FaQuoteLeft className="quote-icon" />
            <p>"Technology should simplify business, not complicate it."</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">What We Build & Manage</span>
            <h2>Everything Your Business Needs to Grow Online</h2>
            <p>End-to-end digital solutions—from development to marketing and beyond</p>
          </div>
          
          <div className="row g-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-5 gn-reveal">
            <Link to="/services" className="btn-secondary-custom">
              Explore All Services
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="gn-reveal-left">
                <span className="section-label">Why GOT Nexus</span>
                <h2 className="mb-4">We're Not Just Developers—We're Your Growth Partners</h2>
                <p className="mb-4" style={{ fontSize: '1.05rem' }}>
                  Most agencies deliver projects and disappear. We stick around because your success is our success. Every solution we build is designed with one goal: helping your business grow.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3 gn-reveal-right">
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="feature-icon-small">
                      <HiCursorArrowRays />
                    </div>
                    <div>
                      <h6 className="mb-1">Results-Focused</h6>
                      <p className="mb-0 text-sm">Every decision tied to your goals</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="feature-icon-small feature-icon-green">
                      <HiCodeBracket />
                    </div>
                    <div>
                      <h6 className="mb-1">Clean Code</h6>
                      <p className="mb-0 text-sm">Built to scale with you</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="feature-icon-small">
                      <HiChatBubbleLeftRight />
                    </div>
                    <div>
                      <h6 className="mb-1">Direct Communication</h6>
                      <p className="mb-0 text-sm">Talk to decision-makers</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-start gap-3">
                    <div className="feature-icon-small feature-icon-green">
                      <FaHandshake />
                    </div>
                    <div>
                      <h6 className="mb-1">Long-Term Partnership</h6>
                      <p className="mb-0 text-sm">We grow with you</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 gn-reveal">
                <Link to="/why-us" className="btn-primary-custom">
                  Learn More About Us
                  <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">Work That Delivers</span>
            <h2>Solutions Built for Real Businesses</h2>
            <p>See how we've helped businesses like yours succeed online</p>
          </div>
          
          <div className="row g-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <div className="text-center mt-5 gn-reveal">
            <Link to="/projects" className="btn-secondary-custom">
              View All Projects
              <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content gn-reveal">
            <h2>Ready to Build Something That Works?</h2>
            <p>Let's discuss your goals and create a solution that drives real results for your business.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-primary-custom">
                Get Free Consultation
                <HiArrowRight />
              </Link>
              <a 
                href="https://wa.me/+919763723391?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <FaWhatsapp />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Home);
