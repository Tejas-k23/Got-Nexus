import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChartBar } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

// Memoized Project Card
const ProjectCard = memo(({ project, index }) => (
  <div 
    className="col-lg-6 gn-reveal"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <div className="project-card h-100">
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="project-badge">{project.category}</span>
      </div>
      <div className="project-content">
        <h4 style={{ marginBottom: '16px' }}>{project.title}</h4>
        
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: 'var(--gray-700)', fontSize: '0.85rem' }}>The Challenge:</strong>
          <p style={{ fontSize: '0.9rem', marginBottom: '0', marginTop: '4px' }}>{project.problem}</p>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <strong style={{ color: 'var(--gray-700)', fontSize: '0.85rem' }}>What We Built:</strong>
          <p style={{ fontSize: '0.9rem', marginBottom: '0', marginTop: '4px' }}>{project.solution}</p>
        </div>
        
        <div className="project-result-box">
          <strong style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>
            <HiChartBar style={{ marginRight: '8px', display: 'inline' }} />Result:
          </strong>
          <p style={{ fontSize: '0.9rem', marginBottom: '0', marginTop: '4px', color: 'var(--gray-700)' }}>
            {project.result}
          </p>
        </div>
        
        <div className="project-tags">
          {project.tags.map((tag, idx) => (
            <span className="project-tag" key={idx}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
));

ProjectCard.displayName = 'ProjectCard';

function Projects() {
  const projects = [
    {
      image: 'media/realestate.jpg',
      title: 'Real Estate Listing Platform',
      category: 'Website',
      problem: 'A local realtor was losing leads to competitors with better online presence.',
      solution: 'Built a modern property listing website with advanced search, virtual tours, and lead capture forms.',
      result: '3x increase in online inquiries within the first month.',
      tags: ['Lead Generation', 'Property Search', 'Mobile Responsive']
    },
    {
      image: 'media/hotel-booking.png',
      title: 'Hotel Booking System',
      category: 'Web Application',
      problem: 'Manual booking process was causing double bookings and lost reservations.',
      solution: 'Created an online booking system with real-time availability, automatic confirmations, and admin dashboard.',
      result: '80% reduction in booking errors and 5 hours saved daily on admin work.',
      tags: ['Online Booking', 'Payment Integration', 'Admin Dashboard']
    },
    {
      image: 'media/mobile-app.webp',
      title: 'Service Booking Mobile App',
      category: 'Mobile App',
      problem: 'Customers had to call during business hours to book appointments, leading to missed opportunities.',
      solution: 'Developed a mobile app for 24/7 booking with push notification reminders and loyalty rewards.',
      result: '45% of bookings now happen outside business hours. Customer retention improved by 30%.',
      tags: ['iOS & Android', 'Push Notifications', 'Loyalty Program']
    },
    {
      image: 'media/admin-dashboard.webp',
      title: 'Business Operations Dashboard',
      category: 'Admin Panel',
      problem: 'Business owner was managing inventory, orders, and staff across multiple spreadsheets.',
      solution: 'Built a unified dashboard with real-time inventory tracking, order management, and staff scheduling.',
      result: 'Complete visibility into operations. Decision-making time reduced from hours to minutes.',
      tags: ['Real-time Data', 'Inventory Management', 'Staff Scheduling']
    },
    {
      image: 'media/rooms.jpg',
      title: 'Restaurant Reservation System',
      category: 'Web Application',
      problem: 'Phone-only reservations were overwhelming staff during peak hours.',
      solution: 'Created an online reservation system with table management, waitlist, and automatic reminders.',
      result: '60% of reservations now made online. Staff can focus on in-person service.',
      tags: ['Table Management', 'SMS Reminders', 'Waitlist Feature']
    },
    {
      image: 'media/ecommerce.jpg',
      title: 'E-Commerce Store',
      category: 'Website',
      problem: 'Retail business was missing out on online sales and had no way to sell beyond their physical location.',
      solution: 'Launched a full e-commerce store with inventory sync, payment processing, and shipping integration.',
      result: 'Online sales now account for 40% of total revenue. Reached customers in 3 new cities.',
      tags: ['Payment Gateway', 'Inventory Sync', 'Shipping Integration']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section section-gray" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">Work That Solves Real Problems</span>
            <h1>Projects Built for Business Impact</h1>
            <p>Every project we take on solves a real business problem. Here's a look at some of the solutions we've delivered and the results they achieved.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="gn-reveal-left">
                <img 
                  src="media/responsive-layout.png" 
                  alt="Our Approach" 
                  loading="lazy"
                  style={{ 
                    width: '75%',
                    borderRadius: 'var(--radius-lg)'
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="gn-reveal-right">
                <span className="section-label">Our Approach</span>
                <h2 className="mb-4">Every Business is Unique</h2>
                <p style={{ fontSize: '1.05rem' }}>
                  The projects above represent just a sample of our work. What they have in common is a focus on solving specific business problems—not just building technology for technology's sake.
                </p>
                <p style={{ fontSize: '1.05rem' }}>
                  Whether you need a simple website, a complex application, or something in between, we start by understanding your business goals. Then we design and build a solution tailored to achieve those goals.
                </p>
                <p style={{ fontSize: '1.05rem', fontWeight: '500', color: 'var(--secondary)' }}>
                  No cookie-cutter templates. No one-size-fits-all solutions. Just thoughtful work that delivers results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content gn-reveal">
            <h2>Have a Challenge We Can Solve?</h2>
            <p>Let's discuss your business goals and explore how we can help you achieve them.</p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-primary-custom">
                Discuss Your Project
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

export default memo(Projects);
