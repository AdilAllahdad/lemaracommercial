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
              <div className="space-y-8 text-gray-600">
                <p>
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>              {/* Interpretation and Definitions Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Interpretation and Definitions</h2>
                
                <div className="border-l-4 border-red-900 pl-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Interpretation</h3>
                  <p className="text-gray-600 mb-3">
                    The words of which the initial letter is capitalized have meanings defined under the following conditions.
                  </p>
                  <p className="text-gray-600">
                    The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Definitions</h3>
                  <p className="text-gray-600 mb-6">
                    For the purposes of this Privacy Policy:
                  </p>
                  <ul className="space-y-4">                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• You</span>
                      <span className="text-gray-600 ml-4">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                      <span className="text-gray-600 ml-4 text-sm italic mt-2">Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.</span>
                    </li>                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Company</span>
                      <span className="text-gray-600 ml-4">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Lemara Commercial. Inc, 770 L Street, Suite 950, Sacramento, CA 95814.</span>
                      <span className="text-gray-600 ml-4 text-sm italic mt-2">For the purpose of the GDPR, the Company is the Data Controller.</span>
                    </li>                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Affiliate</span>
                      <span className="text-gray-600 ml-4">means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Account</span>
                      <span className="text-gray-600 ml-4">means a unique account created for You to access our Service or parts of our Service.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Website</span>
                      <span className="text-gray-600 ml-4">refers to Lemara Commercial, accessible from <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors">www.lemaracommercial.com</Link></span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Service</span>
                      <span className="text-gray-600 ml-4">refers to the Website.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Country</span>
                      <span className="text-gray-600 ml-4">refers to: California, United States</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Service Provider</span>
                      <span className="text-gray-600 ml-4">means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
                      <span className="text-gray-600 ml-4 text-sm italic mt-2">For the purpose of the GDPR, Service Providers are considered Data Processors.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Third-party Social Media Service</span>
                      <span className="text-gray-600 ml-4">refers to any website or any social network website through which a User can log in or create an account to use the Service.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Facebook Fan Page</span>
                      <span className="text-gray-600 ml-4">is a public profile named Lemara Commercial specifically created by the Company on the Facebook social network, accessible from <a href="https://web.facebook.com/lemaracommercial/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://web.facebook.com/lemaracommercial/</a></span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Personal Data</span>
                      <span className="text-gray-600 ml-4">is any information that relates to an identified or identifiable individual.</span>
                      <span className="text-gray-600 ml-4 text-sm italic mt-2">For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.</span>
                      <span className="text-gray-600 ml-4 text-sm italic mt-2">For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Cookies</span>
                      <span className="text-gray-600 ml-4">are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Device</span>
                      <span className="text-gray-600 ml-4">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Usage Data</span>
                      <span className="text-gray-600 ml-4">refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Data Controller</span>
                      <span className="text-gray-600 ml-4">for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Do Not Track</span>
                      <span className="text-gray-600 ml-4">(DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.</span>
                    </li>                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Business</span>
                      <span className="text-gray-600 ml-4">for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects consumers' personal information and determines the purposes and means of the processing of consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Consumer</span>
                      <span className="text-gray-600 ml-4">for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Sale</span>
                      <span className="text-gray-600 ml-4">for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's Personal information to another business or a third party for monetary or other valuable consideration.</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Collecting and Using Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Collecting and Using Your Personal Data</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Data Collected</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Personal Data</h4>
                        <p className="text-gray-600 mb-4">
                          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc pl-8 space-y-2 text-gray-600">
                          <li>Email address</li>
                          <li>First name and last name</li>
                          <li>Phone number</li>
                          <li>Address, State, Province, ZIP/Postal code, City</li>
                          <li>Usage Data</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Usage Data</h4>
                        <div className="space-y-4 text-gray-600">
                          <p>
                            Usage Data is collected automatically when using the Service.
                          </p>
                          <p>
                            Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                          </p>
                          <p>
                            When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                          </p>
                          <p>
                            We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tracking Technologies and Cookies Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tracking Technologies and Cookies</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                  </p>
                  
                  <p>
                    You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                  </p>
                  
                  <p>
                    Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. Learn more about cookies: <a href="https://www.cookiesandyou.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">Cookies: What Do They Do?</a>
                  </p>
                  
                  <p>
                    We use both session and persistent Cookies for the purposes set out below:
                  </p>
                  
                  <div className="space-y-8 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Necessary / Essential Cookies</h3>
                      <div className="space-y-2 pl-4">
                        <p>Type: Session Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies Policy / Notice Acceptance Cookies</h3>
                      <div className="space-y-2 pl-4">
                        <p>Type: Persistent Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Functionality Cookies</h3>
                      <div className="space-y-2 pl-4">
                        <p>Type: Persistent Cookies</p>
                        <p>Administered by: Us</p>
                        <p>
                          Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Tracking and Performance Cookies</h3>
                      <div className="space-y-2 pl-4">
                        <p>Type: Persistent Cookies</p>
                        <p>Administered by: Third-Parties</p>
                        <p>
                          Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new advertisements, pages, features or new functionality of the Website to see how our users react to them.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-gray-600">
                      For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Use of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of Your Personal Data</h2>
                
                <div className="space-y-8 text-gray-600">
                  <p>The Company may use Personal Data for the following purposes:</p>
                  
                  <ul className="space-y-4 pl-4">
                    <li className="space-y-2">
                      <p className="font-semibold">• To provide and maintain our Service</p>
                      <p className="ml-4">including to monitor the usage of our Service.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• To manage Your Account</p>
                      <p className="ml-4">to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• For the performance of a contract</p>
                      <p className="ml-4">the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• To contact You</p>
                      <p className="ml-4">To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• To provide You</p>
                      <p className="ml-4">with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• To manage Your requests</p>
                      <p className="ml-4">To attend and manage Your requests to Us.</p>
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">We may share your personal information in the following situations:</h3>
                  
                  <ul className="space-y-4 pl-4">
                    <li className="space-y-2">
                      <p className="font-semibold">• With Service Providers:</p>
                      <p className="ml-4">We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to advertise on third party websites to You after You visited our Service, to contact You.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• For Business transfers:</p>
                      <p className="ml-4">We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• With Affiliates:</p>
                      <p className="ml-4">We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• With Business partners:</p>
                      <p className="ml-4">We may share Your information with Our business partners to offer You certain products, services or promotions.</p>
                    </li>
                    
                    <li className="space-y-2">
                      <p className="font-semibold">• With other users:</p>
                      <p className="ml-4">When You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Retention of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Retention of Your Personal Data</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                  </p>
                  
                  <p>
                    The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                  </p>
                </div>
              </div>

              {/* Transfer of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Transfer of Your Personal Data</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                  </p>
                  
                  <p>
                    Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                  </p>
                  
                  <p>
                    The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                  </p>
                </div>
              </div>

              {/* Disclosure of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclosure of Your Personal Data</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Transactions</h3>
                    <p className="text-gray-600">
                      If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Law enforcement</h3>
                    <p className="text-gray-600">
                      Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Other legal requirements</h3>
                    <p className="text-gray-600 mb-4">
                      The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc pl-8 space-y-2 text-gray-600">
                      <li>Comply with a legal obligation</li>
                      <li>Protect and defend the rights or property of the Company</li>
                      <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li>Protect the personal safety of Users of the Service or the public</li>
                      <li>Protect against legal liability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Security of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Security of Your Personal Data</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
                </div>
              </div>
              
              {/* Detailed Information on the Processing of Your Personal Data Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Information on the Processing of Your Personal Data</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Service Providers have access to Your Personal Data only to perform their tasks on Our behalf and are obligated not to disclose or use it for any other purpose.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics</h3>
                      <p className="mb-4">
                        We may use third-party Service providers to monitor and analyze the use of our Service.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h4>
                          <p className="mb-3">
                            Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                          </p>
                          <p className="mb-3">
                            You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity.
                          </p>
                          <p>
                            For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://policies.google.com/privacy</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Firebase</h4>
                          <p className="mb-3">
                            Firebase is an analytics service provided by Google Inc.
                          </p>
                          <p className="mb-3">
                            You may opt-out of certain Firebase features through your mobile device settings, such as your device advertising settings or by following the instructions provided by Google in their Privacy Policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://policies.google.com/privacy</a>
                          </p>
                          <p>
                            We also encourage you to review the Google's policy for safeguarding your data: <a href="https://support.google.com/analytics/answer/6004245" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://support.google.com/analytics/answer/6004245</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Matomo</h4>
                          <p>
                            Matomo is a web analytics service. You can visit their Privacy Policy page here: <a href="https://matomo.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://matomo.org/privacy-policy</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Clicky</h4>
                          <p>
                            Clicky is a web analytics service. You can read the Privacy Policy for Clicky here: <a href="https://clicky.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://clicky.com/terms</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Statcounter</h4>
                          <p>
                            Statcounter is a web traffic analysis tool. You can read the Privacy Policy for Statcounter here: <a href="https://statcounter.com/about/legal/#privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://statcounter.com/about/legal/</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Flurry Analytics</h4>
                          <p className="mb-3">
                            Flurry Analytics service is provided by Yahoo! Inc.
                          </p>
                          <p className="mb-3">
                            You can opt-out from Flurry Analytics service to prevent Flurry Analytics from using and sharing your information by visiting the Flurry's Opt-out page: <a href="https://developer.yahoo.com/flurry/end-user-opt-out/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://developer.yahoo.com/flurry/end-user-opt-out/</a>
                          </p>
                          <p>
                            For more information on the privacy practices and policies of Yahoo!, please visit their Privacy Policy page: <a href="https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://policies.yahoo.com/xa/en/yahoo/privacy/index.htm</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Mixpanel</h4>
                          <p className="mb-3">
                            Mixpanel is provided by Mixpanel Inc.
                          </p>
                          <p className="mb-3">
                            You can prevent Mixpanel from using your information for analytics purposes by opting-out. To opt-out of Mixpanel service, please visit this page: <a href="https://mixpanel.com/optout/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://mixpanel.com/optout/</a>
                          </p>
                          <p>
                            For more information on what type of information Mixpanel collects, please visit the Terms of Use page of Mixpanel: <a href="https://mixpanel.com/terms/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://mixpanel.com/terms/</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Unity Analytics</h4>
                          <p>
                            Unity Analytics is provided by Unity Technologies. For more information on what type of information Unity Analytics collects, please visit their Privacy Policy page: <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://unity3d.com/legal/privacy-policy</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Marketing</h3>
                      <p className="mb-4 text-gray-600">
                        We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
                      </p>
                      <p className="text-gray-600">
                        We may use Email Marketing Service Providers to manage and send emails to You.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Behavioral Remarketing</h3>
                      <p className="mb-6 text-gray-600">
                        The Company uses remarketing services to advertise on third party websites to You after You visited our Service. We and Our third-party vendors use cookies to inform, optimize and serve ads based on Your past visits to our Service.
                      </p>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Bing Ads Remarketing</h4>
                          <p className="mb-3 text-gray-600">
                            Bing Ads remarketing service is provided by Microsoft Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out of Bing Ads interest-based ads by following their instructions: <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a>
                          </p>
                          <p className="text-gray-600">
                            You can learn more about the privacy practices and policies of Microsoft by visiting their Privacy Policy page: <a href="https://privacy.microsoft.com/en-us/PrivacyStatement" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://privacy.microsoft.com/en-us/PrivacyStatement</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Twitter</h4>
                          <p className="mb-3 text-gray-600">
                            Twitter remarketing service is provided by Twitter Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out from Twitter's interest-based ads by following their instructions: <a href="https://support.twitter.com/articles/20170405" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://support.twitter.com/articles/20170405</a>
                          </p>
                          <p className="text-gray-600">
                            You can learn more about the privacy practices and policies of Twitter by visiting their Privacy Policy page: <a href="https://twitter.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://twitter.com/privacy</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Facebook</h4>
                          <p className="mb-3 text-gray-600">
                            Facebook remarketing service is provided by Facebook Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can learn more about interest-based advertising from Facebook by visiting this page: <a href="https://www.facebook.com/help/164968693837950" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.facebook.com/help/164968693837950</a>
                          </p>
                          <p className="mb-3 text-gray-600">
                            To opt-out from Facebook's interest-based ads, follow these instructions from Facebook: <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.facebook.com/help/568137493302217</a>
                          </p>
                          <p className="mb-3 text-gray-600">
                            Facebook adheres to the Self-Regulatory Principles for Online Behavioural Advertising established by the Digital Advertising Alliance. You can also opt-out from Facebook and other participating companies through:
                          </p>
                          <ul className="list-disc pl-8 space-y-2 mb-3 text-gray-600">
                            <li>The Digital Advertising Alliance in the USA <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://www.aboutads.info/choices/</a></li>
                            <li>The Digital Advertising Alliance of Canada in Canada <a href="http://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://youradchoices.ca/</a></li>
                            <li>The European Interactive Digital Advertising Alliance in Europe <a href="http://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://www.youronlinechoices.eu/</a></li>
                          </ul>
                          <p className="text-gray-600">
                            For more information on the privacy practices of Facebook, please visit Facebook's Data Policy: <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.facebook.com/privacy/explanation</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Pinterest</h4>
                          <p className="mb-3 text-gray-600">
                            Pinterest remarketing service is provided by Pinterest Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out from Pinterest's interest-based ads by enabling the "Do Not Track" functionality of your web browser or by following Pinterest instructions: <a href="http://help.pinterest.com/en/articles/personalization-and-data" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://help.pinterest.com/en/articles/personalization-and-data</a>
                          </p>
                          <p className="text-gray-600">
                            You can learn more about the privacy practices and policies of Pinterest by visiting their Privacy Policy page: <a href="https://about.pinterest.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://about.pinterest.com/en/privacy-policy</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">AdRoll</h4>
                          <p className="mb-3 text-gray-600">
                            AdRoll remarketing service is provided by Semantic Sugar, Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out of AdRoll remarketing by visiting this AdRoll Advertising Preferences web page: <a href="http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://info.evidon.com/pub_info/573?v=1&nt=1&nw=false</a>
                          </p>
                          <p className="text-gray-600">
                            For more information on the privacy practices of AdRoll, please visit the AdRoll Privacy Policy web page: <a href="http://www.adroll.com/about/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://www.adroll.com/about/privacy</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Perfect Audience</h4>
                          <p className="mb-3 text-gray-600">
                            Perfect Audience remarketing service is provided by NowSpots Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out of Perfect Audience remarketing by visiting these pages: Platform Opt-out (<a href="http://pixel.prfct.co/coo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://pixel.prfct.co/coo</a>) and Partner Opt-out (<a href="http://ib.adnxs.com/optout" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">http://ib.adnxs.com/optout</a>).
                          </p>
                          <p className="text-gray-600">
                            For more information on the privacy practices of Perfect Audience, please visit the Perfect Audience Privacy Policy & Opt-out web page: <a href="https://www.perfectaudience.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.perfectaudience.com/privacy/</a>
                          </p>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">AppNexus</h4>
                          <p className="mb-3 text-gray-600">
                            AppNexus remarketing service is provided by AppNexus Inc.
                          </p>
                          <p className="mb-3 text-gray-600">
                            You can opt-out of AppNexus remarketing by visiting the Privacy & the AppNexus Platform web page: <a href="https://www.appnexus.com/platform-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.appnexus.com/platform-privacy-policy</a>
                          </p>
                          <p className="text-gray-600">
                            For more information on the privacy practices of AppNexus, please visit the AppNexus Platform Privacy Policy web page: <a href="https://www.appnexus.com/platform-privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.appnexus.com/platform-privacy-policy</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Usage, Performance and Miscellaneous</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    We may use third-party Service Providers to provide better improvement of our Service.
                  </p>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Invisible reCAPTCHA</h3>
                      <p className="mb-3 text-gray-600">
                        We use an invisible captcha service named reCAPTCHA. reCAPTCHA is operated by Google.
                      </p>
                      <p className="mb-3 text-gray-600">
                        The reCAPTCHA service may collect information from You and from Your Device for security purposes.
                      </p>
                      <p className="text-gray-600">
                        The information gathered by reCAPTCHA is held in accordance with the Privacy Policy of Google: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.google.com/intl/en/policies/privacy/</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Mouseflow</h3>
                      <p className="mb-3 text-gray-600">
                        Mouseflow is a session replay and heatmap tool that shows how visitors click, move, scroll, browse, and pay attention on websites. The service is operated by ApS.
                      </p>
                      <p className="mb-3 text-gray-600">
                        Mouseflow service may collect information from Your device.
                      </p>
                      <p className="text-gray-600">
                        The information gathered by Mouseflow is held in accordance with its Privacy Policy: <a href="https://mouseflow.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://mouseflow.com/privacy/</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">FreshDesk</h3>
                      <p className="mb-3 text-gray-600">
                        FreshDesk is a customer support software. The service is operated by Freshworks, Inc.
                      </p>
                      <p className="mb-3 text-gray-600">
                        FreshDesk service may collect information from Your Device.
                      </p>
                      <p className="text-gray-600">
                        The information gathered by FreshDesk is held in accordance with its Privacy Policy: <a href="https://www.freshworks.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.freshworks.com/privacy/</a>
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Google Places</h3>
                      <p className="mb-3 text-gray-600">
                        Google Places is a service that returns information about places using HTTP requests. It is operated by Google.
                      </p>
                      <p className="mb-3 text-gray-600">
                        Google Places service may collect information from You and from Your Device for security purposes.
                      </p>
                      <p className="text-gray-600">
                        The information gathered by Google Places is held in accordance with the Privacy Policy of Google: <a href="https://www.google.com/intl/en/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">https://www.google.com/intl/en/policies/privacy/</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* GDPR Privacy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">GDPR Privacy</h2>
                
                {/* Legal Basis Subsection */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Basis for Processing Personal Data under GDPR</h3>
                    <p className="mb-6 text-gray-600">
                      We may process Personal Data under the following conditions:
                    </p>
                    
                    <ul className="space-y-4 pl-4 text-gray-600">
                      <li className="space-y-2">
                        <p className="font-semibold">• Consent:</p>
                        <p className="ml-4">You have given Your consent for processing Personal Data for one or more specific purposes.</p>
                      </li>
                      
                      <li className="space-y-2">
                        <p className="font-semibold">• Performance of a contract:</p>
                        <p className="ml-4">Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.</p>
                      </li>
                      
                      <li className="space-y-2">
                        <p className="font-semibold">• Legal obligations:</p>
                        <p className="ml-4">Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.</p>
                      </li>
                      
                      <li className="space-y-2">
                        <p className="font-semibold">• Vital interests:</p>
                        <p className="ml-4">Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.</p>
                      </li>
                      
                      <li className="space-y-2">
                        <p className="font-semibold">• Public interests:</p>
                        <p className="ml-4">Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.</p>
                      </li>
                      
                      <li className="space-y-2">
                        <p className="font-semibold">• Legitimate interests:</p>
                        <p className="ml-4">Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.</p>
                      </li>
                    </ul>

                    <p className="mt-6 text-gray-600">
                      In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
                    </p>
                  </div>

                  {/* Your Rights Subsection */}
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights under the GDPR</h3>
                    <p className="mb-6 text-gray-600">
                      The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.
                    </p>
                    <p className="mb-6 text-gray-600">
                      You have the right under this Privacy Policy, and by law if You are within the EU, to:
                    </p>

                    <ul className="space-y-4 pl-4 text-gray-600">
                      <li className="space-y-2">
                        <p className="font-semibold">• Request access to Your Personal Data</p>
                        <p className="ml-4">The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• Request correction of the Personal Data that We hold about You</p>
                        <p className="ml-4">You have the right to have any incomplete or inaccurate information We hold about You corrected.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• Object to processing of Your Personal Data</p>
                        <p className="ml-4">This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• Request erasure of Your Personal Data</p>
                        <p className="ml-4">You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• Request the transfer of Your Personal Data</p>
                        <p className="ml-4">We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• Withdraw Your consent</p>
                        <p className="ml-4">You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Facebook Fan Page Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Facebook Fan Page</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Controller for the Facebook Fan Page</h3>
                    <p className="mb-6 text-gray-600">
                      The Company is the Data Controller of Your Personal Data collected while using the Service. As operator of the Facebook Fan Page{' '}
                      <a href="https://web.facebook.com/lemaracommercial/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                        https://web.facebook.com/lemaracommercial/
                      </a>
                      , the Company and the operator of the social network Facebook are joint controllers.
                    </p>
                    
                    <p className="mb-6 text-gray-600">
                      The Company has entered into agreements with Facebook that define the terms for use of the Facebook Fan Page, among other things. These terms are mostly based on the Facebook Terms of Service:{' '}
                      <a href="https://www.facebook.com/terms.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                        https://www.facebook.com/terms.php
                      </a>
                    </p>
                    
                    <p className="text-gray-600">
                      Visit the Facebook Privacy Policy{' '}
                      <a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                        https://www.facebook.com/policy.php
                      </a>
                      {' '}for more information about how Facebook manages Personal data or contact Facebook online, or by mail: Facebook, Inc. ATTN, Privacy Operations, 1601 Willow Road, Menlo Park, CA 94025, United States.
                    </p>
                  </div>
                </div>
              </div>

              {/* Facebook Insights Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Facebook Insights</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    We use the Facebook Insights function in connection with the operation of the Facebook Fan Page and on the basis of the GDPR, in order to obtain anonymized statistical data about Our users.
                  </p>
                  
                  <p>
                    For this purpose, Facebook places a Cookie on the device of the user visiting Our Facebook Fan Page. Each Cookie contains a unique identifier code and remains active for a period of two years, except when it is deleted before the end of this period.
                  </p>
                  
                  <p>
                    Facebook receives, records and processes the information stored in the Cookie, especially when the user visits the Facebook services, services that are provided by other members of the Facebook Fan Page and services by other companies that use Facebook services.
                  </p>
                  
                  <p>
                    For more information on the privacy practices of Facebook, please visit Facebook Privacy Policy here:{' '}
                    <a href="https://www.facebook.com/full_data_use_policy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors">
                      https://www.facebook.com/full_data_use_policy
                    </a>
                  </p>
                </div>
              </div>

              {/* CCPA Privacy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">CCPA Privacy</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights under the CCPA</h3>
                    <p className="mb-6 text-gray-600">
                      Under this Privacy Policy, and by law if You are a resident of California, You have the following rights:
                    </p>

                    <ul className="space-y-4 pl-4 text-gray-600">
                      <li className="space-y-2">
                        <p className="font-semibold">• The right to notice</p>
                        <p className="ml-4">You must be properly notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• The right to access / the right to request</p>
                        <p className="ml-4">The CCPA permits You to request and obtain from the Company information regarding the disclosure of Your Personal Data that has been collected in the past 12 months by the Company or its subsidiaries to a third-party for the third party's direct marketing purposes.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• The right to say no to the sale of Personal Data</p>
                        <p className="ml-4">You also have the right to ask the Company not to sell Your Personal Data to third parties. You can submit such a request by visiting our "Do Not Sell My Personal Information" section or web page.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• The right to know about Your Personal Data</p>
                        <p className="ml-4">You have the right to request and obtain from the Company information regarding the disclosure of the following:</p>
                        <ul className="ml-8 space-y-2 list-disc">
                          <li>The categories of Personal Data collected</li>
                          <li>The sources from which the Personal Data was collected</li>
                          <li>The business or commercial purpose for collecting or selling the Personal Data</li>
                          <li>Categories of third parties with whom We share Personal Data</li>
                          <li>The specific pieces of Personal Data we collected about You</li>
                        </ul>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• The right to delete Personal Data</p>
                        <p className="ml-4">You also have the right to request the deletion of Your Personal Data that have been collected in the past 12 months.</p>
                      </li>

                      <li className="space-y-2">
                        <p className="font-semibold">• The right not to be discriminated against</p>
                        <p className="ml-4">You have the right not to be discriminated against for exercising any of Your Consumer's rights, including by:</p>
                        <ul className="ml-8 space-y-2 list-disc">
                          <li>Denying goods or services to You</li>
                          <li>Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties</li>
                          <li>Providing a different level or quality of goods or services to You</li>
                          <li>Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* Exercising Your CCPA Data Protection Rights */}
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Exercising Your CCPA Data Protection Rights</h3>
                    <p className="mb-6 text-gray-600">
                      In order to exercise any of Your rights under the CCPA, and if you are a California resident, You can email or call us or visit our "Do Not Sell My Personal Information" section or web page.
                    </p>
                    <p className="text-gray-600">
                      The Company will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonable necessary and with prior notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Do Not Sell My Personal Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Do Not Sell My Personal Information</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    We do not sell personal information. However, the Service Providers we partner with (for example, our advertising partners) may use technology on the Service that "sells" personal information as defined by the CCPA law.
                  </p>
                  
                  <p>
                    If you wish to opt out of the use of your personal information for interest-based advertising purposes and these potential sales as defined under CCPA law, you may do so by following the instructions below.
                  </p>
                  
                  <p>
                    Please note that any opt out is specific to the browser You use. You may need to opt out on every browser that you use.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Website</h3>
                    <p className="mb-4">
                      You can opt out of receiving ads that are personalized as served by our Service Providers by following our instructions presented on the Service:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>From our "Cookie Consent" notice banner</li>
                      <li>Or from Our "CCPA Opt-out" notice banner</li>
                      <li>Or from Our "Do Not Sell My Personal Information" notice banner</li>
                      <li>Or from Our "Do Not Sell My Personal Information" link</li>
                    </ul>
                    <p className="mt-4">
                      The opt out will place a cookie on Your computer that is unique to the browser You use to opt out. If you change browsers or delete the cookies saved by your browser, you will need to opt out again.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Mobile Devices</h3>
                    <p className="mb-4">
                      Your mobile device may give you the ability to opt out of the use of information about the apps you use in order to serve you ads that are targeted to your interests:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                      <li>"Opt out of Interest-Based Ads" or "Opt out of Ads Personalization" on Android devices</li>
                      <li>"Limit Ad Tracking" on iOS devices</li>
                    </ul>
                    <p className="mt-4">
                      You can also stop the collection of location information from Your mobile device by changing the preferences on your mobile device.
                    </p>
                  </div>
                </div>
              </div>

              {/* "Do Not Track" Policy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">"Do Not Track" Policy as Required by California Online Privacy Protection Act (CalOPPA)</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Our Service does not respond to Do Not Track signals.
                  </p>
                  
                  <p>
                    However, some third party websites do keep track of Your browsing activities. If You are visiting such websites, You can set Your preferences in Your web browser to inform websites that You do not want to be tracked. You can enable or disable DNT by visiting the preferences or settings page of Your web browser.
                  </p>
                </div>
              </div>

              {/* Children's Privacy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                  </p>
                  
                  <p>
                    If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
                  </p>
                </div>
              </div>

              {/* Links to Other Websites Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>
                  
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                  </p>
                </div>
              </div>

              {/* Changes to this Privacy Policy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to this Privacy Policy</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                  </p>
                  
                  <p>
                    We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
                  </p>
                  
                  <p>
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </div>
               {/* Contact Us Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg mb-12 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-10 w-1 bg-red-900 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                </div>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    If you have any questions about these  Privacy Policy, You can contact us:
                  </p>
                  <p className="text-lg">
By email: business@lemaracommercial.com                  </p>
                  <div className="bg-white p-6 rounded-lg border border-gray-100 hover:border-red-900 transition-colors duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Our Contact Page</h3>
                        <Link 
                          href="/contact" 
                          className="text-red-900 hover:text-red-700 transition-colors inline-flex items-center group"
                        >
                          www.lemaracommercial.com/contact
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
