import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#188296] hover:text-[#156b7a] mb-8 font-semibold"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              Vortexx Tire Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website vortexxtire.com.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the website includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and company information you provide when contacting us or applying to become a dealer.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process dealer applications</li>
              <li>Improve our website and services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Disclosure of Your Information</h2>
            <p className="text-gray-700 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Our parent company, CFI Solutions Group, and affiliated companies</li>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement or regulatory agencies when required by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your information</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to track activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. See our Cookie Policy for more details.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-gray-700 mb-4 space-y-2">
              <li><strong>Phone:</strong> 888-808-2398</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
