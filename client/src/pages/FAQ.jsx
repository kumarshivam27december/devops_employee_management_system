import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on the Register button in the top-right corner. Fill in your details including name, email, and password. Once registered, you can log in immediately.'
        },
        {
          q: 'What are the system requirements?',
          a: 'CloudOps360 works on any modern browser (Chrome, Firefox, Safari, Edge). No additional software installation is required.'
        },
        {
          q: 'Is there a free trial available?',
          a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required.'
        }
      ]
    },
    {
      category: 'Login & Security',
      questions: [
        {
          q: 'I forgot my password. How do I reset it?',
          a: 'Click "Forgot Password" on the login page. Enter your email address and follow the reset link sent to your inbox.'
        },
        {
          q: 'Is my data secure?',
          a: 'Yes! We use industry-standard encryption (SSL/TLS) and follow GDPR compliance standards. Your data is encrypted both in transit and at rest.'
        },
        {
          q: 'Can I enable two-factor authentication?',
          a: 'Yes, two-factor authentication is available in your security settings for enhanced account protection.'
        }
      ]
    },
    {
      category: 'Employee Management',
      questions: [
        {
          q: 'How do I add a new employee?',
          a: 'Go to Dashboard → Add Employee. Fill in the employee details (name, position, department, salary) and click Save. The employee record is created instantly.'
        },
        {
          q: 'Can I bulk import employees?',
          a: 'Yes! You can upload a CSV file with employee data. Go to Settings → Import Employees and select your file.'
        },
        {
          q: 'How do I update employee information?',
          a: 'Click the Edit button next to any employee in the list. Modify the details and click Update.'
        }
      ]
    },
    {
      category: 'Attendance & Payroll',
      questions: [
        {
          q: 'How does the attendance system work?',
          a: 'Employees can check in daily through the mobile app or web portal. The system automatically tracks attendance and generates reports.'
        },
        {
          q: 'Can I set attendance rules?',
          a: 'Yes! Configure working hours, late arrival policies, and leave rules in Settings → Attendance Rules.'
        },
        {
          q: 'How is payroll calculated?',
          a: 'Payroll is calculated based on salary, attendance, and deductions. You can customize payroll rules in Settings → Payroll Configuration.'
        }
      ]
    },
    {
      category: 'Support & Troubleshooting',
      questions: [
        {
          q: 'What if I encounter a bug?',
          a: 'Please report it through our Support page. Include screenshots and steps to reproduce the issue. Our team will respond within 24 hours.'
        },
        {
          q: 'Is there a knowledge base?',
          a: 'Yes! Visit our Documentation page for detailed guides, tutorials, and best practices.'
        },
        {
          q: 'How do I contact support?',
          a: 'You can reach us via email (support@cloudops360.com), live chat, or by raising a ticket on the Support page.'
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="page">
      <h2>Frequently Asked Questions</h2>
      <p>Find answers to common questions about CloudOps360.</p>

      <div className="faq-container">
        {faqs.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="faq-list">
              {category.questions.map((item, qIndex) => {
                const globalIndex = `${catIndex}-${qIndex}`;
                return (
                  <div key={globalIndex} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(globalIndex)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-toggle">{openIndex === globalIndex ? '−' : '+'}</span>
                    </button>
                    {openIndex === globalIndex && (
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <section className="faq-contact">
        <h3>Still have questions?</h3>
        <p>Can't find the answer you're looking for? Please visit our Support page or contact our team.</p>
        <a href="/support" className="btn btn-primary">Contact Support</a>
      </section>
    </div>
  );
}
