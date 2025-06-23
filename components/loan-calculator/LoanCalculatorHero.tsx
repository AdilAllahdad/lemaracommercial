import Image from 'next/image';
import { motion } from 'framer-motion';

export function LoanCalculatorHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">      <Image
        src="/images/Loan_Conventional_a.jpg"
        alt="Loan Calculator"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          LOAN CALCULATOR
        </motion.h1>
        <div className="h-1 w-24 bg-red-900 mx-auto mb-6"></div>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Free loan calculator to find the repayment plan, interest cost, and amortization schedule of conventional amortized loans, deferred payment loans, and bonds.
        </motion.p>
      </div>
    </section>
  );
}
