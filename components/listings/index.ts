/**
 * Component Exports
 */

// Card Components
export { default as StatCard } from './StatCard';

// Layout Components
export { default as StatGrid } from './StatGrid';
export { Map } from './Map';

// Section Components
export { default as AnalysisSection } from './AnalysisSection';
export { default as AffordabilityCalculator } from './AffordabilityCalculator';
// export { default as ImageGallery } from './ImageGallery';
// export { default as ListingSection } from './ListingSection';
// export { default as ExpandableSection } from './ExpandableSection';

/**
 * Type Exports
 */

// StatCard Types
export type {
  StatCardProps,
  BadgeProps,
  IndicatorProps,
  BadgeVariant
} from './StatCard';

// Grid Types
export type { StatGridProps } from './StatGrid';

// Section Types
export type { AnalysisSectionProps } from './AnalysisSection';
