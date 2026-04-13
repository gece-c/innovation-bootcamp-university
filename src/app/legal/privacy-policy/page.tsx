export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-8">
      <h1 className="page-title">Privacy Policy</h1>
      <p className="text-sm text-[var(--text-muted)]">Last updated: March 24, 2024</p>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Introduction</h2>
        <p className="text-[var(--text-muted)]">
          Innovation Bootcamp University (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how we collect, use,
          disclose, and safeguard your information when you visit our website, use our platform,
          or participate in our programs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          Information We Collect
        </h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Personal Information</h3>
          <p className="text-[var(--text-muted)]">
            We may collect the following types of personal information:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>Name and contact information</li>
            <li>Educational and professional background</li>
            <li>Payment information</li>
            <li>Course progress and performance data</li>
            <li>Communication preferences</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[var(--text-strong)]">Usage Data</h3>
          <p className="text-[var(--text-muted)]">
            We automatically collect certain information when you visit our website:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
            <li>IP address and device information</li>
            <li>Browser type and settings</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring websites</li>
          </ul>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          How We Use Your Information
        </h2>
        <p className="text-[var(--text-muted)]">
          We use the collected information for the following purposes:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Provide and improve our educational services</li>
          <li>Process payments and maintain accounts</li>
          <li>Send important updates and communications</li>
          <li>Personalize your learning experience</li>
          <li>Analyze and improve our platform</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Information Sharing</h2>
        <p className="text-[var(--text-muted)]">We may share your information with:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Service providers who assist in operating our platform</li>
          <li>Authorized internal program teams (when needed to support your enrollment and learning)</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Data Security</h2>
        <p className="text-[var(--text-muted)]">
          We implement appropriate technical and organizational measures to protect your personal
          information. However, no method of transmission over the internet is 100% secure, and we
          cannot guarantee absolute security.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Your Rights</h2>
        <p className="text-[var(--text-muted)]">You have the right to:</p>
        <ul className="list-disc space-y-2 pl-6 text-[var(--text-muted)]">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Withdraw consent</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Cookies</h2>
        <p className="text-[var(--text-muted)]">
          We use cookies and similar tracking technologies to enhance your experience. You can
          control cookies through your browser settings.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Children&apos;s Privacy</h2>
        <p className="text-[var(--text-muted)]">
          Our services are not intended for children under 13. We do not knowingly collect
          personal information from children under 13.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">
          Changes to This Policy
        </h2>
        <p className="text-[var(--text-muted)]">
          We may update this Privacy Policy from time to time. We will notify you of any changes
          by posting the new policy on this page and updating the &quot;Last updated&quot; date.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-[var(--text-strong)]">Contact Us</h2>
        <p className="text-[var(--text-muted)]">
          If you have questions about this Privacy Policy, please contact us at
          {" "}
          <a
            href="mailto:privacy@innovationbootcamp.edu"
            className="text-[var(--brand-primary)] underline decoration-[var(--brand-primary)]/50 underline-offset-2 hover:decoration-[var(--brand-primary)]"
          >
            privacy@innovationbootcamp.edu
          </a>
          .
        </p>
      </section>
    </div>
  );
}
