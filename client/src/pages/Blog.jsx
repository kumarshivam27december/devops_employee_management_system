import React from 'react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Benefits of Employee Management System',
      author: 'Sarah Mitchell',
      date: 'November 15, 2024',
      category: 'HR Management',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Discover how modern employee management systems can transform your HR operations, improve productivity, and enhance employee satisfaction.',
      readTime: '5 min read',
      content: `
        An effective employee management system is crucial for modern businesses. Here are the key benefits:
        
        1. **Centralized Data**: All employee information in one secure location
        2. **Improved Efficiency**: Automate routine HR tasks and reduce manual work
        3. **Better Decision Making**: Access real-time analytics and insights
        4. **Enhanced Compliance**: Ensure adherence to labor laws and regulations
        5. **Employee Satisfaction**: Self-service portals improve employee experience
        
        Implementing a robust system can increase productivity by up to 40% and reduce HR administrative costs significantly.
      `
    },
    {
      id: 2,
      title: 'Why HR Automation is Important',
      author: 'James Wilson',
      date: 'November 10, 2024',
      category: 'Automation',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Learn how HR automation can streamline your processes, reduce errors, and allow your team to focus on strategic initiatives.',
      readTime: '6 min read',
      content: `
        HR automation is no longer optional—it's essential. Here's why:
        
        **Efficiency Gains**: Automate repetitive tasks like data entry, leave approvals, and payroll processing
        **Error Reduction**: Minimize human errors in critical HR processes
        **Cost Savings**: Reduce operational costs and improve ROI
        **Scalability**: Easily manage growing teams without proportional increase in HR staff
        **Employee Experience**: Faster processing and self-service options improve satisfaction
        
        Companies that implement HR automation see an average 30% reduction in HR operational costs.
      `
    },
    {
      id: 3,
      title: 'Best Practices for Attendance Management',
      author: 'Emily Rodriguez',
      date: 'November 5, 2024',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Explore proven strategies for effective attendance management that promotes accountability and fairness.',
      readTime: '4 min read',
      content: `
        Effective attendance management is key to organizational success. Follow these best practices:
        
        1. **Clear Policies**: Define attendance expectations and consequences
        2. **Fair Implementation**: Apply policies consistently across all employees
        3. **Technology**: Use automated systems for accurate tracking
        4. **Regular Reviews**: Monitor attendance trends and address issues promptly
        5. **Employee Communication**: Keep employees informed about policies and expectations
        
        A well-managed attendance system improves productivity and creates a culture of accountability.
      `
    },
    {
      id: 4,
      title: 'The Future of Employee Management',
      author: 'David Thompson',
      date: 'October 28, 2024',
      category: 'Industry Trends',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
      excerpt: 'Explore emerging trends in employee management and how AI and machine learning are reshaping HR.',
      readTime: '7 min read',
      content: `
        The future of HR is here. Key trends to watch:
        
        **AI-Powered Analytics**: Predictive analytics for talent management
        **Remote Work Management**: Tools for distributed teams
        **Employee Wellness**: Integrated wellness programs and mental health support
        **Data Security**: Enhanced privacy and compliance measures
        **Personalization**: Customized employee experiences
        
        Organizations that embrace these trends will have a competitive advantage in talent acquisition and retention.
      `
    }
  ];

  return (
    <div className="page">
      <h2>CloudOps360 Blog</h2>
      <p>Stay updated with the latest insights on employee management, HR automation, and industry best practices.</p>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span className="author">By {post.author}</span>
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="btn btn-secondary">Read More</button>
            </div>
          </article>
        ))}
      </div>

      <section className="blog-newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Get the latest HR insights and tips delivered to your inbox every week.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </section>

      <section className="blog-categories">
        <h3>Browse by Category</h3>
        <div className="categories-list">
          <button className="category-btn">HR Management</button>
          <button className="category-btn">Automation</button>
          <button className="category-btn">Best Practices</button>
          <button className="category-btn">Industry Trends</button>
          <button className="category-btn">Case Studies</button>
          <button className="category-btn">Tips & Tricks</button>
        </div>
      </section>
    </div>
  );
}
