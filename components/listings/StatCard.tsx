import Image from 'next/image';
import { memo } from 'react';

export type BadgeVariant = 'primary' | 'success' | 'warning' | 'danger';

export interface BadgeProps {
  text: string;
  variant?: BadgeVariant;
}

export interface IndicatorProps {
  color: string;
  text: string;
}

export interface StatCardProps {
  icon?: string;
  title: string;
  value: string | number;
  suffix?: string;
  className?: string;
  iconClassName?: string;
  indicator?: IndicatorProps;
  badge?: BadgeProps;
  valueClassName?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

const BadgeStyles: Record<BadgeVariant, string> = {
  primary: 'bg-indigo-50 text-indigo-600',
  success: 'bg-emerald-400/20 text-white',
  warning: 'bg-amber-50 text-amber-600',
  danger: 'bg-red-50 text-red-600'
};

function StatBadge({ text, variant = 'primary' }: BadgeProps) {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${BadgeStyles[variant]}`}>
      {text}
    </span>
  );
}

function StatIndicator({ color, text }: IndicatorProps) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <div className={`w-2 h-2 rounded-full ${color}`} />
      <p className={`text-sm ${color.replace('bg-', 'text-')}`}>{text}</p>
    </div>
  );
}

const StatCard = memo(function StatCard({
  icon,
  title,
  value,
  suffix,
  className = '',
  iconClassName = 'text-gray-600',
  indicator,
  badge,
  valueClassName = 'text-2xl font-bold text-gray-900',
  onClick,
  isLoading
}: StatCardProps) {
  const cardContent = (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        {icon ? (
          <div className="flex items-center gap-2">
            <Image src={icon} alt="" width={20} height={20} className={iconClassName} />
            <p className="text-sm font-medium text-gray-500">{title}</p>
          </div>
        ) : (
          <p className="text-sm font-medium text-gray-500">{title}</p>
        )}
        {badge && <StatBadge {...badge} />}
      </div>
      
      <div className="flex items-baseline gap-2">
        {isLoading ? (
          <div className="h-8 w-24 bg-gray-200 animate-pulse rounded" />
        ) : (
          <>
            <p className={valueClassName}>{value}</p>
            {suffix && <p className="text-sm text-gray-500">{suffix}</p>}
          </>
        )}
      </div>

      {indicator && <StatIndicator {...indicator} />}
    </div>
  );

  const baseClasses = `group p-4 rounded-xl transition-all duration-200 ${className}`;
  const wrapperClasses = onClick ? `${baseClasses} cursor-pointer hover:scale-[1.02]` : baseClasses;

  return onClick ? (
    <button onClick={onClick} className={wrapperClasses}>
      {cardContent}
    </button>
  ) : (
    <div className={wrapperClasses}>
      {cardContent}
    </div>
  );
});

export default StatCard;
