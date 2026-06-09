import LegalLayout, { LegalSection, LegalList } from "../components/LegalLayout";
import { COMPANY } from "../data/site";

export default function Terms() {
  return (
    <LegalLayout title="Terms & Conditions" italic="of service." effectiveDate="June 3, 2026">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          Welcome to In Time Property Care (&ldquo;Company,&rdquo; &ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using our
          website (www.intimepropertycare.com) and our property preservation
          services, you agree to be bound by these Terms and Conditions
          (&ldquo;Terms&rdquo;). If you do not agree to all of these Terms, you
          are prohibited from using this website and our services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Services Description">
        <p>
          In Time Property Care provides property preservation, REO
          maintenance, securing, and related field services. The information
          provided on this website is for general informational purposes.
          Submitting an inquiry or a vendor application through our website
          does not create a binding contract for services or employment until a
          formal agreement or work order is explicitly executed between both
          parties.
        </p>
      </LegalSection>

      <LegalSection heading="3. SMS/Text Messaging Terms (Important for Communication)">
        <p>
          By opting in to receive SMS/text messages from In Time Property Care,
          you agree to the following terms regarding our text messaging program:
        </p>
        <LegalList
          items={[
            <><strong className="text-brand-950">Program Description:</strong> We use SMS messaging to send service updates, work order notifications, appointment reminders, and responses to your direct inquiries.</>,
            <><strong className="text-brand-950">Message Frequency:</strong> Message frequency varies based on your interactions with us and the status of your active work orders or inquiries.</>,
            <><strong className="text-brand-950">Pricing:</strong> Message and data rates may apply. Please check with your mobile carrier for details regarding your specific plan.</>,
            <><strong className="text-brand-950">Opt-Out:</strong> You may cancel the SMS service at any time. Just text &ldquo;STOP&rdquo; to the shortcode or phone number we message you from. After you send the SMS message &ldquo;STOP&rdquo; to us, we will send you an SMS message to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If you want to join again, just sign up as you did the first time and we will start sending SMS messages to you again.</>,
            <><strong className="text-brand-950">Help:</strong> If you are experiencing issues with the messaging program you can reply with the keyword &ldquo;HELP&rdquo; for more assistance, or you can get help directly at {COMPANY.email}.</>,
            <><strong className="text-brand-950">Carrier Liability:</strong> Carriers are not liable for delayed or undelivered messages.</>,
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. User Conduct and Vendor Applications">
        <p>
          If you use our website to apply as a vendor, contractor, or field
          crew member, you agree to provide accurate, current, and complete
          information. You acknowledge that any false or misleading information
          may result in the immediate rejection of your application or
          termination of any subsequent agreements. Vendors are responsible for
          maintaining their own valid licenses and insurance as required by
          local laws.
        </p>
      </LegalSection>

      <LegalSection heading="5. Intellectual Property Rights">
        <p>
          All content, logos, text, graphics, images, and software on this
          website are the property of In Time Property Care or its content
          creators and are protected by applicable copyright and trademark
          laws. You may not copy, reproduce, distribute, or create derivative
          works from this content without our express written permission.
        </p>
      </LegalSection>

      <LegalSection heading="6. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, In Time Property Care shall
          not be liable for any indirect, incidental, special, consequential,
          or punitive damages, including without limitation, loss of profits,
          data, use, goodwill, or other intangible losses, resulting from (i)
          your access to or use of or inability to access or use the website;
          (ii) any conduct or content of any third party on the website; and
          (iii) unauthorized access, use, or alteration of your transmissions
          or content.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Links">
        <p>
          Our website may contain links to third-party websites or services
          that are not owned or controlled by In Time Property Care. We have no
          control over, and assume no responsibility for, the content, privacy
          policies, or practices of any third-party websites.
        </p>
      </LegalSection>

      <LegalSection heading="8. Governing Law">
        <p>
          These Terms shall be governed and construed in accordance with the
          laws of the State of Ohio without regard to its conflict of law
          provisions. Any legal action or proceeding related to this website
          shall be brought exclusively in a state or federal court of competent
          jurisdiction sitting in Ohio.
        </p>
      </LegalSection>

      <LegalSection heading="9. Changes to Terms">
        <p>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. When we do, we will revise the &ldquo;Effective
          Date&rdquo; at the top of this page. Your continued use of the website
          following the posting of any changes constitutes acceptance of those
          changes.
        </p>
      </LegalSection>

      <LegalSection heading="10. Contact Us">
        <p>If you have any questions about these Terms, please contact us at:</p>
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
