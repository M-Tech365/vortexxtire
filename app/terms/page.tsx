import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Vortexx Tire Company website (vortexxtire.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily access the materials on Vortexx Tire Company&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Product Information</h2>
            <p className="text-gray-700 mb-4">
              We strive to provide accurate product information on our website. However, we do not warrant that product descriptions, specifications, pricing, or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Dealer Applications</h2>
            <p className="text-gray-700 mb-4">
              Dealer applications submitted through our website are subject to approval. We reserve the right to accept or reject any dealer application at our sole discretion. Approval as a dealer does not create an exclusive relationship or territory rights unless expressly stated in a separate written agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Product Warranties</h2>
            <p className="text-gray-700 mb-4">
              Our products are covered by a 5-year warranty as described in our warranty documentation. Specific warranty terms and conditions are available upon request and may vary by product. The warranty does not cover damage resulting from improper installation, misuse, or normal wear and tear.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Vortexx Tire Company or its parent company, CFI Solutions Group, be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we have been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Accuracy of Materials</h2>
            <p className="text-gray-700 mb-4">
              The materials appearing on Vortexx Tire Company&apos;s website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Links to Third-Party Sites</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party websites, including our parent company CFI Solutions Group and our dealer portal. We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vortexx Tire Company. Use of any such linked website is at the user&apos;s own risk.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Vortexx Tire Company or its parent company CFI Solutions Group and is protected by United States and international copyright laws. The Vortexx name and logo are trademarks of AXON Tire and Wheel.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of the State of Iowa, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              Vortexx Tire Company may revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
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
