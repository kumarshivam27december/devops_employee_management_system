import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      position: 'HR Manager',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'CloudOps360 has transformed how we manage our employees. The intuitive interface and powerful features have saved us countless hours. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Global Enterprises Inc',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'The analytics dashboard is incredible. We can now make data-driven decisions about our workforce. The support team is also very responsive.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'StartUp Innovations',
      position: 'CEO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'As a growing startup, we needed a scalable solution. CloudOps360 grew with us and never let us down. Best investment for our HR operations!'
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Finance Plus Group',
      position: 'CFO',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'The payroll management feature is a game-changer. Automated calculations, compliance tracking, and reporting - everything we needed in one place.'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      company: 'Creative Agency Pro',
      position: 'People Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'The user interface is so clean and easy to use. Even non-technical staff can navigate it without any training. Excellent product!'
    },
    {
      id: 6,
      name: 'James Wilson',
      company: 'Manufacturing Corp',
      position: 'HR Director',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
      rating: 5,
      text: 'We manage 500+ employees across multiple locations. CloudOps360 makes it seamless. The mobile app is perfect for on-the-go management.'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="page">
      <h2>Customer Testimonials</h2>
      <p>See what our satisfied customers have to say about CloudOps360.</p>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
              <div className="testimonial-info">
                <h4>{testimonial.name}</h4>
                <p className="position">{testimonial.position}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
            <div className="testimonial-rating">
              {renderStars(testimonial.rating)}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
          </div>
        ))}
      </div>

      <section className="testimonial-stats">
        <h3>Our Impact</h3>
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <p>Companies Trust Us</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <p>Employees Managed</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">99.9%</span>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h3>Ready to Join Our Success Stories?</h3>
        <p>Start your free trial today and experience the difference CloudOps360 can make.</p>
        <button className="btn btn-primary">Start Free Trial</button>
      </section>
    </div>
  );
}
