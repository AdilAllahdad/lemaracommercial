'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[30vh] min-h-[200px] w-full flex items-center justify-center">
        <Image
          src="/images/service2.jpg"
          alt="Terms and Conditions - Lemara Commercial"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Terms and Conditions</h1>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Last updated: June 23, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Please read these terms and conditions carefully before using Our Service.
              </p>

              {/* Interpretation and Definitions */}
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
                    For the purposes of these Terms and Conditions:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Affiliate</span>
                      <span className="text-gray-600 ml-4">means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Account</span>
                      <span className="text-gray-600 ml-4">means a unique account created for You to access our Service or parts of our Service.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Company</span>
                      <span className="text-gray-600 ml-4">(referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Lemara Commercial. Inc, 770 L Street, Suite 950, Sacramento, CA 95814.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Content</span>
                      <span className="text-gray-600 ml-4">refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Country</span>
                      <span className="text-gray-600 ml-4">refers to: California, United States</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Device</span>
                      <span className="text-gray-600 ml-4">means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Feedback</span>
                      <span className="text-gray-600 ml-4">means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Service</span>
                      <span className="text-gray-600 ml-4">refers to the Website.</span>
                    </li>
                     <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Terms and Conditions</span>
                      <span className="text-gray-600 ml-4">(also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• Third-party Social Media Service </span>
                      <span className="text-gray-600 ml-4">means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</span>
                    </li>
                       <li className="flex flex-col">                      <span className="font-semibold text-gray-900">• Website  </span>
                      <span className="text-gray-600 ml-4">refers to Lemara Commercial, accessible from <Link href="/" className="text-blue-500 hover:text-blue-700 transition-colors">www.lemaracommercial.com</Link></span>
                    </li>
                     <li className="flex flex-col">
                      <span className="font-semibold text-gray-900">• You </span>
                      <span className="text-gray-600 ml-4">means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Acknowledgement Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acknowledgement</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  </p>
                  <p>
                    Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                  </p>
                  <p>
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                  </p>
                  <p>
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                  </p>
                </div>
              </div>

              {/* User Accounts Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.
                  </p>
                  <p>
                    You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.
                  </p>
                  <p>
                    You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.
                  </p>
                  <p>
                    You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Content</h2>

                {/* Your Right to Post Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Right to Post Content</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Our Service allows You to post Content. You are responsible for the Content that You post to the Service, including its legality, reliability, and appropriateness.
                    </p>
                    <p>
                      By posting Content to the Service, You grant Us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You retain any and all of Your rights to any Content You submit, post or display on or through the Service and You are responsible for protecting those rights. You agree that this license includes the right for Us to make Your Content available to other users of the Service, who may also use Your Content subject to these Terms.
                    </p>
                    <p>
                      You represent and warrant that: (i) the Content is Yours (You own it) or You have the right to use it and grant Us the rights and license as provided in these Terms, and (ii) the posting of Your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
                    </p>
                  </div>
                </div>

                {/* Content Restrictions */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Restrictions</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The Company is not responsible for the content of the Service's users. You expressly understand and agree that You are solely responsible for the Content and for all activity that occurs under your account, whether done so by You or any third person using Your account.
                    </p>
                    <p>
                      You may not transmit any Content that is unlawful, offensive, upsetting, intended to disgust, threatening, libelous, defamatory, obscene or otherwise objectionable. Examples of such objectionable Content include, but are not limited to, the following:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Unlawful or promoting unlawful activity.</li>
                      <li>Defamatory, discriminatory, or mean-spirited content, including references or commentary about religion, race, sexual orientation, gender, national/ethnic origin, or other targeted groups.</li>
                      <li>Spam, machine – or randomly – generated, constituting unauthorized or unsolicited advertising, chain letters, any other form of unauthorized solicitation, or any form of lottery or gambling.</li>
                      <li>Containing or installing any viruses, worms, malware, trojan horses, or other content that is designed or intended to disrupt, damage, or limit the functioning of any software, hardware or telecommunications equipment or to damage or obtain unauthorized access to any data or other information of a third person.</li>
                      <li>Infringing on any proprietary rights of any party, including patent, trademark, trade secret, copyright, right of publicity or other rights.</li>
                      <li>Impersonating any person or entity including the Company and its employees or representatives.</li>
                      <li>Violating the privacy of any third person.</li>
                      <li>False information and features.</li>
                    </ul>
                    <p>
                      The Company reserves the right, but not the obligation, to, in its sole discretion, determine whether or not any Content is appropriate and complies with this Terms, refuse or remove this Content. The Company further reserves the right to make formatting and edits and change the manner of any Content. The Company can also limit or revoke the use of the Service if You post such objectionable Content.
                    </p>
                    <p>
                      As the Company cannot control all content posted by users and/or third parties on the Service, you agree to use the Service at your own risk. You understand that by using the Service You may be exposed to content that You may find offensive, indecent, incorrect or objectionable, and You agree that under no circumstances will the Company be liable in any way for any content,including any errors or omissions in any content, or any loss or damage of any kind incurred as a result of your use of any content.
                    </p>
                  </div>
                </div>

                {/* Content Backups */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Backups</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Although regular backups of Content are performed, the Company do not guarantee there will be no loss or corruption of data.
                    </p>
                    <p>
                      Corrupt or invalid backup points may be caused by, without limitation, Content that is corrupted prior to being backed up or that changes during the time a backup is performed.
                    </p>
                    <p>
                      The Company will provide support and attempt to troubleshoot any known or discovered issues that may affect the backups of Content. But You acknowledge that the Company has no liability related to the integrity of Content or the failure to successfully restore Content to a usable state.
                    </p>
                    <p>
                      You agree to maintain a complete and accurate copy of any Content in a location independent of the Service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Copyright Policy Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Copyright Policy</h2>

                {/* Intellectual Property Infringement */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property Infringement</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      We respect the intellectual property rights of others. It is Our policy to respond to any claim that Content posted on the Service infringes a copyright or other intellectual property infringement of any person.
                    </p>
                    <p>
                      If You are a copyright owner, or authorized on behalf of one, and You believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, You must submit Your notice in writing to the attention of our copyright agent via email at business@lemaracommercial.com and include in Your notice a detailed description of the alleged infringement.
                    </p>
                    <p>
                      You may be held accountable for damages (including costs and attorneys' fees) for misrepresenting that any Content is infringing Your copyright.
                    </p>
                  </div>
                </div>

                {/* DMCA Notice */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">DMCA Notice and DMCA Procedure for Copyright Infringement Claims</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest.</li>
                      <li>A description of the copyrighted work that You claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work.</li>
                      <li>Identification of the URL or other specific location on the Service where the material that You claim is infringing is located.</li>
                      <li>Your address, telephone number, and email address.</li>
                      <li>A statement by You that You have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law.</li>
                      <li>A statement by You, made under penalty of perjury, that the above information in Your notice is accurate and that You are the copyright owner or authorized to act on the copyright owner's behalf.</li>
                    </ul>
                    <p>
                      You can contact our copyright agent via email at business@lemaracommercial.com. Upon receipt of a notification, the Company will take whatever action, in its sole discretion, it deems appropriate, including removal of the challenged content from the Service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.
                  </p>
                  <p>
                    The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.
                  </p>
                  <p>
                    Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.
                  </p>
                </div>
              </div>

              {/* Your Feedback Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Feedback to Us</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.
                  </p>
                </div>
              </div>

              {/* Links to Other Websites Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Links to Other Websites</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                  </p>
                  <p>
                    The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                  </p>
                  <p>
                    We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                  </p>
                </div>
              </div>

              {/* Termination Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                  </p>
                  <p>
                    Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                  </p>
                  <p>
                    Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                  </p>
                </div>
              </div>

              {/* "AS IS" and "AS AVAILABLE" Disclaimer Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                  </p>
                  <p>
                    Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                  </p>
                </div>
              </div>

              {/* Governing Law Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                  </p>
                </div>
              </div>

              {/* Disputes Resolution Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Disputes Resolution</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                  </p>
                </div>
              </div>

              {/* For European Union (EU) Users Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">For European Union (EU) Users</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                  </p>
                </div>
              </div>

              {/* United States Legal Compliance Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">United States Legal Compliance</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                  </p>
                </div>
              </div>

              {/* Severability and Waiver Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Severability and Waiver</h2>
                
                {/* Severability */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Severability</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                    </p>
                  </div>
                </div>

                {/* Waiver */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Waiver</h3>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                    </p>
                  </div>
                </div>
              </div>

              {/* Translation Interpretation Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Translation Interpretation</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
                  </p>
                </div>
              </div>

              {/* Changes to Terms and Conditions Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to These Terms and Conditions</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                  </p>
                  <p>
                    By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
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
                    If you have any questions about these Terms and Conditions, we're here to help:
                  </p>
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
