import { ReactNode } from 'react';

export interface StatGridProps {
  children: ReactNode;
  columns?: number;
  className?: string;
}

export default function StatGrid({ children, columns = 2, className = '' }: StatGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 ${className}`}>
      {children}
    </div>
  );
}
