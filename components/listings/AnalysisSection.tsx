import { ReactNode } from 'react';
import Image from 'next/image';

export interface AnalysisSectionProps {
  title: string;
  icon: string;
  iconColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  children: ReactNode;
}

export default function AnalysisSection({
  title,
  icon,
  iconColor = 'text-indigo-600',
  gradientFrom = 'from-indigo-100',
  gradientTo = 'to-indigo-50',
  children
}: AnalysisSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
          <Image src={icon} alt="" width={24} height={24} className={iconColor} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="grid gap-4">
        {children}
      </div>
    </div>
  );
}
