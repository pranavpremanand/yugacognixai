import img from "../../assets/services-details/erp.webp";
import { Link } from "react-router-dom";

const ERPDevelopment = () => {
  return (
    <>
      <img
        src={img}
        loading="lazy"
        className="h-[25rem] w-full object-cover rounded-3xl object-center"
        alt="Data Engineering"
      />
      <section className="py-[5rem]">
        <div className="wrapper">
          <div className="space-y-6">
            <h1 className="heading text-center">
              ERP Software Development Services
            </h1>
            <p className="description text-center">
              YugaCognix AI provides end-to-end ERP development services to help
              companies of all sizes improve operational efficiency, enhance
              business process visibility, and facilitate data-driven
              decision-making across different departments with a tailored ERP
              solution built from the ground up.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-medium mb-4">About YugaCognix AI</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>10+ years in ERP services</li>
                <li>
                  50+ completed projects of different scales across various
                  industries, including retail, ecommerce, healthcare,
                  manufacturing, automotive, and insurance
                </li>
              </ul>
            </div>

            <div className="py-6">
              <h2 className="text-2xl font-medium mb-4">
                We provide custom ERP software development services for various
                industries:
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Manufacturing</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Retail and Ecommerce</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">BFSI</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Construction</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Professional Services</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">
                    Information Technology
                  </h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Healthcare</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Pharmaceuticals</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Logistics</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Oil and Gas</h3>
                </div>
                <div className="bg-primary/5 p-4 rounded-lg">
                  <h3 className="text-lg font-medium">Education</h3>
                </div>
              </div>
            </div>

            <div className="py-6">
              <h2 className="text-2xl font-medium mb-6 text-center">
                Custom vs. Off-the-Shelf ERP: Detailed Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 border-b text-left">
                        TCO components
                      </th>
                      <th className="py-3 px-4 border-b text-left">
                        Custom ERP solutions
                      </th>
                      <th className="py-3 px-4 border-b text-left">
                        Ready-made ERPs
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 border-b">TCO components</td>
                      <td className="py-3 px-4 border-b">
                        Upfront investments + the cost of after-launch support
                        and the evolution of the ERP. Lower TCO and higher ROI
                        in the long run, compared to ready-made ERPs.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Initial setup costs + customization and integration
                        costs + subscription or licensing fees that scale as the
                        number of ERP users grows.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Functionality</td>
                      <td className="py-3 px-4 border-b">
                        Defined by customers and fully tailored to their needs
                        and specific processes. The ability to use advanced
                        techs (AI/ML, IoT, blockchain, etc.) for maximized
                        business efficiency.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Defined by an ERP product vendor.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">
                        Additional functionality
                      </td>
                      <td className="py-3 px-4 border-b">
                        Non-restricted and can be introduced on demand as the
                        customer's business scales or transforms.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Restricted to third-party plugins and add-ons.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Customization</td>
                      <td className="py-3 px-4 border-b">
                        Unlimited capabilities.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Limited capabilities, may require substantial
                        investments.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Integration</td>
                      <td className="py-3 px-4 border-b">
                        Seamless connection to all required systems, including
                        legacy software.
                      </td>
                      <td className="py-3 px-4 border-b">
                        API-enabled integration with popular software products.
                        Integration with custom and legacy systems may be
                        complex or impossible.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Learning curve</td>
                      <td className="py-3 px-4 border-b">
                        Short due to convenient UX and intuitive UI tailored to
                        various user roles.
                      </td>
                      <td className="py-3 px-4 border-b">
                        May be lengthy due to complicated, standardized UX and
                        UI.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Scalability</td>
                      <td className="py-3 px-4 border-b">Non-restricted.</td>
                      <td className="py-3 px-4 border-b">
                        Restricted to the vendor's platform capabilities.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Security</td>
                      <td className="py-3 px-4 border-b">
                        Minimized risks due to custom code design and the
                        ability to add powerful security features.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Fully depends on the vendor's security measures and
                        cannot be controlled by the customer.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">Legal compliance</td>
                      <td className="py-3 px-4 border-b">
                        Compliance with all required regulations (global,
                        regional, and industry-specific).
                      </td>
                      <td className="py-3 px-4 border-b">
                        Typically limited to compliance with global data
                        protection standards.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 border-b">
                        Maintenance and support
                      </td>
                      <td className="py-3 px-4 border-b">
                        Performed by an in-house team or an outsourced vendor,
                        the customer decides on a preferred option.
                      </td>
                      <td className="py-3 px-4 border-b">
                        Provided by an ERP product provider.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="py-6 bg-primary/10 p-6 rounded-lg">
              <h2 className="text-2xl font-medium mb-4 text-center">
                Get ERP That Fits Your Specific Workflows
              </h2>
              <p className="mb-6">
                Delegate ERP engineering to YugaCognix AI and get a flexible
                bespoke system that addresses all your unique business needs.
                Custom ERP implementation brings the following benefits:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    +20–30% business productivity
                  </h3>
                  <p>via enhanced collaboration and tailored functionality</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    -10% labor costs
                  </h3>
                  <p>due to enterprise process automation</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    90%+ user satisfaction
                  </h3>
                  <p>due to streamlined workflows</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <Link to="/contact-us" className="primary-btn">
                Contact Us for ERP Development
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPDevelopment;
