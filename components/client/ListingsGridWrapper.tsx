'use client';

import dynamic from 'next/dynamic';

const ListingsGrid = dynamic(() => import('./ListingsGrid'), {
  ssr: false
});

export default function ListingsGridWrapper() {
  return <ListingsGrid />;
}
