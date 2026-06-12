import LegalLayout, { LegalSection, LegalList } from "../components/LegalLayout";
import { COMPANY } from "../data/site";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" italic="& your data." effectiveDate="June 3, 2026">
      <LegalSection heading="1. Introduction">
        <p>
          Welcome to In Time Property Care (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;us&rdquo;). We are committed to protecting your privacy and
          ensuring that your personal information is handled in a safe and
          responsible manner. This Privacy Policy outlines how we collect, use,
          protect, and disclose your information when you visit our website
          (www.intimepropertycare.com) and use our property preservation and
          maintenance services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>
          We may collect the following types of information when you interact
          with our website, request services, or apply to join our vendor
          network:
        </p>
        <LegalList
          items={[
            <><strong className="text-brand-950">Personal Information:</strong> Name, email address, phone number, physical address, and company details (for vendors/contractors).</>,
            <><strong className="text-brand-950">Service Information:</strong> Property addresses, work order details, and documentation related to the services requested or performed.</>,
            <><strong className="text-brand-950">Usage Data:</strong> IP addresses, browser types, and standard website analytics to help us improve our website experience.</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use the collected information for the following business purposes:</p>
        <LegalList
          items={[
            "To provide, manage, and coordinate property preservation services.",
            "To process vendor and contractor applications.",
            "To communicate with you regarding services, work orders, appointments, and inquiries.",
            "To send important administrative and operational updates.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. SMS/Text Messaging Policy (Important)">
        <p>
          By providing your phone number on our website forms (e.g., Contact
          Us, Vendor Application), you consent to receive SMS/text messages
          from In Time Property Care regarding your inquiries, service updates,
          and operational communications.
        </p>
        <LegalList
          items={[
            <><strong className="text-brand-950">Opt-In:</strong> You must explicitly opt-in to receive these messages by checking the designated consent box on our web forms.</>,
            <><strong className="text-brand-950">Opt-Out:</strong> You can opt out of receiving text messages at any time by replying &ldquo;STOP&rdquo; to any message you receive from us.</>,
            <><strong className="text-brand-950">Message and Data Rates:</strong> Standard message and data rates may apply depending on your mobile carrier plan.</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Information Sharing and Disclosure (Telecom Compliance)">
        <p>
          We take your privacy seriously. In Time Property Care does not sell,
          rent, lease, trade, or share your personal information, including
          phone numbers and SMS consent, with any third parties, affiliates, or
          partners for their marketing or promotional purposes.
        </p>
        <p>
          We will only disclose your personal information under the following
          limited circumstances:
        </p>
        <LegalList
          items={[
            <><strong className="text-brand-950">Service Providers:</strong> To authorized subcontractors or field crews explicitly for the purpose of completing a requested property preservation work order on our behalf.</>,
            <><strong className="text-brand-950">Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Data Security">
        <p>
          We implement industry-standard physical, technical, and administrative
          security measures to protect your personal information from
          unauthorized access, alteration, disclosure, or destruction. However,
          please be aware that no method of transmission over the internet or
          electronic storage is 100% secure.
        </p>
      </LegalSection>

      <LegalSection heading="7. Cookies and Tracking Technologies">
        <p>
          Our website may use standard cookies to enhance user experience,
          analyze site traffic, and understand where our visitors are coming
          from. You can choose to disable cookies through your browser settings,
          though some features of our website may not function properly as a
          result.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Privacy Policy">
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be posted on this page with an updated
          &ldquo;Effective Date&rdquo; at the top. We encourage you to review
          this policy periodically.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or how your data is handled, please contact us at:
        </p>
        <ul className="space-y-1 text-brand-900/85">
          <li><strong className="text-brand-950">In Time Property Care</strong></li>
          <li>Website: www.intimepropertycare.com</li>
          <li>
            Email: <a href={COMPANY.emailHref} className="text-brand-700 underline-offset-4 hover:underline">{COMPANY.email}</a>
          </li>
          <li>
            Phone: <a href={COMPANY.phoneHref} className="text-brand-700 underline-offset-4 hover:underline">{COMPANY.phoneDisplay}</a>
          </li>
          <li>Address: {COMPANY.address}</li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
