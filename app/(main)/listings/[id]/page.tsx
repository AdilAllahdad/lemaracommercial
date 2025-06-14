'use client';

import { use, Suspense } from 'react';
import { listings } from '@/app/data/listings';
import { agent } from '@/app/data/agent';
import { Gallery } from '@/components/listings/listingDetails';
import { DocumentTypes } from '@/components/listings/listingDetails';
import { Description } from '@/components/listings/listingDetails';
import { PropertyQuickStats } from '@/components/listings/listingDetails';
import { FinancialQuickStats } from '@/components/listings/listingDetails';
import { AnalysisGrid } from '@/components/listings/listingDetails';
import { LocationMap } from '@/components/listings/listingDetails';
import { ContactForm } from '@/components/listings/listingDetails';
import { AffordabilityCalculator } from '@/components/listings/listingDetails';
import type { Listing } from '@/types/listings';
import Breadcrumbs from '@/components/listings/listingDetails/Breadcrumbs';

function ListingContent({ listing }: { listing: Listing }) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs title={listing.title} />
        
        {/* Main Content */}        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <Gallery 
            images={listing.gallery} 
            title={listing.title} 
            location={listing.location}
          />
          
          <DocumentTypes />

          <PropertyQuickStats 
            yearBuilt="N/A"
            floors="N/A"
            totalSpace="N/A"
            buildingClass="N/A"
            lotSize="520 Acres"
          />

          <FinancialQuickStats 
            purchasePrice="$9,990,000"
            grossIncome="N/A"
            monthlyCashFlow="$--"
            cashOnCashReturn="N/A"
          />

          {/* Analysis Grid */}
          <AnalysisGrid 
            financialAnalysis={{
              cashOnCashReturn: 'N/A',
              irr: 'N/A',
              capRate: '0.00%',
              grossRentMultiplier: 'N/A',
              operatingExpenseRatio: 'N/A',
              debtCoverageRatio: '0.00'
            }}
            operatingAnalysis={{
              grossIncome: 'N/A',
              totalExpenses: 'N/A',
              netOperatingIncome: 'N/A',
              annualDebtService: 'N/A',
              cashFlowBeforeTaxes: 'N/A'
            }}
            marketAnalysis={{
              propertyType: 'Multi-Family',
              submarket: 'Rising Area',
              yearBuilt: 'N/A',
              lotSize: '520 Acres'
            }}
          />

          <Description 
            highlight="Large Commercial Property"
            mainDescription={listing.description}
            infrastructure={{
              title: "Infrastructure",
              items: [
                "Modern 10,000 sq ft greenhouse featuring automated light dep system",
                "GREENHOUSE: Large-scale commercial greenhouse structure",
                "BARN: 30×50 barn/shop with 10' overhangs on each side",
                "Standalone bathroom with a shower",
                "Small solar system to power everything"
              ]
            }}
            financialHighlights={{
              title: "Financial Highlights",
              items: [
                "Approximately 500k profit from 10k sq. Ft",
                "Gross sales potential: 1.2 -1.5 Million",
                "Net approximately $500,000"
              ]
            }}
            currentStatus="Active"
            cultivationInfo={{
              description: "Current cultivation details",
              items: []
            }}
            specialRemarks={{
              description: "Special notes",
              items: []            }}            disclaimer="This information has been secured from sources we believe to be reliable, but we make no representations or warranties as to the accuracy of the information."
          />

          <AffordabilityCalculator
            initialPrice={Number(listing.price.replace(/[^0-9.-]+/g, ''))}
            initialNOI={0}
            initialDownPaymentPercent={50}
            initialInterestRate={3.8}
            initialLoanType="30-years fixed"
            agent={agent}
          />

          <LocationMap 
            location={listing.location}
            listing={{
              title: listing.title,
              price: listing.price
            }}
          />
          
          <ContactForm propertyTitle={listing.title} />
          
        </div>
      </div>
    </div>
  );
}

export default function ListingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const foundListing = listings.find(l => l.id === resolvedParams.id);

  if (!foundListing) {
    return <div className="min-h-screen flex items-center justify-center">Listing not found</div>;
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ListingContent listing={foundListing} />
    </Suspense>
  );
}