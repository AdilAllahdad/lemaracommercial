import Link from 'next/link';

interface BreadcrumbsProps {
  title: string;
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <div className="mb-8">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-300 mx-2">/</span>
          </li>
          <li>
            <Link href="/listings" className="text-gray-500 hover:text-gray-700">
              Listings
            </Link>
          </li>
          <li>
            <span className="text-gray-300 mx-2">/</span>
          </li>
          <li>
            <span className="text-gray-900 font-medium">{title}</span>
          </li>
        </ol>
      </nav>
    </div>
  );
}
