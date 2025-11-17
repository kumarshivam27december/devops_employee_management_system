import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="page legal-page">
      <h2>Privacy Policy</h2>
      <p className="last-updated">Last updated: November 17, 2024</p>

      <section className="legal-section">
        <h3>1. Introduction</h3>
        <p>
          CloudOps360 ("we", "us", "our", or "Company") operates the CloudOps360 website and application. This page informs you of our 
          policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.
        </p>
      </section>

      <section className="legal-section">
        <h3>2. Information Collection and Use</h3>
        <p>We collect several different types of information for various purposes to provide and improve our service to you.</p>
        
        <h4>Types of Data Collected:</h4>
        <ul>
          <li><strong>Personal Data:</strong> Name, email address, phone number, postal address, cookies and usage data</li>
          <li><strong>Employee Data:</strong> Employee records, attendance information, payroll details, department information</li>
          <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time and date of visit, time spent on pages</li>
          <li><strong>Device Data:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>3. Why We Collect Your Data</h3>
        <p>CloudOps360 collects data for the following purposes:</p>
        <ul>
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features of our service</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our service</li>
          <li>To monitor the usage of our service</li>
          <li>To detect, prevent and address technical issues</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>4. How We Store Your Data</h3>
        <p>
          Your data is stored securely on our cloud servers with multiple layers of protection:
        </p>
        <ul>
          <li>Data is encrypted using AES-256 encryption at rest</li>
          <li>All data transmissions use SSL/TLS encryption</li>
          <li>Access to data is restricted to authorized personnel only</li>
          <li>Regular backups are maintained in geographically distributed data centers</li>
          <li>We comply with GDPR, CCPA, and other data protection regulations</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>5. Data Retention</h3>
        <p>
          CloudOps360 will retain your personal data only for as long as necessary for the purposes set out in this Privacy Policy. 
          We will retain and use your personal data to the extent necessary to comply with our legal obligations.
        </p>
        <ul>
          <li>Active account data: Retained while account is active</li>
          <li>Deleted account data: Permanently deleted within 30 days</li>
          <li>Backup data: Retained for up to 90 days for recovery purposes</li>
          <li>Legal/compliance data: Retained as required by law</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>6. Data Sharing and Disclosure</h3>
        <p>
          We do not sell, trade, or rent your personal information to third parties. However, we may share your data in the following circumstances:
        </p>
        <ul>
          <li>With your explicit consent</li>
          <li>With service providers who assist us in operating our website and conducting our business</li>
          <li>When required by law or to protect our legal rights</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
          <li>To prevent fraud or security issues</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>7. Security of Data</h3>
        <p>
          The security of your data is important to us but remember that no method of transmission over the Internet or method of 
          electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, 
          we cannot guarantee its absolute security.
        </p>
        <p>Our security measures include:</p>
        <ul>
          <li>Industry-standard SSL/TLS encryption</li>
          <li>Regular security audits and penetration testing</li>
          <li>Multi-factor authentication options</li>
          <li>Role-based access control</li>
          <li>Intrusion detection systems</li>
          <li>Regular security training for staff</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>8. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Restrict processing of your data</li>
          <li>Data portability (receive your data in a structured format)</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
      </section>

      <section className="legal-section">
        <h3>9. Cookies and Tracking</h3>
        <p>
          We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences.
        </p>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for website functionality</li>
          <li><strong>Performance Cookies:</strong> Help us understand how you use our site</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          <li><strong>Marketing Cookies:</strong> Track your activity for targeted advertising</li>
        </ul>
        <p>You can control cookie settings through your browser preferences.</p>
      </section>

      <section className="legal-section">
        <h3>10. Third-Party Links</h3>
        <p>
          Our service may contain links to other websites that are not operated by us. This Privacy Policy applies only to our website. 
          We are not responsible for the privacy practices of third-party websites. We encourage you to review the privacy policies of 
          any third-party sites before providing your personal information.
        </p>
      </section>

      <section className="legal-section">
        <h3>11. Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
          and updating the "Last updated" date at the top of this Privacy Policy.
        </p>
      </section>

      <section className="legal-section">
        <h3>12. Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: privacy@cloudops360.com<br />
          Data Protection Officer: dpo@cloudops360.com<br />
          Address: CloudOps360 Headquarters<br />
          Phone: +1-800-CLOUDOPS
        </p>
      </section>
    </div>
  );
}
