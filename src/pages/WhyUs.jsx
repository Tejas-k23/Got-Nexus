import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiCodeBracket, HiCursorArrowRays } from 'react-icons/hi2';
import { FaHandshake, FaWhatsapp, FaQuoteLeft, FaPaintBrush, FaRupeeSign, FaUserTie } from 'react-icons/fa';

// Memoized Reason Card
const ReasonCard = memo(({ reason, index }) => (
  <div 
    className="col-lg-4 col-md-6 gn-reveal"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="feature-card h-100">
      <div className="feature-icon">
        <reason.icon />
      </div>
      <h4>{reason.title}</h4>
      <p className="mb-0">{reason.description}</p>
    </div>
  </div>
));

ReasonCard.displayName = 'ReasonCard';

// Memoized Value Card
const ValueCard = memo(({ value, index }) => (
  <div 
    className="col-sm-6 gn-reveal"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="value-card">
      <h4 className="value-card-title">{value.title}</h4>
      <p className="mb-0 value-card-desc">{value.description}</p>
    </div>
  </div>
));

ValueCard.displayName = 'ValueCard';

function WhyUs() {
  const reasons = [
    {
      icon: HiCursorArrowRays,
      title: 'Business-First Thinking',
      description: 'We don\'t just build features—we build solutions that move the needle for your business. Every decision is tied to your goals, not just what\'s technically interesting.'
    },
    {
      icon: HiCodeBracket,
      title: 'Clean, Scalable Systems',
      description: 'Your business will grow, and your technology should grow with it. We build on solid foundations so you\'re never stuck rebuilding from scratch.'
    },
    {
      icon: FaPaintBrush,
      title: 'Design That Converts',
      description: 'Beautiful isn\'t enough. We design interfaces that guide users toward action—whether that\'s buying, booking, or getting in touch.'
    },
    {
      icon: FaRupeeSign,
      title: 'Honest, Fair Pricing',
      description: 'No hidden costs, no surprise invoices. We scope projects carefully and stick to our quotes. Quality work doesn\'t have to drain your budget.'
    },
    {
      icon: FaUserTie,
      title: 'Direct Founder Access',
      description: 'You work directly with decision-makers, not junior staff or account managers. Your vision is heard and executed without telephone games.'
    },
    {
      icon: FaHandshake,
      title: 'Long-Term Partnership',
      description: 'We\'re not here for one project and gone. We build relationships, provide ongoing support, and genuinely care about your continued success.'
    }
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'You\'ll always know where your project stands, what\'s being worked on, and what comes next. No surprises.'
    },
    {
      title: 'Quality',
      description: 'We don\'t cut corners. Every line of code, every design choice is made with care and tested thoroughly.'
    },
    {
      title: 'Accountability',
      description: 'When we commit to something, we deliver. If something goes wrong, we own it and make it right.'
    },
    {
      title: 'Simplicity',
      description: 'We believe in solutions that are easy to understand and use. Complexity is rarely the answer.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section section-gray" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="gn-reveal-left">
                <span className="section-label">Why Businesses Trust Got Nexus</span>
                <h1>We're Not Just Vendors—We're Partners in Your Growth</h1>
                <p style={{ fontSize: '1.05rem' }}>
                  Choosing who builds your digital presence is a big decision. Here's why businesses—from startups to established companies—choose to work with us.
                </p>
                <Link to="/contact" className="btn-primary-custom mt-3">
                  Let's Talk
                  <HiArrowRight />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gn-reveal-right">
                <img 
                  src="media/laptop-quote.jpg" 
                  alt="Why Choose Got Nexuses" 
                  loading="eager"
                  style={{ 
                    width: '60%',
                    padding:'5px', 
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '40px' }}>
        <div className="container">
          <div 
            className="quote-block gn-reveal"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p>"Good systems don't just look good—they perform. That's what we build."</p>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">What Sets Us Apart</span>
            <h2>The Got Nexus Difference</h2>
            <p>Here's what makes working with us different from the typical vendor experience</p>
          </div>
          
          <div className="row g-4">
            {reasons.map((reason, index) => (
              <ReasonCard key={index} reason={reason} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="gn-reveal-left">
                <span className="section-label" style={{ color: 'var(--primary-light)' }}>Our Values</span>
                <h2>Built on Principles That Matter</h2>
                <p style={{ color: 'var(--gray-300)', marginBottom: '24px' }}>
                  These aren't just words on a website. They're the principles that guide every project, every conversation, and every decision we make.
                </p>
                <img 
                  src="media/devices.png" 
                  alt="Our Values" 
                  loading="lazy"
                  style={{ maxWidth: '70%', borderRadius: 'var(--radius-lg)' }}
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {values.map((value, index) => (
                  <ValueCard key={index} value={value} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
              <div className="gn-reveal-scale">
                <img 
                  src="media/best logo.png" 
                  alt="Founder" 
                  loading="lazy"
                  style={{ 
                    width: '100%', 
                    maxWidth: '280px',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-xl)'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="gn-reveal-right">
                <span className="section-label">Meet The Founder</span>
                <h2 className="mb-4">You Work Directly With Me</h2>
                <p style={{ fontSize: '1.05rem' }}>
                  When you partner with Got Nexuses, you're not handed off to a junior team member or lost in a queue. You work directly with me—the person who makes the decisions and takes responsibility for your project's success.
                </p>
                <p style={{ fontSize: '1.05rem' }}>
                  I've spent years building digital products for businesses of all sizes. I understand that your website or app isn't just a project—it's an investment in your business's future. That's why I treat every project with the care and attention it deserves.
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: '500', color: 'var(--secondary)' }}>
                  When we work together, you get ownership, accountability, and a genuine partner invested in your success.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-4">
                  <Link to="/contact" className="btn-primary-custom">
                    Let's Connect
                    <HiArrowRight />
                  </Link>
                  <a 
                    href="https://wa.me/+919763723391?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content gn-reveal">
            <h2>Ready to Work With a Team That Cares?</h2>
            <p>Let's have a conversation about your goals and see if we're the right fit for your project.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-primary-custom">
                Start a Conversation
                <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(WhyUs);
