import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicy() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-4">
              Vortexx Tire Company uses cookies to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Understand how you use our website</li>
              <li>Remember your preferences and settings</li>
              <li>Improve your browsing experience</li>
              <li>Analyze website traffic and performance</li>
              <li>Provide relevant content and advertisements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Essential Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Performance Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve how our website works.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Functional Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Targeting/Advertising Cookies</h3>
            <p className="text-gray-700 mb-4">
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="text-gray-700 mb-4">
              In addition to our own cookies, we may use third-party cookies to report usage statistics and provide enhanced functionality. These third parties include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Advertising networks</li>
              <li>Social media platforms</li>
              <li>Content delivery networks</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. How to Control Cookies</h2>
            <p className="text-gray-700 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Browser Controls</h3>
            <p className="text-gray-700 mb-4">
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Opt-Out Links</h3>
            <p className="text-gray-700 mb-4">
              To opt-out of third-party advertising cookies, you can visit:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Network Advertising Initiative: <a href="http://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-[#188296] hover:underline">www.networkadvertising.org/choices/</a></li>
              <li>Digital Advertising Alliance: <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-[#188296] hover:underline">www.aboutads.info/choices/</a></li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookie Duration</h2>
            <p className="text-gray-700 mb-4">
              We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device for a set period or until you delete them).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Do Not Track Signals</h2>
            <p className="text-gray-700 mb-4">
              Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser &quot;Do Not Track&quot; signals.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Updates to This Cookie Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. More Information</h2>
            <p className="text-gray-700 mb-4">
              For more information about our privacy practices, please see our Privacy Policy. If you have questions about our use of cookies, please contact us:
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
