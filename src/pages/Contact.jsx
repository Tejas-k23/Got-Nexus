import React, { useState, memo, useCallback } from 'react';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';
import { FaWhatsapp, FaQuoteLeft, FaCheck, FaPaperPlane } from 'react-icons/fa';

// Memoized Contact Info Item
const ContactInfoItem = memo(({ item }) => (
  <div className="contact-info-item">
    <div className="contact-info-icon">
      <item.icon style={{ fontSize: '1.5rem' }} />
    </div>
    <div className="contact-info-content">
      <h5>{item.title}</h5>
      <a 
        href={item.link} 
        target={item.title === 'WhatsApp' ? '_blank' : '_self'} 
        rel="noopener noreferrer"
      >
        {item.content}
      </a>
      <p style={{ fontSize: '0.8rem', marginTop: '4px', color: 'var(--gray-500)' }}>
        {item.description}
      </p>
    </div>
  </div>
));

ContactInfoItem.displayName = 'ContactInfoItem';

// Memoized FAQ Item
const FAQItem = memo(({ faq, index }) => (
  <div 
    className="faq-item gn-reveal"
    style={{ transitionDelay: `${index * 0.1}s` }}
  >
    <h5>{faq.question}</h5>
    <p className="mb-0">{faq.answer}</p>
  </div>
));

FAQItem.displayName = 'FAQItem';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, phone, service, message } = formData;

  const whatsappMessage = `
Hello GOT Nexus Team,

👤 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone || 'Not provided'}
🛠 Service: ${service || 'Not specified'}

📝 Project Details:
${message}
`;

  const encodedMessage = encodeURIComponent(whatsappMessage.trim());

  const whatsappURL = `https://wa.me/91976372339?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  setSubmitted(true);
};


  const resetForm = useCallback(() => {
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  }, []);

  const contactInfo = [
    {
  icon: FaWhatsapp,
  title: 'WhatsApp',
  content: '+919763723391',
  link: 'https://wa.me/91976372339?text=Hi%20GOT%20Nexus,%20I%20am%20looking%20for%20a%20professional%20website.%20Can%20we%20discuss%20my%20requirements?',
  description: 'Fastest way to reach us—usually reply within an hour'
}
,
    {
      icon: HiEnvelope,
      title: 'Email',
      content: 'got.nexuses@gmaile.com',
      link: 'mailto:got.nexuses@gmaile.com',
      description: 'For detailed inquiries—we respond within 24 hours'
    },
    {
      icon: HiPhone,
      title: 'Phone',
      content: '+919763723391',
      link: 'tel:+919763723391',
      description: 'Available Mon-Fri, 9am-6pm'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'It depends on the complexity. A simple website might take 2-3 weeks, while a custom application could take 2-3 months. We\'ll give you a clear timeline during our first conversation.'
    },
    {
      question: 'What does it cost to work with you?',
      answer: 'Every project is different, so we provide custom quotes based on your specific needs. We\'re transparent about pricing—no hidden fees or surprise invoices. We also offer flexible payment options.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Absolutely. We offer ongoing maintenance and support packages. We\'re not the type to build something and disappear—we\'re here for the long term.'
    },
    {
      question: 'I\'m not sure what I need. Can you still help?',
      answer: 'Of course. Many clients come to us with just an idea or a problem they want to solve. We\'ll help you figure out the best approach during our initial conversation.'
    },
    {
      question: 'Can you work with my existing website or system?',
      answer: 'Yes. We can improve, extend, or integrate with what you already have. We\'ll assess your current setup and recommend the best path forward.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section section-gray" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">Let's Build Something That Works</span>
            <h1>Start a Conversation</h1>
            <p>Whether you have a clear project in mind or just an idea—let's talk. No pressure, no obligation, just a genuine conversation about how we can help.</p>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section style={{ paddingBottom: '20px' }}>
        <div className="container">
          <div 
            className="quote-block gn-reveal"
            style={{ maxWidth: '700px', margin: '0 auto' }}
          >
            <FaQuoteLeft className="quote-icon" />
            <p>"Growth comes from clarity, not complexity. Let's simplify your path to success."</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="row g-4 g-lg-5">
            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="gn-reveal-left">
                <h3 className="mb-3" style={{ fontSize: '1.5rem' }}>Get In Touch</h3>
                <p className="mb-4" style={{ color: 'var(--gray-600)' }}>
                  Choose your preferred method. We're here to listen and help with your digital project.
                </p>

                {contactInfo.map((item, index) => (
                  <ContactInfoItem key={index} item={item} />
                ))}

                {/* WhatsApp CTA */}
                <div className="whatsapp-cta-box mt-4 gn-reveal">
                  <h4>
                    <FaWhatsapp style={{ marginRight: '8px', display: 'inline' }} />
                    Prefer WhatsApp?
                  </h4>
                  <p>
                    Get instant responses! Click below to start a conversation.
                  </p>
                  <a 
                    href="https://wa.me/91976372339?text=Hello%20GOT%20Nexus%20Team,%20I%20am%20interested%20in%20website%20development%20services.%20Please%20share%20more%20details.." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-chat-btn"
                  >
                    <FaWhatsapp />
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact-card gn-reveal-right">
                {submitted ? (
                  <div className="text-center py-5">
                    <div className="success-icon-wrapper">
                      <FaCheck style={{ fontSize: '1.75rem', color: 'var(--accent)' }} />
                    </div>
                    <h3 style={{ marginBottom: '12px' }}>Thank You!</h3>
                    <p className="mb-4" style={{ fontSize: '1rem' }}>
                      Your message has been received. We'll get back to you within 24 hours.
                    </p>
                    <button 
                      className="btn-secondary-custom"
                      onClick={resetForm}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-4" style={{ fontSize: '1.35rem' }}>Send Us a Message</h3>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="name">Full Name *</label>
                            <input 
                              type="text" 
                              id="name" 
                              name="name" 
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your name"
                              required 
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">Email Address *</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required 
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phone">Phone / WhatsApp</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+1 234 567 890"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="service">What Do You Need?</label>
                            <select 
                              id="service" 
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                            >
                              <option value="">Select a service</option>
                              <option value="website">Website Development</option>
                              <option value="mobile">Mobile App Development</option>
                              <option value="admin">Admin Panel / Dashboard</option>
                              <option value="metaads">Meta Ads (Facebook & Instagram)</option>
                              <option value="whatsapp">WhatsApp Business API</option>
                              <option value="automation">Business Automation</option>
                              <option value="hosting">Domain & Hosting</option>
                              <option value="other">Other / Not Sure</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Tell Us About Your Project *</label>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What are you looking to build? What problem are you trying to solve? Any timeline or budget in mind?"
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-primary-custom w-100">
                        Send Message
                        <FaPaperPlane />
                      </button>
                      
                      <p className="form-privacy-note">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header gn-reveal">
            <span className="section-label">Common Questions</span>
            <h2>Before You Reach Out</h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Contact);
