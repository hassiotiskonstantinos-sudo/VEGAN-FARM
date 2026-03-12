export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          {[
            {
              title: "1. Information We Collect",
              content: "We collect information you provide directly, such as your name, email address, and payment information when you make a donation. We also collect usage data through cookies and analytics tools to improve our website."
            },
            {
              title: "2. How We Use Your Information",
              content: "We use your information to process donations, send receipts, provide updates on our programs, and improve our services. We never sell your personal data to third parties."
            },
            {
              title: "3. Payment Security",
              content: "All payment processing is handled by Stripe, a PCI-DSS compliant payment processor. We do not store your credit card information on our servers."
            },
            {
              title: "4. Data Sharing",
              content: "We may share data with service providers (e.g., email providers, analytics) who help us operate our website and programs. All providers are bound by confidentiality agreements."
            },
            {
              title: "5. Your Rights",
              content: "You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@veganfarm.org."
            },
            {
              title: "6. Contact Us",
              content: "For privacy concerns, email us at privacy@veganfarm.org."
            }
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
