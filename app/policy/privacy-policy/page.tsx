import React from "react";

const Page = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          Clear Practice Billing (“we,” “us,” “our”) is committed to protecting your privacy.
          This Privacy Policy explains what personal information we collect, how we use it,
          and how we protect it.
        </p>

        {/* Section */}
        <Section title="Disclosure for Marketing & Lead Generation">
          <p>
            We do not sell, share, rent, or disclose any consumer personal information—including
            phone numbers—to third parties or affiliates for marketing or lead generation purposes.
          </p>
          <p className="mt-2">
            We only use personal information to contact you about your inquiry and to provide
            the services you request.
          </p>
        </Section>

        <Section title="Who We Are">
          <a
            href="https://globaltechbilling.com"
            className="text-blue-600 font-medium underline"
          >
            https://globaltechbilling.com
          </a>
        </Section>

        <Section title="Information We Collect">
          <SubTitle text="1. Information You Provide Through Lead Forms" />
          <List
            items={[
              "Name",
              "Email address",
              "Phone number",
              "Practice or company name",
              "Service interests",
              "Any additional details you provide",
            ]}
          />

          <SubTitle text="2. Automatically Collected Information" />
          <List
            items={[
              "IP address",
              "Browser type",
              "Visit timestamps",
              "Device information",
            ]}
          />

          <SubTitle text="3. Comments" />
          <p>We collect comment form data and IP for spam detection.</p>

          <SubTitle text="4. Media Uploads" />
          <p>Avoid uploading images with location data (EXIF GPS).</p>
        </Section>

        <Divider />

        <Section title="How We Use Your Information">
          <List
            items={[
              "Responding to your inquiry",
              "Providing free quotes",
              "Understanding your needs",
              "Delivering requested services",
              "Direct communication",
              "Internal team coordination",
            ]}
          />
          <p className="mt-4 font-semibold text-red-500">
            We do not use your personal information for unsolicited marketing.
          </p>
        </Section>

        <Divider />

        <Section title="Data Sharing & Third-Party Access">
          <p className="font-semibold text-gray-900">
            We do NOT sell or share your personal information for marketing.
          </p>

          <SubTitle text="Permitted Sharing" />
          <List
            items={[
              "Internal teams (billing, credentialing, sales)",
              "Trusted third-party providers (CRM, email, hosting, scheduling)",
              "All providers follow strict confidentiality rules",
            ]}
          />
        </Section>

        <Divider />

        <Section title="Cookies">
          <List
            items={[
              "Login sessions",
              "Display preferences",
              "Comment convenience",
              "Security and spam prevention",
            ]}
          />
        </Section>

        <Divider />

        <Section title="Embedded Content">
          <p>
            Embedded content behaves as if you visited external websites and may
            collect data according to their policies.
          </p>
        </Section>

        <Divider />

        <Section title="Data Retention">
          <List
            items={[
              "Comments retained indefinitely",
              "User profile data stored",
              "Users can edit/delete data anytime",
            ]}
          />
        </Section>

        <Divider />

        <Section title="Your Rights">
          <List
            items={[
              "Request your data",
              "Request correction",
              "Request deletion",
              "Opt out of communication",
            ]}
          />
        </Section>

        <Divider />

        <Section title="Contact Us">
          <p className="mb-2">For questions regarding this policy:</p>
          <p className="text-blue-600 font-medium">
            info@globaltechbilling.com
          </p>
          <a
            href="https://globaltechbilling.com"
            className="text-blue-600 underline"
          >
            https://globaltechbilling.com
          </a>
        </Section>

      </div>
    </div>
  );
};

export default Page;

/* Reusable Components */

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 border-l-4 border-blue-600 pl-3">
      {title}
    </h2>
    <div className="text-gray-700 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

const SubTitle = ({ text }: { text: string }) => (
  <h3 className="font-semibold text-gray-800 mt-4 mb-2">{text}</h3>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc pl-6 space-y-1">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const Divider = () => (
  <hr className="my-8 border-gray-200" />
);