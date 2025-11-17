import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Dashboard Overview',
      description: 'Main dashboard with employee list and quick actions',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
      category: 'Dashboard'
    },
    {
      id: 2,
      title: 'Employee Management',
      description: 'Add, edit, and manage employee records efficiently',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
      category: 'Features'
    },
    {
      id: 3,
      title: 'Attendance Tracking',
      description: 'Real-time attendance monitoring and reports',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      category: 'Features'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and data visualization',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      category: 'Analytics'
    },
    {
      id: 5,
      title: 'Payroll Management',
      description: 'Automated payroll processing and salary management',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
      category: 'Features'
    },
    {
      id: 6,
      title: 'Reports & Insights',
      description: 'Generate custom reports and gain actionable insights',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
      category: 'Analytics'
    },
    {
      id: 7,
      title: 'Mobile Interface',
      description: 'Responsive design works perfectly on all devices',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      category: 'UI'
    },
    {
      id: 8,
      title: 'Settings & Configuration',
      description: 'Customize system settings and user permissions',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
      category: 'Settings'
    }
  ];

  const categories = ['All', 'Dashboard', 'Features', 'Analytics', 'UI', 'Settings'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="page">
      <h2>Gallery & UI Showcase</h2>
      <p>Explore the features and interface of CloudOps360 through our comprehensive gallery.</p>

      <section className="gallery-filters">
        <h3>Filter by Category</h3>
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setSelectedImage(item)}
          >
            <div className="gallery-image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">
                <button className="btn btn-primary">View</button>
              </div>
            </div>
            <div className="gallery-info">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="gallery-category">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>✕</button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      <section className="gallery-features">
        <h3>Key Features Showcase</h3>
        <div className="features-showcase">
          <div className="feature-showcase-item">
            <h4>🎯 Intuitive Dashboard</h4>
            <p>Clean and organized interface for easy navigation and quick access to all features.</p>
          </div>
          <div className="feature-showcase-item">
            <h4>📊 Advanced Analytics</h4>
            <p>Real-time data visualization and comprehensive reports for data-driven decisions.</p>
          </div>
          <div className="feature-showcase-item">
            <h4>📱 Responsive Design</h4>
            <p>Works seamlessly on desktop, tablet, and mobile devices with optimized layouts.</p>
          </div>
          <div className="feature-showcase-item">
            <h4>🔐 Enterprise Security</h4>
            <p>Bank-level encryption and compliance with international security standards.</p>
          </div>
          <div className="feature-showcase-item">
            <h4>⚡ High Performance</h4>
            <p>Lightning-fast load times and smooth interactions for optimal user experience.</p>
          </div>
          <div className="feature-showcase-item">
            <h4>🌐 Cloud-Based</h4>
            <p>Access from anywhere, anytime with automatic backups and disaster recovery.</p>
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <h3>Ready to Experience CloudOps360?</h3>
        <p>Start your free trial today and see how our platform can transform your HR operations.</p>
        <button className="btn btn-primary">Start Free Trial</button>
      </section>
    </div>
  );
}
