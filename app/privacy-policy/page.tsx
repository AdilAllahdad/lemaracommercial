'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] w-full flex items-center justify-center">
        <Image
          src="/images/service2.jpg"
          alt="Privacy Policy - Lemara Commercial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Last updated: January 10, 2020
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-gray-600 mb-12">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpretation and Definitions</h2>
                <div className="border-l-4 border-red-900 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interpretation</h3>
                  <p className="text-gray-600 mb-6">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Definitions</h2>
                <p className="text-gray-600">For the purposes of this Privacy Policy:</p>
                <div className="grid gap-6 lg:grid-cols-2">
                  { [
                    {
                      term: 'You',
                      definition: 'The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.'
                    },
                    {
                      term: 'Company',
                      definition: '(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Lemara Commercial. Inc, 770 L Street, Suite 950, Sacramento, CA 95814. For the purpose of the GDPR, the Company is the Data Controller.'
                    },
                    {
                      term: 'Affiliate',
                      definition: 'An entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'
                    },
                    {
                      term: 'Account',
                      definition: 'A unique account created for You to access our Service or parts of our Service.'
                    },
                    {
                      term: 'Website and Service',
                      definition: 'Refers to Lemara Commercial, accessible from www.lemaracommercial.com. The Service refers to the Website.'
                    },
                    {
                      term: 'Country',
                      definition: 'Refers to: California, United States'
                    },
                    {
                      term: 'Service Provider',
                      definition: 'Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.'
                    },
                    {
                      term: 'Third-party Social Media Service',
                      definition: 'Any website or any social network website through which a User can log in or create an account to use the Service.'
                    },
                    {
                      term: 'Facebook Fan Page',
                      definition: 'A public profile named Lemara Commercial specifically created by the Company on the Facebook social network, accessible from https://web.facebook.com/lemaracommercial/'
                    },
                    {
                      term: 'Personal Data',
                      definition: 'Any information that relates to an identified or identifiable individual. For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity. For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.'
                    },
                    {
                      term: 'Cookies',
                      definition: 'Small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.'
                    },
                    {
                      term: 'Device',
                      definition: 'Any device that can access the Service such as a computer, a cellphone or a digital tablet.'
                    },
                    {
                      term: 'Usage Data',
                      definition: 'Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).'
                    },
                    {
                      term: 'Data Controller',
                      definition: 'For the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.'
                    },
                    {
                      term: 'Do Not Track (DNT)',
                      definition: 'A concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.'
                    },
                    {
                      term: 'Business',
                      definition: 'For the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers\' personal information and determines the purposes and means of the processing of Consumers\' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers\' personal information, that does business in the State of California.'
                    },
                    {
                      term: 'Consumer',
                      definition: 'For the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.'
                    },
                    {
                      term: 'Sale',
                      definition: 'For the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer\'s Personal information to another business or a third party for monetary or other valuable consideration.'
                    }
                  ].map((item: { term: string; definition: string }, index: number) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.term}</h3>
                      <p className="text-gray-600">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <h2 className="text-2xl font-bold text-gray-900">Collecting and Using Your Personal Data</h2>
                <div className="space-y-8">
                  {/* Types of Data Collected */}
                  <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Types of Data Collected</h3>
                    
                    {/* Personal Data */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-medium text-gray-900">Personal Data</h4>
                      <p className="text-gray-600">While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                      <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Usage Data</li>
                      </ul>
                    </div>

                    {/* Usage Data */}
                    <div className="space-y-4 mb-8">
                      <h4 className="text-lg font-medium text-gray-900">Usage Data</h4>
                      <p className="text-gray-600">Usage Data is collected automatically when using the Service.</p>
                      <p className="text-gray-600">Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                      <p className="text-gray-600">When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
                      <p className="text-gray-600">We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
                    </div>

                    {/* Tracking Technologies and Cookies */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-medium text-gray-900">Tracking Technologies and Cookies</h4>
                      <p className="text-gray-600">We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
                      <p className="text-gray-600">You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.</p>
                      <p className="text-gray-600">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.</p>
                      
                      <div className="space-y-6 mt-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">Necessary / Essential Cookies</h5>
                          <p className="text-sm text-gray-600">Type: Session Cookies</p>
                          <p className="text-sm text-gray-600">Administered by: Us</p>
                          <p className="text-sm text-gray-600">Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">Cookies Policy / Notice Acceptance Cookies</h5>
                          <p className="text-sm text-gray-600">Type: Persistent Cookies</p>
                          <p className="text-sm text-gray-600">Administered by: Us</p>
                          <p className="text-sm text-gray-600">Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">Functionality Cookies</h5>
                          <p className="text-sm text-gray-600">Type: Persistent Cookies</p>
                          <p className="text-sm text-gray-600">Administered by: Us</p>
                          <p className="text-sm text-gray-600">Purpose: These Cookies allow us to remember choices You make when You use the Website.</p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-medium text-gray-900 mb-2">Tracking and Performance Cookies</h5>
                          <p className="text-sm text-gray-600">Type: Persistent Cookies</p>
                          <p className="text-sm text-gray-600">Administered by: Third-Parties</p>
                          <p className="text-sm text-gray-600">Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Use of Personal Data */}
                  <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Use of Your Personal Data</h3>
                    <p className="text-gray-600 mb-4">The Company may use Personal Data for the following purposes:</p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-3">
                      <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                      <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                      <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract.</li>
                      <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                      <li>To provide You with news, special offers and general information about other goods, services and events.</li>
                      <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                    </ul>
                  </div>

                  {/* Data Sharing */}
                  <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Sharing Your Personal Data</h3>
                    <p className="text-gray-600 mb-4">We may share your personal information in the following situations:</p>
                    <ul className="list-disc list-inside text-gray-600 ml-4 space-y-3">
                      <li>With Service Providers</li>
                      <li>For Business transfers</li>
                      <li>With Affiliates</li>
                      <li>With Business partners</li>
                      <li>With other users</li>
                    </ul>
                  </div>

                  {/* Security Section */}
                  <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Security of Your Personal Data</h3>
                    <p className="text-gray-600">
                      The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-16 bg-red-900 text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="mb-6">
                  If you have any questions about this Privacy Policy, You can contact us:
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="font-semibold">Email:</span>{' '}
                    <a href="mailto:business@lemaracommercial.com" className="underline hover:text-red-100">
                      business@lemaracommercial.com
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Website:</span>{' '}
                    <Link href="/contact" className="underline hover:text-red-100">
                      www.lemaracommercial.com/contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
