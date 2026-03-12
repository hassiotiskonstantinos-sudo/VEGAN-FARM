export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-400 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8">
          {[
            {
              title: "1. Acceptance of Terms",
              content: "By accessing and using the VeganFarm NGO website, you accept and agree to be bound by these Terms of Use."
            },
            {
              title: "2. Donations",
              content: "All donations made through this website are voluntary and non-refundable unless required by law. VeganFarm NGO is a registered 501(c)(3) organization, and donations may be tax-deductible. Consult your tax advisor."
            },
            {
              title: "3. Use of Website",
              content: "You agree to use this website only for lawful purposes. You must not misuse our website by introducing viruses or attempting to gain unauthorized access to our systems."
            },
            {
              title: "4. Intellectual Property",
              content: "All content on this website, including text, images, and logos, is the property of VeganFarm NGO and protected by copyright laws."
            },
            {
              title: "5. Disclaimer",
              content: "This website is provided 'as is'. VeganFarm NGO makes no warranties about the accuracy or reliability of information on this site."
            },
            {
              title: "6. Changes to Terms",
              content: "We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the revised terms."
            },
            {
              title: "7. Contact",
              content: "For questions about these terms, contact us at legal@veganfarm.org."
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
