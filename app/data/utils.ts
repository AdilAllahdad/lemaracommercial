import { listings } from './listings';
import type { Listing } from '@/types/listings';

export function getListing(id: string): Listing | undefined {
  return listings.find(listing => listing.id === id);
}
