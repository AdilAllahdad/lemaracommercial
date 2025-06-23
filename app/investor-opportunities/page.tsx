'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function InvestorOpportunitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <Image
          src="/images/service1.jpg"
          alt="Investment Opportunities"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Investment Projects</h1>
          <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
          <p className="text-xl max-w-2xl mx-auto">
            We can provide professional evaluation and selection of a particular investment project you have.
          </p>
        </div>
      </section>      {/* Success Factors Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-8">Investment Success Factors</h2>
              <p className="text-lg text-gray-700 mb-6">
                Success is determined by a number of factors. The main ones include the cost of the project, the availability of alternative investment opportunities, limited financial resources, investment risk, profit and payback period of projects.
              </p>
              
            </div>
            <div className="flex-1 relative h-[400px] w-full">
              <Image
                src="/images/service2.jpg"
                alt="Investment Success"
                fill
                className="object-cover rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Evaluation Questions */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Investment Considerations</h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            There are several questions about the purpose and effectiveness of investments, in particular:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">What is the goal of the project?</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">What impact will the project have on the current and future activities of the participants?</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">How will the organizational structure of the business change?</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">How quickly will the project targets be achieved?</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">Does the company have the experience to realize the opportunities created by the project?</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">What resources are needed for the success of the project?</p>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2">•</span>
                  <p className="text-lg">What are the possible risks and opportunities to reduce them?</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Project Evaluation Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Investment Evaluation Process</h2>
            <p className="text-lg text-gray-700 mb-4">
              In addition to helping you work through each of these important questions, we can help you conduct a comprehensive assessment of the planned project and select the most appropriate alternatives.
            </p>
            <p className="text-lg text-gray-700">
              Things we look for to help you in your investment project are advanced financial, marketing, management and other methods.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xl font-semibold text-center mb-8">
              We work through with you the choice of the investment option in a sequence of the following tasks:
            </p>
            
            <div className="grid gap-6">
              {/*
                {
                  step: 1,
                  title: "Choosing the optimal project criteria",
                  description: "profit, profitability, project cost, need for borrowed funds, market share, payback period, etc."
                },
                {
                  step: 2,
                  title: "Mathematical assessment of the goals",
                  description: "of the investment project, the chances of achieving them, risks and adverse conditions."
                },
                {
                  step: 3,
                  title: "Choosing the most appropriate method",
                  description: "for comparing investment alternatives."
                },
                {
                  step: 4,
                  title: "Establishment of optimal solutions",
                  description: "taking into account the initial data and the requirements of the participants."
                },
                {
                  step: 5,
                  title: "Selection of the solution",
                  description: "recommended from the optimal range."
                }
              */}              {[
                {
                  step: 1,
                  title: "Choosing the optimal project criteria",
                  description: "profit, profitability, project cost, need for borrowed funds, market share, payback period, etc."
                },
                {
                  step: 2,
                  title: "Mathematical assessment of the goals",
                  description: "of the investment project, the chances of achieving them, risks and adverse conditions."
                },
                {
                  step: 3,
                  title: "Choosing the most appropriate method",
                  description: "for comparing investment alternatives."
                },
                {
                  step: 4,
                  title: "Establishment of optimal solutions",
                  description: "taking into account the initial data and the requirements of the participants."
                },
                {
                  step: 5,
                  title: "Selection of the solution",
                  description: "recommended from the optimal range."
                }
              ].map((item) => (
                <div key={item.step} className="flex items-start p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-900 text-white rounded-full mr-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold">{item.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-900 transition-colors duration-300">{item.title}</h3>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Details Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Business Plan Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Business Plan Requirements</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Small-business owners often need more than just their own money before they open the doors or choose to expand. Private investors or established financial institutions want to know why they should finance someone else's idea. A common way to present a project is through a business plan that includes an overview, a strategy for implementation and projected financial data. Net present value and the internal rate of return are two popular methods of demonstrating whether a project will be a good investment. A common but less-effective method is the profitability index.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Non-Financial Data Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Non-Financial Data</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <p className="text-lg text-gray-700 mb-6">
                  An explanation of what a project will entail is as important as its expected financial results. Investors want to see that a business owner has a well-thought-out plan, including contingencies.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-red-900 mr-3 text-xl">•</span>
                    <p className="text-gray-700">Who the project will benefit</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-900 mr-3 text-xl">•</span>
                    <p className="text-gray-700">Potential roadblocks</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-900 mr-3 text-xl">•</span>
                    <p className="text-gray-700">Reasons for implementation</p>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 mt-6">
                  Some investors are primarily swayed by the project's idea and its principles. For example, some investors back projects based on their social value. An example of a project with social value would be the building of a new homeless shelter.
                </p>
              </div>
            </div>

            {/* Net Present Value Section */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Net Present Value</h3>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <p className="text-lg text-gray-700 mb-6">
                  Most investors want to know that they will get something in return. At the very least, they need to know whether an investment will make financial sense.
                </p>
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Net present value is a calculation that shows the present-day value of a project's expected future income minus its initial cost. Future income is discounted according to an acceptable return rate. A positive net present value means that a project will make money. Higher net present values tend to be strong indicators of profitability.
                  </p>
                  <div className="border-l-4 border-red-900 pl-4 mt-6">
                    <p className="text-gray-700 italic">
                      A successful choice of an investment object in a rapidly changing market environment requires appropriate marketing research, the results of which should form the basis of both the development of a company's investment strategy and the choice of a specific investment instrument.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20">
        <Image
          src="/images/Loan_Construction_a.jpg"
          alt="Investment Call to Action"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let our experienced team help you evaluate and optimize your investment opportunities. Get in touch today to begin the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-900 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
