import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  HiGlobeAlt, HiDevicePhoneMobile, HiArrowRight, HiCodeBracket, HiServer
} from 'react-icons/hi2';
import { FaWhatsapp, FaFacebook, FaRobot, FaCheckCircle } from 'react-icons/fa';

// Memoized Service Section
const ServiceSection = memo(({ service, index, isLast }) => (
  <div 
    className={`row align-items-center mb-5 pb-5 gn-reveal ${!isLast ? 'border-bottom' : ''}`}
    style={{ 
      flexDirection: index % 2 === 1 ? 'row-reverse' : 'row',
      transitionDelay: `${index * 0.1}s`
    }}
  >
    <div className="col-lg-6 mb-4 mb-lg-0">
      <div 
        className="service-image-box"
        style={{ 
          background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
          borderRadius: 'var(--radius-lg)',
          padding: '30px',
          border: `1px solid ${service.color}20`
        }}
      >
        <img 
          src={service.image} 
          alt={service.title}
          className="service-image"
          loading="lazy"
          style={{ 
            width: '80%', 
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)'
          }}
        />
      </div>
    </div>
    <div className="col-lg-6">
      <div style={{ 
        paddingLeft: index % 2 === 0 ? '24px' : '0', 
        paddingRight: index % 2 === 1 ? '24px' : '0' 
      }}>
        <div 
          className="service-icon mb-3" 
          style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
        >
          <service.icon style={{ fontSize: '1.5rem' }} />
        </div>
        <h3 className="mb-3">{service.title}</h3>
        <p style={{ fontSize: '1.05rem', marginBottom: '20px' }}>{service.description}</p>
        
        <h6 style={{ color: 'var(--gray-700)', marginBottom: '12px', fontWeight: '600' }}>
          What You Get:
        </h6>
        <ul className="service-features mb-4">
          {service.outcomes.map((outcome, idx) => (
            <li key={idx}>
              <FaCheckCircle />
              {outcome}
            </li>
          ))}
        </ul>
        
        <Link 
          to="/contact" 
          className="btn-primary-custom" 
          style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)` }}
        >
          Get Started
          <HiArrowRight />
        </Link>
      </div>
    </div>
  </div>
));

ServiceSection.displayName = 'ServiceSection';

// Memoized Process Step
const ProcessStep = memo(({ item, index }) => (
  <div 
    className="col-lg-3 col-md-6 gn-reveal"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="text-center">
      <div className="process-step-number">
        {item.step}
      </div>
      <h4 className="process-step-title">{item.title}</h4>
      <p className="process-step-desc">{item.description}</p>
    </div>
  </div>
));

ProcessStep.displayName = 'ProcessStep';

function Services() {
  const services = [
    {
      icon: HiGlobeAlt,
      title: 'Website Development',
      description: 'Your website is often the first impression customers have of your business. We build websites that not only look professional but are designed to convert visitors into leads and customers.',
      outcomes: [
        'Websites that load fast and rank well',
        'Mobile-friendly design that works everywhere',
        'Clear calls-to-action that drive inquiries',
        'Easy-to-update content management',
        'SEO foundations built from day one'
      ],
      image: 'media/responsive-layout.png',
      color: '#0EA5E9'
    },
    {
      icon: HiDevicePhoneMobile,
      title: 'Mobile App Development',
      description: 'Reach your customers where they spend most of their time—on their phones. We build mobile apps that are intuitive, fast, and designed to keep users engaged.',
      outcomes: [
        'Apps for both iOS and Android',
        'Simple, user-friendly interfaces',
        'Push notifications to stay connected',
        'Offline capabilities when needed',
        'Seamless integration with your systems'
      ],
      image: 'media/mobile-app.webp',
      color: '#10B981'
    },
    {
      icon: HiCodeBracket,
      title: 'Admin Panels & Dashboards',
      description: 'Stop managing your business through spreadsheets. Get a custom dashboard that gives you real-time visibility and control over your operations.',
      outcomes: [
        'Real-time data at your fingertips',
        'Manage orders, inventory, and customers',
        'Role-based access for your team',
        'Automated reports and insights',
        'Access from anywhere, anytime'
      ],
      image: 'media/admin-dashboard.webp',
      color: '#8B5CF6'
    },
    {
      icon: FaRobot,
      title: 'Business Automation',
      description: 'Free up your time by automating repetitive tasks. From follow-up emails to invoice generation, we build systems that work while you sleep.',
      outcomes: [
        'Automated email and SMS sequences',
        'Invoice and payment automation',
        'Lead capture and CRM integration',
        'Appointment scheduling systems',
        'Custom workflow automation'
      ],
      image: 'media/ecommerce.jpg',
      color: '#F59E0B'
    },
    {
      icon: FaFacebook,
      title: 'Meta Ads (Facebook & Instagram)',
      description: 'Reach your ideal customers where they scroll. We create and manage ad campaigns that deliver real leads and measurable ROI—not just likes and impressions.',
      outcomes: [
        'Targeted campaigns that reach buyers',
        'Creative ads that stop the scroll',
        'Continuous optimization for better results',
        'Transparent reporting on spend and ROI',
        'Retargeting to capture warm leads'
      ],
      image: 'media/meta-ads.jpg',
      color: '#3B82F6'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Business API',
      description: 'Turn WhatsApp into your most powerful sales and support channel. Automate responses, send broadcasts, and never miss a customer inquiry again.',
      outcomes: [
        'Automated replies to common questions',
        'Broadcast messages to customer lists',
        'Chatbot flows for lead qualification',
        'Integration with your CRM',
        '24/7 availability for your customers'
      ],
      image: 'media/meta-ads.jpg',
      color: '#25D366'
    },
    {
      icon: HiServer,
      title: 'Domain & Hosting',
      description: 'Your digital presence needs a reliable foundation. We handle domain registration, hosting setup, SSL certificates, and ongoing maintenance so you don\'t have to worry.',
      outcomes: [
        'Domain registration and management',
        'Fast, secure hosting infrastructure',
        'SSL certificates for security',
        'Regular backups and updates',
        'Technical support when you need it'
      ],
      image: 'media/laptop-quote.jpg',
      color: '#6366F1'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Understand', description: 'We listen to your goals, challenges, and vision to create a clear plan.' },
    { step: '02', title: 'Design', description: 'We map out the solution with wireframes and prototypes before building.' },
    { step: '03', title: 'Build', description: 'We develop your solution with clean code and regular progress updates.' },
    { step: '04', title: 'Launch & Support', description: 'We deploy, test, and provide ongoing support to ensure success.' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section section-gray" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">What We Build & Manage</span>
            <h1>Digital Solutions That Drive Real Business Results</h1>
            <p>From building your online presence to growing it—we handle the technology so you can focus on what you do best.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <ServiceSection 
              key={index} 
              service={service} 
              index={index} 
              isLast={index === services.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label" style={{ color: 'var(--primary-light)' }}>How We Work</span>
            <h2>A Simple Process, Clear Results</h2>
            <p>No unnecessary complexity—just a straightforward approach to getting things done</p>
          </div>
          
          <div className="row g-4">
            {processSteps.map((item, index) => (
              <ProcessStep key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="text-center gn-reveal">
            <h2 className="mb-3">Not Sure Where to Start?</h2>
            <p className="mb-4" style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
              Let's have a conversation about your business goals. We'll help you identify the right solution—no pressure, no jargon.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-primary-custom">
                Schedule a Call
                <HiArrowRight />
              </Link>
              <a 
                href="https://wa.me/91976372339?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details." 
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

export default memo(Services);
