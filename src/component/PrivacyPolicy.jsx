import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-600 mb-6">Effective Date: May 4, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At Rental Room Project, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Personal Information:</strong> Name, email address, phone number, etc., when you create an account or list a property.</li>
          <li><strong>Usage Data:</strong> Pages visited, time spent, and other analytics data.</li>
          <li><strong>Location Information:</strong> If you allow location access while browsing the platform.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To operate and improve the website experience</li>
          <li>To contact you with updates or respond to inquiries</li>
          <li>To process listings and enhance service personalization</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Sharing Your Data</h2>
        <p>
          We do not sell or rent your personal information. Your data may be shared with:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Service providers who help us run the website</li>
          <li>Law enforcement, if required by law</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h2>
        <p>
          We use cookies to improve user experience, analyze website traffic, and personalize content. You can manage cookies through your browser settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <p>
          We take appropriate security measures to protect your data, but no system is 100% secure. Use the platform at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
        <p>
          You can request to view, update, or delete your personal data by contacting us directly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Children's Privacy</h2>
        <p>
          Our service is not intended for children under the age of 13. We do not knowingly collect personal data from children.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. The latest version will always be available on our website. Continued use means acceptance of any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          <strong>Email:</strong> support@rentalroomproject.com <br />
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
