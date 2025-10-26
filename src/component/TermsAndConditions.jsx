import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-gray-600 mb-6">Effective Date: May 4, 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using Rental Room Project, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use this platform. By accessing the website, you confirm that you meet this requirement.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Services Provided</h2>
        <p>
          Rental Room Project offers a searchable platform for 1BHK, 2BHK, and 3BHK rental listings by city and room type. We do not own or manage any properties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Post accurate and legal rental information</li>
          <li>Do not share misleading or fraudulent content</li>
          <li>Respect other users and avoid harassment or spam</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Payment and Listings</h2>
        <p>
          Basic listing services are free (if applicable). Premium services, if offered, will require payment. Rental Room Project does not handle or guarantee rent payments between users.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Listing Accuracy and Verification</h2>
        <p>
          Users are responsible for verifying property details. We do not guarantee the accuracy of listings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Account Suspension or Termination</h2>
        <p>
          We reserve the right to suspend or remove accounts that violate our terms or engage in fraudulent activity.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
        <p>
          We are not liable for disputes, losses, or issues arising from transactions between users of the platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Privacy Policy</h2>
        <p>
          Please review our Privacy Policy to understand how we collect and use personal data.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
        <p>
          These terms may be updated at any time. Continued use implies acceptance of updated terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
        <p>
          <strong>Email:</strong> support@rentalroomproject.com <br />
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
